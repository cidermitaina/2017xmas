const $ = require('jquery');

export default class Scroll {
    constructor () {
        this.speed = 1000;
    }
    smoothScroll(){
        $('a[href^="#"] ').on('click',function() {
            const speed = this.speed;
            const href= $(this).attr("href");
            const target = $(href == "#" || href === "" ? 'html' : href);
            const position = target.offset().top;

            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    }
}
