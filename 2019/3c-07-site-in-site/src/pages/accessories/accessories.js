import 'pages/accessories/accessories.sass'
// ==========================================================================
// import js modules
// ==========================================================================
import { globalPolyfill } from 'utils/js/polyfill'
import { generateGobalUXItems } from 'utils/js/generate'
import { initNavBottom } from 'layout/nav-bottom/nav'
import { connectSubNavCommonBuild } from 'layout/nav-sub-page/nav-sub-page'
import { sliderLoad } from 'components/hero-slider/hero-slider'
import { bnSliderLoad } from 'components/bn-slider/bn-slider'
// ==========================================================================
// page js
// ==========================================================================
generateGobalUXItems();
connectSubNavCommonBuild();

