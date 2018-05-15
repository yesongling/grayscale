var grayscleImg = {
        init: function( ){
            GrayScaleUtil.makeBGImgGrayScale( $('#jq-third-nav') );
        }
    };
    // GrayScale Util
    var accesibilityUtil = {
        addGrayScale: function () {
            if( $.browser.msie || $.browser.mozilla || $.browser.msedge) {
                $('body').addClass('body-grayScale');
                $('img:not(#grayscal-img, .bag-icon, img.bottom-icon, #loader-overlay:hidden img, .product-banner-slick:hidden img, .jq-rechargeslick:hidden img,.i-ticket-phone, .loading-gif), .icon-shoppingCart-desk, .icon-arrow-circle-right, .icon-phone-dollar, .icon-market-search, .icon-phone-hand, .icon-phone-star,' +
                    '.icon-dollar, .icon-calendar, .icon-close-circle, .icon-arrow-cRight, .asistencia-support-list-img, .i-loading-plus').each(function(){
                    if( !$(this).is("image") ) {
                        $(this).gray();
                    }
                });
                $('img:not(#grayscal-img, .bag-icon, img.bottom-icon, #loader-overlay:hidden img, .product-banner-slick:hidden img, .jq-rechargeslick:hidden img, .loading-gif, .i-ticket-phone), .icon-shoppingCart-desk, .icon-arrow-circle-right, .icon-phone-dollar, .icon-market-search, .icon-phone-hand, .icon-phone-star,' +
                    '.icon-dollar, .icon-calendar, .icon-close-circle, .icon-arrow-cRight, .asistencia-support-list-img, .i-loading-plus').addClass('grayscale');
                $('.grayscale').removeClass('grayscale-off');

                GrayScaleUtil.makeImgGrayScale( $('img.bag-icon, img.bottom-icon, img.i-ticket-phone, img.loading-gif') );

                grayscleImg.init();
            }else {
                $('body').addClass('grayscale');
            }


        },
        removeGrayScale: function () {
            if( $.browser.msie || $.browser.mozilla || $.browser.msedge ) {
                $('body').removeClass('body-grayScale');
                $('.grayscale').addClass('grayscale-off');
                grayscleImg.init();
                GrayScaleUtil.makeImgGrayScale( $('img.bag-icon, img.bottom-icon, img.i-ticket-phone, img.loading-gif') );
            }else {
                $('body').removeClass('grayscale');
            }
        },
        addZoomClass: function(){
            $('body').addClass('zoom-' + zoomConfig.current);
            if( $.browser.msie || $.browser.msedge ) {
                $('.header .nav-bar.nav-bar-fixed').addClass('zoom-' + zoomConfig.current);
                $('.navSection.fixed').addClass('zoom-' + zoomConfig.current);
                $('.orderSummary.fixed, .compare-bar').addClass('zoom-' + zoomConfig.current);
                $('.clickToCall .link-call').addClass('zoom-' + zoomConfig.current);
            }
        },
        removeZoomClass: function(){
            $('body').removeClass('zoom-'+zoomConfig.current);
            if( $.browser.msie || $.browser.msedge ) {
                $('.header .nav-bar.nav-bar-fixed').removeClass('zoom-' + zoomConfig.current);
                $('.navSection.fixed').removeClass('zoom-' + zoomConfig.current);
                $('.orderSummary.fixed, .compare-bar').removeClass('zoom-' + zoomConfig.current);
                $('.clickToCall .link-call').removeClass('zoom-' + zoomConfig.current);
            }
        }
    };
