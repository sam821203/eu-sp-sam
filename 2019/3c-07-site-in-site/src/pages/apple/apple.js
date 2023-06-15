// ==========================================================================
// import css style
// ==========================================================================
import 'pages/apple/apple.sass'
// ==========================================================================
// import js modules
// ==========================================================================
import { globalPolyfill } from 'utils/js/polyfill'
import { generateGobalUXItems } from 'utils/js/generate'
import { initNavBottom } from 'layout/nav-bottom/nav'
import { navClickActive } from 'layout/nav-apple/nav-apple'
import { heroSliderMain } from 'components/hero-slider-main/hero-slider-main'
import { bnSliderLoad } from 'components/bn-slider/bn-slider'
// ==========================================================================
// page js
// ==========================================================================
generateGobalUXItems();
navClickActive();
