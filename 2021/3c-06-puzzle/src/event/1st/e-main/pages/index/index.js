// ==========================================================================
// import vendor js modules
// ==========================================================================
import WOW from 'wow.js/dist/wow.js'

// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGobalUXItems } from 'utils/js/generate'

// ==========================================================================
// import components js modules
// ==========================================================================

import { initInfoCover } from "event/1st/e-main/components/info-cover/info-cover.js"
import { initGame } from "event/1st/e-main/components/puzzle/puzzle.js"
import { initRandomCard } from "event/1st/e-main/components/random-card/random-card.js"
// ==========================================================================
// page js
// ==========================================================================
new WOW().init()
