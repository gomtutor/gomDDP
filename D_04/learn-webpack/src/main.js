(function(global, _, $){
    'use strict';

    // lodash === _
    var document = global.document;
    var body = document.body;
    var component_message = ['hello', 'webpack', ':-)'];
        
    function component() {
        var el = document.createElement('h1');
        el.classList.add('page-heading-lv1');
        // 의존 개발 모듈 Lodash 메서드 활용
        el.textContent = _.join( component_message, ' ' );
        // return elementnode
        return el;
    }

    function component_jquery () {
        return $('<h1>', {
            on: {
                click: function(e) {
                    $(e.target).remove();
                }
            }
        })
        .addClass('page-heading-lv1')
        .text(_.join(component_message, ' '));
    }

    $(body).appendChild( component() );
    // body.appendChild( component() );

    
})(window, window._, window.jQuery);


// Back-End 개발 환경 방식을 사용하여 Front-End 에 적용
// webpack을 사용해 번들링(묶음) 수행
// ES 표준 모듈 로드
import _ from 'lodash';
import $ from 'jquery';

let $body = $('body');
let messages = ['Hello','VueJS', 'using', 'webpack', ':)'];
let $heading = $('h1').addClass('webpack-heading').text(_.join(messages,'')).appendTo('body');
