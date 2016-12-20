import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'

function ViewModel (options) {
  this._init(options)
}

initMixin(ViewModel)
stateMixin(ViewModel)
renderMixin(ViewModel)

export default ViewModel
