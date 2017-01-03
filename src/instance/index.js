import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'

function VueModel (options) {
  this._init(options)
}

initMixin(VueModel)
stateMixin(VueModel)
renderMixin(VueModel)

export default VueModel
