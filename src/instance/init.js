import { initState } from './state'
import { initRender } from './render'

export function initMixin (ViewModel) {
  ViewModel.prototype._init = function (options) {
    const vm = this

    vm.$options = options

    initState(vm)
    initRender(vm)
  }
}
