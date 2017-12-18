import Snow from './lib/snow';
import Scroll from './lib/scroll';
import $ from 'jquery';

const snow = new Snow();
const scroll = new Scroll();

//snow,smoothScroll
$(function () {
    snow.initLetItSnow();
    scroll.smoothScroll();
});
