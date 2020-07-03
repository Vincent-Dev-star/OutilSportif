import Vue from 'vue';
import Vuex from 'vuex';
import rapports from '@/store/modules/rapports';
import users from '@/store/modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		rapports,
		users
	}
});
