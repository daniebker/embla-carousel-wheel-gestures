import '../css/base.css'
import '../css/reset.css'
import '../css/embla.css'
import '../css/radio.css'

import EmblaCarousel from 'embla-carousel'
import { setupWheelGestures } from 'embla-carousel-wheel-gestures'

import { generateDotBtns, selectDotBtn, setupDotBtns } from './dotButtons'
import { disablePrevNextBtns, setupPrevNextBtns } from './prevAndNextButtons'
import { setupRadioButtons } from './radioButtons'

const wrap = document.querySelector('.embla')!
const viewPort = wrap.querySelector('.embla__viewport')!
const prevBtn = wrap.querySelector('.embla__button--prev')
const nextBtn = wrap.querySelector('.embla__button--next')
const dots = wrap.querySelector('.embla__dots')
const radioButtons = document.querySelectorAll('.radio__input')
const radioButtonsArray = [].slice.call(radioButtons)
const embla = EmblaCarousel(viewPort as HTMLElement, {
  loop: false,
})

const dotsArray = generateDotBtns(dots, embla)
const setSelectedDotBtn = selectDotBtn(dotsArray, embla)
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla)

setupPrevNextBtns(prevBtn, nextBtn, embla)
setupDotBtns(dotsArray, embla)
setupRadioButtons(radioButtonsArray, embla, disablePrevAndNextBtns)

// add support for wheel gestures
setupWheelGestures(embla)

embla.on('select', setSelectedDotBtn)
embla.on('select', disablePrevAndNextBtns)
embla.on('init', setSelectedDotBtn)
embla.on('init', disablePrevAndNextBtns)
