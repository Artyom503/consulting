/*
Template: Debate - Business Consulting HTML Template
Author: peacefulqode.com
Version: 1.0
Design and Developed by: PeacefulQode

*/

/*================================================
[  Table of contents  ]
==================================================

==> Page Loader
==> Search Button
==> Accordion
==> Sidebar Toggle
==> Sticky Header
==> Portfolio
==> Service List
==> Slick Slider
==> Owl Carousel
==> Progressbar
==> Circular Progressbar
==> Timeline
==> High Charts
==> Back To Top
==> Isotope
==> Counter
==> WOW
==> Magnific Popup


==================================================
[ End table content ]
================================================*/


(function (jQuery) {
    "use strict";
    jQuery(window).on('load', function (e) {


        /*==================================================
        [ Page Loader ]
        ==================================================*/
        jQuery("#pq-loading").fadeOut();
        jQuery("#pq-loading").delay(0).fadeOut("slow");

        var Scrollbar = window.Scrollbar;


        /*==================================================
        [ Search Button ]
        ==================================================*/
        jQuery('#pq-seacrh-btn').on('click', function () {
            jQuery('.pq-search-form').slideToggle();
            jQuery('.pq-search-form').toggleClass('pq-form-show');
            if (jQuery('.pq-search-form').hasClass("pq-form-show")) {
                jQuery(this).html('<i class="ti-close"></i>');
            } else {
                jQuery(this).html('<i class="ti-search"></i>');
            }
        });


        /*==================================================
        [ Accordion ]
        ==================================================*/
        jQuery('.pq-accordion-block .pq-accordion-box .pq-accordion-details').hide();
        jQuery('.pq-accordion-block .pq-accordion-box:first').addClass('pq-active').children().slideDown('slow');
        jQuery('.pq-accordion-block .pq-accordion-box').on("click", function () {
            if (jQuery(this).children('div.pq-accordion-details').is(':hidden')) {
                jQuery('.pq-accordion-block .pq-accordion-box').removeClass('pq-active').children('div.pq-accordion-details').slideUp('slow');
                jQuery(this).toggleClass('pq-active').children('div.pq-accordion-details').slideDown('slow');
            }
        });


        /*==================================================
        [ Sidebar Toggle ]
        ==================================================*/
        jQuery("#pq-toggle-btn").on('click', function () {
            jQuery('#pq-sidebar-menu-contain').toggleClass("active");
        });

        jQuery('.pq-toggle-btn').click(function () {
            jQuery('body').addClass('pq-siderbar-open');

        });

        jQuery('.pq-close').click(function () {
            jQuery('body').removeClass('pq-siderbar-open');
        });


        /*==================================================
        [ Sticky Header ]
        ==================================================*/
        var view_width = jQuery(window).width();
        if (!jQuery('header').hasClass('pq-header-default') && view_width >= 1023) {
            var height = jQuery('header').height();
            jQuery('.pq-breadcrumb').css('padding-top', height * 2.1);
        }
        if (jQuery('header').hasClass('pq-header-default')) {
            jQuery(window).scroll(function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }
        if (jQuery('header').hasClass('pq-has-sticky')) {
            jQuery(window).scroll(function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }

        /*==================================================
        [ Portfolio ]
        ==================================================*/

        jQuery('.protfolio-tabs-item a').on({
            mouseenter: function () {
                jQuery('.protfolio-tabs-item a.active').removeClass('active');
                jQuery(this).addClass('active');
            },
            mouseleave: function (e) {
                var $clid = jQuery('.protfolio-tabs-item a').eq('2')[0];
                jQuery($clid).addClass('active');
                if (e.currentTarget == $clid) {
                    jQuery($clid).addClass('active');
                } else {
                    jQuery(this).removeClass('active');
                }
            }
        });

        /*==================================================
        [ Service List ]
        ==================================================*/

        jQuery('.pq-service-box-4-list .item:first-child .pq-service-box').addClass("active");
        jQuery('.pq-service-box-4-list .item').on({
            mouseenter: function () {
                jQuery('.pq-service-box-4-list .pq-service-box').removeClass('active');
                jQuery(this).find(".pq-service-box").addClass('active');
            },
        });

        /*==================================================
        [ Slick Slider ]
        ==================================================*/

        if (jQuery('.slick-slider-main').length) {
            var $slider = jQuery('.slick-slider-main').slick({
                slidesToShow: 1,
                infinite: false,
                arrows: true,
                autoplay: false,
                dots: false,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                loop: true,
                asNavFor: '.slick-slider-thumb'
            });
            var $slider2 = jQuery('.slick-slider-thumb').slick({
                slidesToShow: 1,
                infinite: false,
                lazyLoad: 'ondemand',
                asNavFor: '.slick-slider-main',
                autoplay: false,
                dots: false,
                Default: '50px',
                arrows: false,
                centerMode: false,
                loop: true,
                focusOnSelect: true
            });
        }

        /*==================================================
        [ Owl Carousel ]
        ==================================================*/
        jQuery('.owl-carousel').each(function () {
            var app_slider = jQuery(this);
            app_slider.owlCarousel({
                items: app_slider.data("desk_num"),
                loop: app_slider.data("loop"),
                margin: app_slider.data("margin"),
                nav: app_slider.data("nav"),
                dots: app_slider.data("dots"),
                autoplay: app_slider.data("autoplay"),
                autoplayTimeout: app_slider.data("autoplay-timeout"),
                navText: ["<i class='ion-ios-arrow-back'></i><span></span>", "<span></span><i class='ion-ios-arrow-forward'></i>"],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: app_slider.data("mob_sm"),
                        nav: false
                    },
                    // breakpoint from 480 up
                    480: {
                        items: app_slider.data("mob_num"),
                        nav: false
                    },
                    // breakpoint from 786 up
                    767: {
                        items: app_slider.data("tab_num")
                    },
                    // breakpoint from 1023 up
                    1024: {
                        items: app_slider.data("lap_num")
                    },
                    1199: {
                        items: app_slider.data("desk_num")
                    }
                }
            });
        });

        /*==================================================
        [ Progressbar ]
        ==================================================*/

        jQuery(".pq-progressbar-content .show-progress").each(function () {
            jQuery(this).animate({
                width: jQuery(this).attr("data-width") + "%",
            },
                2000
            );
        });

        /*==================================================
        [ Circular Progressbar ]
        ==================================================*/

        jQuery('.pq-circle-progress-bar').each(function () {
            var number = jQuery(this).data('skill-level');
            var empty_color = jQuery(this).data('empty-color');
            var fill_color = jQuery(this).data('fill-color');
            var size = jQuery(this).data('size');
            var thickness = jQuery(this).data('thickness');
            jQuery(this).circleProgress({
                value: '0.' + number,
                size: size,
                emptyFill: empty_color,
                fill: {
                    color: fill_color
                }
            }).on('circle-animation-progress', function (event, progress) {
                jQuery(this).find('.pq-progress-count').html(Math.round(number * progress) + '%');
            });
        });

        /*==================================================
        [ High Chart ]
        ==================================================*/
        jQuery('.pqf-highcharts-pie').each(function () {
            var main_id = jQuery(this).attr('id');
            // console.log(main_id);
            var main_data = jQuery('.pqf-highcharts-pie').data();
            var title = jQuery('.pqf-highcharts-pie').data('title');
            var repeater = jQuery('.pqf-highcharts-pie').data('repeater');
            var results = [];
            var colors = [];
            var app_data = jQuery(this).data('repeater');
            app_data.forEach((val, index) => {
                results.push([val.name, parseInt(val.y), val.area_color]);
                colors.push(val.area_color);
            });
            var main_id = new Highcharts.chart({
                chart: {
                    renderTo: main_id,
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                credits: {
                    enabled: false,
                },
                title: {
                    useHTML: true,
                    text: title,
                    align: 'center',
                    y: 340,
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        colors: colors,
                    }
                },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: results,
                }]
            });
        });

        jQuery('.pqf-highcharts').each(function () {
            var main_id = jQuery(this).attr('id');
            var title = jQuery(this).data('title');
            var repeater = jQuery(this).data('repeater');
            var chart_type = jQuery(this).data('chart_type');
            var plot_style = jQuery(this).data('column_json');
            var results = [];
            var colorss = [];
            var item = [];
            var xAxis_value = [];
            var app_data = jQuery(this).data('series');
            // console.log(app_data);
            app_data.forEach((val, index) => {
                console.log(val.colour);
                results.push({
                    name: val.name,
                    data: val.data,
                    index: val.index,
                    zIndex: val.zIndex,
                    categories: val.categories,
                    type: chart_type,
                    colors: val.colour,
                });
                colorss.push(val.colour);
            });
            if (plot_style == 'stacking') {
                item = {
                    series: {
                        stacking: 'normal'
                    }
                };
            }
            if (plot_style == 'column') {
                item = {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                }
            }
            var main_id = new Highcharts.Chart({
                colors: colorss,
                chart: {
                    renderTo: 'containers' + main_id
                },
                credits: {
                    enabled: false,
                },
                title: {
                    useHTML: true,
                    text: title,
                    align: 'center',
                    // y: 340,
                },
                xAxis: {
                    categories: results.slice(-1)[0].categories
                },
                plotOptions: item,
                series: results
            });
        });
    });

    /*==================================================
    [ Back To Top ]
    ==================================================*/
    jQuery('#back-to-top').fadeOut();
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 250) {
            jQuery('#back-to-top').fadeIn(1400);
        } else {
            jQuery('#back-to-top').fadeOut(400);
        }
    });
    jQuery('#top').on('click', function () {
        jQuery('top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /*==================================================
    [ Isotope ]
    ==================================================*/

    jQuery('.pq-masonry').isotope({
        itemSelector: '.pq-masonry-item',
        // layoutMode: 'masonry',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: '.grid-sizer',
            isFitWidth: true,
            percentPosition: true,
        }
    });
    jQuery('.pq-grid').isotope({
        itemSelector: '.pq-grid-item',
    });
    jQuery('.pq-filter-button-group').on('click', '.pq-filter-btn', function () {
        var filterValue = jQuery(this).attr('data-filter');
        console.log(filterValue);
        jQuery('.pq-masonry').isotope({
            filter: filterValue
        });
        jQuery('.pq-grid').isotope({
            filter: filterValue
        });
        jQuery('.pq-filter-button-group .pq-filter-btn').removeClass('active');
        jQuery(this).addClass('active');
        updateFilterCounts();
    });
    if (jQuery('.pq-masonry').length > 0) {
        var initial_items = jQuery('.pq-masonry').data('initial_items');
        var next_items = jQuery('.pq-masonry').data('next_items');
    }
    if (jQuery('.pq-grid').length > 0) {
        var initial_items = jQuery('.pq-grid').data('initial_items');
        var next_items = jQuery('.pq-grid').data('next_items');
    }

    function showNextItems(pagination) {
        var itemsMax = jQuery('.visible_item').length;
        var itemsCount = 0;
        jQuery('.visible_item').each(function () {
            if (itemsCount < pagination) {
                jQuery(this).removeClass('visible_item');
                itemsCount++;
            }
        });
        if (itemsCount >= itemsMax) {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }
    // function that hides items when page is loaded
    function hideItems(pagination) {
        var itemsMax = jQuery('.pq-filter-items').length;
        // console.log(itemsMax);
        var itemsCount = 0;
        jQuery('.pq-filter-items').each(function () {
            if (itemsCount >= pagination) {
                jQuery(this).addClass('visible_item');
            }
            itemsCount++;
        });
        if (itemsCount < itemsMax || initial_items >= itemsMax) {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }
    jQuery('#showMore').on('click', function (e) {
        e.preventDefault();
        showNextItems(next_items);
    });
    hideItems(initial_items);

    function updateFilterCounts() {
        // get filtered item elements
        if (jQuery('.pq-masonry').length > 0) {
            var itemElems = jQuery('.pq-masonry').isotope('getFilteredItemElements');
        }
        if (jQuery('.pq-grid').length > 0) {
            var itemElems = jQuery('.pq-grid').isotope('getFilteredItemElements');
        }
        var count_items = jQuery(itemElems).length;
        // console.log(count_items);
        if (count_items > initial_items) {
            jQuery('#showMore').show();
        } else {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-filter-items').hasClass('visible_item')) {
            jQuery('.pq-filter-items').removeClass('visible_item');
        }
        var index = 0;
        jQuery(itemElems).each(function () {
            if (index >= initial_items) {
                jQuery(this).addClass('visible_item');
            }
            index++;
        });
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }

    /*==================================================
    [ counter ]
    ==================================================*/
    jQuery('.timer').countTo();

    /*==================================================
    [ Timeline ]
    ==================================================*/

    jQuery('.cntl').each(function () {
        jQuery(this).cntl({
            revealbefore: 300,
            anim_class: 'cntl-animate',
            onreveal: function (e) {
                console.log(e);
            }
        });
    });

    /*==================================================
    [ wow ]
    ==================================================*/

    new WOW().init();


    /*==================================================
    [ Magnific Popup ]
    ==================================================*/
    jQuery(document).ready(function () {
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

})(jQuery);