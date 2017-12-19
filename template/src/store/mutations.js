{{#vuex}}
import * as types from './mutation-type'

const matutaions = {
	[types.SET_LIST](state, list) {
		state.list = list
	},
	[types.SET_INDEX](state, index) {
		state.index = index
	},
}

export default matutaions
{{/vuex}}