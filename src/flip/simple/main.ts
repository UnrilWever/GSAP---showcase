import gsap from 'gsap'
import Flip from 'gsap/Flip'

gsap.registerPlugin(Flip)

const container = document.querySelector('.container')
const section2 = document.querySelector('.section_2')
const videoEl = document.querySelector('.video_1')

function triggerFlip() {
  const state = Flip.getState(videoEl)

  changePosition()

  Flip.from(state, {
    targets: videoEl, // <-- BINGO!
    duration: 0.5
  })
}

function changePosition() {
  if (videoEl) {
    videoEl.parentNode === section2 ? container?.insertBefore(videoEl, container.firstChild) : section2?.appendChild(videoEl)
  }
}

videoEl?.addEventListener('click', triggerFlip)
