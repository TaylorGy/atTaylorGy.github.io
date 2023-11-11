$(document).ready(function () {
    const animeDuration = 400;
    const demarcation = 768;
    var menuItems;
    var shownItems;
    const itemWidth = 240;
    const itemHeight = 50;
    const menuHeight = $('.menu').height();
    var menuWidth = $('.menu').width();
    var totalPages = 1;

    $('.menu').load("./static/script/menu.html", function () {
        menuItems = $('.menu li');
        shownItems = menuItems;
        generateMenuPages(menuItems, shownItems);
    });

    // 根据所选路线切换目录项目
    $('.clearlist li').on('click', function () {
        const clickedId = $(this).attr('id');
        if (!$(this).find('.mask1').hasClass('active')) {
            $('.clearlist li').find('.mask1, .mask2, span').removeClass('active');
            $(this).find('.mask1, .mask2, span').addClass('active');
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
                shownItems = menuItems.filter('.p1, .p2, ed-mayuri, .ed-kyoma');
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

    // 鼠标滚轮翻页
    $('.menu').on('mousewheel DOMMouseScroll', function (event) {
        if ($(window).width() > demarcation) { // 只在宽屏模式生效
            if (totalPages > 1) {
                const currentPage = $('.page-index li.active').attr('id');
                let targetPage = 0;
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                    // 鼠标滚轮向上滚动，向左翻页
                    targetPage = currentPage - 1;
                } else {
                    // 鼠标滚轮向下滚动，向右翻页
                    targetPage = +currentPage + 1;
                }
                // console.log(targetPage);

                if (1 <= targetPage <= totalPages) {
                    $(`.page-index #${targetPage}`).click();
                }
            }
        }
    });


    { // 触屏左右滑动翻页 
        let touchElement = $('.menu');
        let startX;
        let targetPage = 0;
        touchElement.on('touchstart', function (e) {
            startX = e.originalEvent.touches[0].clientX;
        });

        touchElement.on('touchmove', function (e) {
            if ($(window).width() > demarcation) { // 只在宽屏模式生效

                e.preventDefault(); // 防止默认的滚动行为
                let deltaX = e.originalEvent.touches[0].clientX - startX;

                if (totalPages > 1) {
                    const currentPage = $('.page-index li.active').attr('id');
                    if (deltaX > 50) {
                        // 向右滑动，向左翻页
                        targetPage = currentPage - 1;
                    } else if (deltaX < -50) {
                        // 向左滑动，向右翻页
                        targetPage = +currentPage + 1;
                    }
                }
            }
        });

        touchElement.on('touchend', function (e) {
            if ($(window).width() > demarcation) { // 只在宽屏模式生效

                // 在这里可以进行触摸结束时的处理
                if (1 <= targetPage <= totalPages) {
                    $(`.page-index #${targetPage}`).click();
                }
            }
        });
    }

    // 根据屏幕宽度和元素大小，动态计算目录的页数，并生成翻页按钮
    function generateMenuPages(mItems, sItems) {
        menuWidth = $('.menu').width();

        const itemsPerPage = Math.floor(menuHeight / itemHeight) * Math.floor(menuWidth / itemWidth);
        totalPages = Math.ceil(sItems.length / itemsPerPage);

        mItems.each(function () {
            $(this).attr('data-page', '0');
        });
        sItems.each(function (index) {
            let pageValue = Math.floor(index / itemsPerPage) + 1;
            $(this).attr('data-page', pageValue);
        });

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
                const targetDistance = (targetPage - 1) * menuWidth;
                $('.menu').animate({ scrollLeft: targetDistance }, animeDuration);
            });
            $('.page-index').append(button);
        }
        mItems.hide();
        sItems.fadeIn(animeDuration);
        $('.page-index li:first').click();
    }
});

