/*
gfortInsta
Description: Instagram Feed by Graphicfort
Version: 1.0
Author: Graphicfort
Author URL: http://graphicfort.com
*/
/*global $*/
(function ($) {

    'use strict';

    $.fn.gfortInsta = function (options) {

        var settings,
            el = $(this),
            imagesLimit,
            imageItem = '',
            imagesWrapper = '<div class="instagram-feed-block-container">';

        settings = $.extend({
            limit: 6,
            userID: '',
            accessToken: ''
        }, options);

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: 'https://api.instagram.com/v1/users/' + settings.userID + '/media/recent/?access_token=' + settings.accessToken,
            success: function (response) {

                for (imagesLimit = 0; imagesLimit < settings.limit && imagesLimit < response.data.length; imagesLimit += 1) {
                    imageItem += '<a class="gfortInsta-item" href="' + response.data[imagesLimit].link + '" target="_blank"><img src="' + response.data[imagesLimit].images.thumbnail.url + '" alt="Instagram Image" /></a>';
                }

                imagesWrapper += imageItem + '</div>';
                return el.append(imagesWrapper);

            }
        });

    };

}($));