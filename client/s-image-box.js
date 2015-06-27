'use strict';

sImageBox = {
    settings: { //default settings
        originalHeight: false, // image will be responsive you can enable original height
        originalWidth: false, // image will be responsive you can enable original width
        animation: '' //image entry animation (scale, fadeIn, zoomIn, slideInDown)
    },
    config: function (configObj) {
        var self = this;
        if (_.isObject(configObj)) {
            self.settings = _.extend(self.settings, configObj);
        } else {
            throw new Meteor.Error(400, 'Config must be an object!');
        }
    },
    open: function (path, settings) {
        settings = settings || {};
        settings = _.extend(this.settings, settings);
        var classes = '';
        var scrollWidth;
        if (settings.originalHeight) {
            classes = classes + 's-image-box-original-height ';
        }
        if (settings.originalWidth) {
            classes = classes + 's-image-box-original-width ';
        }
        var html = path && Blaze.toHTMLWithData(Template.sImageBox, {
            image: path,
            classes: classes,
            animation: settings.animation || ''
        });
        if (html) {
            scrollWidth = window.innerWidth - $(window).width();
            $('html').addClass('s-image-box-noscroll').css('margin-right', scrollWidth);
            $('<img/>')
                .load(function () {
                    $(settings.appendTo || 'body').append(html);
                    $('.s-image-box-close-btn, .s-image-box').on('click.s-image-box-close', sImageBox.close);
                    $('.s-image-box-image').on('click.s-image-box-close', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                    $(document).on('keyup.s-image-box-close', function (e) {
                        if (e.keyCode === 27) {
                            e.preventDefault();
                            sImageBox.close();
                        }
                    });
                })
                .error(function () {
                    console.log('Error loading image...');
                })
                .attr('src', path);
        }
    },
    close: function () {
        $('.s-image-box-close-btn, .s-image-box').off('click.s-image-box-close');
        $('.s-image-box-image').off('click.s-image-box-close');
        $(document).off('keyup.s-image-box-close');
        $('.s-image-box').fadeOut('fast', function () {
            $(this).remove();
            $('html').removeClass('s-image-box-noscroll').css('margin-right', 0);
        });
    }
};

Template.sImageBox.onDestroyed(function () {
    sImageBox.close();
});
