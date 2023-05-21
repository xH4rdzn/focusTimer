import {elements} from './elements.js'

const {btnPause, btnPlay, btnSet, btnSoundOff, btnSoundOn, btnStop} = elements


export default function Events ({controls, timer, sound}) {

btnPlay.addEventListener('click', () => {
  controls.play()
  timer.countdown()
  sound.pressBtn()
})

btnPause.addEventListener('click', () => {
  controls.pause()
  timer.hold()
  sound.pressBtn()
})

btnStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
  sound.pressBtn()
})

btnSoundOn.addEventListener('click', () => {
  btnSoundOff.classList.remove('hide')
  btnSoundOn.classList.add('hide')
  sound.bgAudio.pause()
})

btnSoundOff.addEventListener('click', () => {
  btnSoundOff.classList.add('hide')
  btnSoundOn.classList.remove('hide')
  sound.bgAudio.play()
})

btnSet.addEventListener('click', () => {
 let newMinutes = controls.getMinutes()

 if (!newMinutes) {
  timer.reset()
  return
 }

 timer.updateDisplay(newMinutes, 0)
 timer.updateMinutes(newMinutes)
})
}
