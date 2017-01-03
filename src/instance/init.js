import { initState } from './state'
import { initRender } from './render'

export function initMixin (VueModel) {
  VueModel.prototype._init = function (options) {
    const vm = this

    vm.$options = options

    initState(vm)
    initRender(vm)
  }
}
