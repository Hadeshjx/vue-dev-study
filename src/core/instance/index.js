import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/* new Vue() 时执行的构造函数*/
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)/* 判断是否通过New关键字创建 */
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

/**
 * 每个Mixin都是往Vue.prototype上挂载一些实例方法，
 * 这如果用ES6的class方式实现不利于代码拆分和模块化管理，
 * 所以采用了ES5的方式实现Vue构造函数
 * */
initMixin(Vue)/* 挂载 _init */
stateMixin(Vue)/* 挂载 $set $delete $watch */
eventsMixin(Vue)/* 挂载 $on $once $off $emit*/
lifecycleMixin(Vue)/* 挂载 _update $forceUpdate $destroy */
renderMixin(Vue)/* $nextTick _render 以及多个内部调用的方法 */

export default Vue
