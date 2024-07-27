$(document).ready(function () {
    const animeDuration = 400;
    const demarcation = 768;
    var menuItems;
    var shownItems;
    const itemWidth = 240;
    const itemHeight = 50;
    var menuWidth = $('.menu').width();
    var menuHeight = $('.menu').height();
    var totalPages = 1;

    // 载入目录
    $('.menu').load("./static/script/menu.html", function () {
        menuItems = $('.menu li');
        shownItems = menuItems;
        generateMenuPages(menuItems, shownItems);
    });

    // 根据所选路线筛选目录条目
    $('.clearlist li').on('click', function () {
        const clickedId = $(this).attr('id');
        if (!$(this).hasClass('active')) {
            $('.clearlist li').removeClass('active');
            $(this).addClass('active');
            if (clickedId === 'btn-all') {
                shownItems = menuItems;
            } else if (clickedId === 'btn-kyoju') {
                shownItems = menuItems.filter('.p1, .p2, .ed-kyoju');
            } else if (clickedId === 'btn-maho') {
                shownItems = menuItems.filter('.p1, .p3, .ed-maho');
            } else if (clickedId === 'btn-kagari') {
                shownItems = menuItems.filter('.p1, .p3, .p4, .ed-kagari');
            } else if (clickedId === 'btn-kurisu') {
                shownItems = menuItems.filter('.p1, .p3, .p4, .ed-kurisu');
            } else if (clickedId === 'btn-mayuri') {
                shownItems = menuItems.filter('.p1, .p2, .ed-mayuri');
            } else if (clickedId === 'btn-kyoma') {
                shownItems = menuItems.filter('.p1, .p2, .ed-mayuri, .ed-kyoma');
            }
            generateMenuPages(menuItems, shownItems);
        }
    });

    // 窗口宽度变化时重新生成目录
    $(window).resize(function () {
        if ($(window).width() > demarcation) { // 只在宽屏模式生效
            if (Math.floor($('.menu').width() / itemWidth) !== Math.floor(menuWidth / itemWidth)) {
                generateMenuPages(menuItems, shownItems);
            }
        }
    });

    // 目录生成函数
    function generateMenuPages(mItems, sItems) {
        // 根据所选路线显示目录条目
        mItems.hide();
        sItems.fadeIn(animeDuration);

        if ($(window).width() > demarcation) { // 只在宽屏模式生效
            // 根据屏幕宽高和元素大小，计算目录总页数
            menuWidth = $('.menu').width();
            const itemsPerRow = Math.floor(menuWidth / itemWidth);
            const itemsPerColumn = Math.floor(menuHeight / itemHeight);
            const itemsPerPage = itemsPerColumn * itemsPerRow;
            totalPages = Math.ceil(sItems.length / itemsPerPage);
            // 去掉 .menu 多余的高度（目录高度应为条目高度的整数倍）
            menuHeight = itemsPerColumn * itemHeight;
            $('.menu').css('height', menuHeight);

            // 为目录中每个条目添加所在页码
            mItems.each(function () {
                $(this).attr('data-page', '0');
            });
            sItems.each(function (index) {
                let pageValue = Math.floor(index / itemsPerPage) + 1;
                $(this).attr('data-page', pageValue);
            });

            // 根据总页数生成翻页按钮，并绑定翻页方法
            $('.page-index').empty();
            for (let page = 1; page <= totalPages; page++) {
                const button = $(`<li id=${page}></li>`);
                // const button = $(`<button>Page ${page}</button>`);
                button.on('click', function () {
                    $('.page-index li').removeClass('active')
                    $(this).addClass('active');
                    // mItems.hide();
                    // mItems.filter(`[data-page="${page}"]`).fadeIn(animeDuration);
                    const targetPage = $(this).attr('id');
                    const targetDistance = (targetPage - 1) * itemsPerRow * itemWidth;
                    $('.menu').animate({ scrollLeft: targetDistance }, animeDuration);
                });
                $('.page-index').append(button);
            }
            $('.page-index li:first').click();
        }
    }

    // 鼠标滚轮左右翻页
    $('.menu').on('mousewheel DOMMouseScroll', function (event) {
        if ($(window).width() > demarcation && totalPages > 1) { // 只在宽屏模式生效
            const currentPage = +$('.page-index li.active').attr('id');
            let targetPage = currentPage;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                if (currentPage > 1) {
                    // 鼠标滚轮向上滚动，向左翻页
                    targetPage = currentPage - 1;
                }
            } else {
                if (currentPage < totalPages) {
                    // 鼠标滚轮向下滚动，向右翻页
                    targetPage = currentPage + 1;
                }
            }

            if (targetPage != currentPage) {
                $(`.page-index #${targetPage}`).click();
            }
        }
    });

    { // 触屏滑动左右翻页
        let touchElement = $('.menu');
        let startX;
        let currentPage = 1;
        let targetPage = 0;

        // 触摸开始时的处理
        touchElement.on('touchstart', function (event) {
            if ($(window).width() > demarcation && totalPages > 1) { // 只在宽屏模式生效
                startX = event.originalEvent.touches[0].clientX;
                currentPage = +$('.page-index li.active').attr('id');
                targetPage = currentPage;
            }
        });

        // 触摸过程中的处理
        touchElement.on('touchmove', function (event) {
            if ($(window).width() > demarcation && totalPages > 1) { // 只在宽屏模式生效
                event.preventDefault(); // 防止默认的滚动行为
                let deltaX = event.originalEvent.touches[0].clientX - startX;
                if (deltaX > 50 && currentPage > 1) {
                    // 向右滑动，向左翻页
                    targetPage = currentPage - 1;
                } else if (deltaX < -50 && currentPage < totalPages) {
                    // 向左滑动，向右翻页
                    targetPage = currentPage + 1;
                }
            }
        });

        // 触摸结束时的处理
        touchElement.on('touchend', function (event) {
            if (targetPage !== currentPage) {
                $(`.page-index #${targetPage}`).click();
            }
        });
    }

    // 页面上下滚动时，根据滚动的距离设置 header 背景透明度
    $(window).on('scroll', function (event) {
        if ($(window).width() <= demarcation) { // 只在窄屏模式生效
            const sMax = $('.header').height();
            let st = $(window).scrollTop();
            let sta = Math.min(st / sMax, 1);
            $('.header').css('background-color', `rgba(50, 50, 50, ${sta})`);
        }
    });

});
