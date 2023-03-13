import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// gsap.to('.box,.green', {
//   scrollTrigger: {
//     trigger: '.box,.green'
//   },
//   x: 400,
//   rotation: 360,
//   duration: 3
// })

gsap.to('.box,.green', {
  scrollTrigger: {
    trigger: '.box,.green',
    start: 'center center', //trigger的中心碰到视野的中心
    end: '+=300', //300px后停止动画
    scrub: true
    // scrub: 3
  },
  x: 400,
  rotation: 360,
  duration: 3
})
