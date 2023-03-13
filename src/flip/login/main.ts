import gsap from 'gsap'
import Flip from 'gsap/Flip'
gsap.registerPlugin(Flip)

const headerEl = document.querySelector('.header_bar')
const loginCover = document.querySelector('.login_cover')
const loginTable = document.querySelector('.login_table')
const loginBtn = document.querySelector('.login_button')
const avatarEl = document.querySelector('.avatar')

loginBtn?.addEventListener('click', triggerLogin)

function triggerLogin() {
  const state = Flip.getState(avatarEl)
  changeAvatarPosition()
  closeLoginTable()
  Flip.from(state, {
    duration: 0.5
  })
}

function changeAvatarPosition() {
  if (avatarEl) {
    avatarEl?.parentNode === loginTable ? headerEl?.appendChild(avatarEl) : loginTable?.appendChild(avatarEl)
  }
}

function closeLoginTable() {
  if (loginCover) {
    loginCover.setAttribute('style', 'display:none')
  }
}
