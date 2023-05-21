// Imports
import  Controls  from "./controls.js"
import  Timer  from "./timer.js"
import { elements } from "./elements.js"
import Sound from './sounds.js'
import Events from "./events.js"

const {
  btnPause,
  btnPlay,
  btnSet,
  btnStop,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})


