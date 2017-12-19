{{#vuex}}
import * as types from './mutation-type'

/* ==================================================================================
 * actions 多处要修改mutation的操作管理
 * ==================================================================================
 */

export const GetList = function({ commit, state},{list, index}) {
  if(state === index) {
    commit(types.SET_LIST, list)
    commit(types.SET_INDEX, index)
  }
}
{{/vuex}}