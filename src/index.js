import 'tailwindcss/tailwind.css'
import template from './index.template'
import Chart from './lib/chart'

function main() {
  const conatiner = document.querySelector('#app')
  conatiner.innerHTML = template()

  const chart = new Chart('#chart')

  chart.percent = 99
  chart.duration = 3000
  chart.label = 'Charging...'

  chart.render()
}

document.addEventListener('DOMContentLoaded', main)
