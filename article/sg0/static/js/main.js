$(document).ready(function () {
    var menuItems;
    var shownItems;

    $('.menu').load("./static/script/menu.html", function () {
        menuItems = $('.menu li');
        shownItems = menuItems;
        generateMenuPages(menuItems, shownItems);
    });

    // 根据所选路线切换目录
    $('.clearlist li').on('click', function () {
        const clickedId = $(this).attr('id');
        if (!$(this).find('.mask1').hasClass('active')) {
            $('.clearlist li').find('.mask1').removeClass('active');
            $(this).find('.mask1').addClass('active');
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

    // 根据屏幕宽度和元素大小，动态计算目录的页数，并生成翻页按钮
    function generateMenuPages(mItems, sItems) {
        const itemWidth = 236;
        const itemHeight = 50;
        const menuHeight = 600;
        const menuWidth = $('.menu').width();
        const animeDuration = 400;

        const itemsPerPage = Math.floor(menuHeight / itemHeight) * Math.floor(menuWidth / itemWidth);
        const totalPages = Math.ceil(sItems.length / itemsPerPage);

        mItems.each(function () {
            $(this).attr('data-page', '0');
        });
        sItems.each(function (index) {
            var pageValue = Math.floor(index / itemsPerPage) + 1;
            $(this).attr('data-page', pageValue);
        });

        $('.page-index').empty();
        for (let page = 1; page <= totalPages; page++) {
            const button = $(`<li id=page-${page}></li>`);
            // const button = $(`<button>Page ${page}</button>`);
            button.on('click', function () {
                $('.page-index li').removeClass('active')
                $(this).addClass('active');
                // mItems.hide();
                // mItems.filter(`[data-page="${page}"]`).fadeIn(animeDuration);
                const targetPage = $(this).attr('id').replace('page-', '');
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

