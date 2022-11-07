import 'tailwindcss/tailwind.css'
import SignUp from './sign-up'
import { AnyObject } from './types/sign-up'

declare global {
  interface Window {
    Handlebars: {
      compile: (template: string) => (data: AnyObject) => string
    }
    daum: any
  }
}

const signUp = new SignUp('#app', {
  title: '회원가입',
})

signUp.render()
