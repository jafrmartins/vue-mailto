import { createApp } from 'vue'
import App from './App.vue'

let destination = document.querySelector('.vue-mailto destination').getAttribute('value')
let campaign = document.querySelector('.vue-mailto campaign').getAttribute('value')

let subjects = JSON.parse(document.querySelector('.vue-mailto subjects').getAttribute('value'))

console.log(subjects)

createApp(App, {
  campaign,
  destination,
  subjects,
}).mount(document.querySelector('.vue-mailto'))
