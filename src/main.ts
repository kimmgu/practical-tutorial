import 'tailwindcss/tailwind.css'
import SignUp from './pages/sign-up'
import { AnyObject } from './types'
// @ts-ignore
import Store from './store'
// @ts-ignore
import SignIn from './pages/sign-in'
// @ts-ignore
import Profile from './pages/profile'
// @ts-ignore
import PageNotFound from './pages/page-not-found'

declare global {
  interface Window {
    Handlebars: {
      compile: (template: string) => (data: AnyObject) => string
    }
    daum: any
  }
}

const store = new Store()

function router() {
  const path = window.location.pathname

  switch (path) {
    case '/':
      break
    case '/signin':
      const signIn = new SignIn('#app', {
        store,
        title: '로그인',
      })
      signIn.render()
      break
    case '/signup':
      const signUp = new SignUp('#app', {
        store,
        title: '회원가입',
      })
      signUp.render()
      break
    case '/profile':
      const profile = new Profile('#app', {
        store,
      })
      profile.render()
      break
    default:
      const pageNotFound = new PageNotFound('#app')
      pageNotFound.render()
      break
  }
}

window.addEventListener('pathchange', router)

document.addEventListener('DOMContentLoaded', router)
