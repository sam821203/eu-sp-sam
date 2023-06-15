// ==========================================================================
// import css style
// ==========================================================================
import 'pages/index/index.sass'
// import "assets/theme.css" // TODO: test theme.css 之後手動在dist後的html添加link
// ==========================================================================
// import js modules
// ==========================================================================
import { globalPolyfill } from 'utils/js/polyfill'
import { generateGobalUXItems } from 'utils/js/generate'
import { initNavBottom } from 'layout/nav-bottom/nav'
import { sliderLoad } from 'components/hero-slider-main/hero-slider-main'
import { marqueeInit } from 'components/marquee/marquee'
import { bnSliderLoad } from 'components/bn-slider/bn-slider'
// ==========================================================================
// page js
// ==========================================================================
generateGobalUXItems();
marqueeInit();