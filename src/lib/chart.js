'use strict'

const template = `
<svg viewbox="0 0 400 400">

  <circle fill="#ccc" cx="200" cy="200" r="200" />
  <circle cx="200" cy="200" r="160" transform="rotate(-90, 200, 200)"
    stroke-dasharray="0, 1000" stroke="#7cb342" stroke-width="80" data-fallback="edge">
    <animate attributeName="stroke-dasharray" dur="{{duration}}" to="{{percent}},1000" fill="freeze" />
  </circle>

  <circle cx="200" cy="200" r="160" fill="#fff" />
  <text id="progress" x="200" y="55%" text-anchor="middle" font-size="90" fill="#3c4946">1%</text>
  <text x="200" y="65%" text-anchor="middle" font-size="16" fill="#3c4946">{{label}}</text>
</svg>
`

var template$1 = Handlebars.compile(template)

const defaultOptions = {
  percent: 0,
  duration: 1000,
  frame: 30,
}

/**
 * Chart 클래스
 */
class Chart {
  #template = template$1
  #el
  #percent
  #duration
  #label
  #frame
  #handle

  /**
   *
   * @param {string} container - 마운트될 DOM 컨테이너 셀렉터
   * @param {string} data - 옵션 데이타 duration, frame
   * @example
   * new Chart('#root', {
   *   duration: 2000,
   *   frame: 20,
   * });
   */
  constructor(container, data = {}) {
    const { duration, frame, percent } = { ...defaultOptions, data }

    this.#duration = duration
    this.#frame = frame
    this.#percent = percent

    this.#el = document.querySelector(container)
  }

  /**
   * 퍼센트를 설정합니다.
   */
  set percent(per) {
    this.#percent = per
  }

  /**
   * 애니메이션 시간을 ms 단위로 설정합니다.
   */
  set duration(dur) {
    this.#duration = dur
  }

  /**
   * 에니메이션이 실행 될 때 초당 프레임을 설정합니다.
   */
  set frame(fr) {
    this.#frame = fr
  }

  set label(text) {
    this.#label = text
  }
  /**
   * 소스 데이타를 설정합니다.
   * @param {Array} source - 2차원 배열로 제공합니다.
   */
  setDataSource(source) {}
  /**
   * UI 업데이트를 수행합니다.
   */
  render() {
    this.#el.innerHTML = this.#template({
      percent: this.#percent * 10,
      duration: `${this.#duration / 1000}s`,
      label: this.#label,
    })

    const maxLoop = Math.floor(this.#duration / (1000 / this.#frame))
    let loopCount = 0

    this.#handle = setInterval(() => {
      loopCount++

      this.#el.querySelector('#progress').innerHTML =
        loopCount > maxLoop
          ? `${this.#percent}%`
          : `${Math.floor(this.#percent / maxLoop) * loopCount}%`

      if (loopCount > maxLoop) {
        clearInterval(this.#handle)
      }
    }, 1000 / this.#frame)
  }
}

export default Chart
