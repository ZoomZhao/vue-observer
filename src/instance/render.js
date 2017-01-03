import Watcher from '../observer/watcher'

import { noop } from '../util/index'

export function initRender (vm) {
  vm._watcher = new Watcher(vm, vm._render, noop)
}

export function renderMixin (VueModel) {
  VueModel.prototype._render = function () {
    const vm = this
    const render = vm.$options.render

    render.call(vm)
  }
}
