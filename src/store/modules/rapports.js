export default {
    state: {
        rapport: []
    },
    getters: {
        rapports: state => {
            return state.rapports;
        }
    },
    mutations: {
        updateRapports(state, payload) {
            state.rapports = payload;
        }
    },
    actions: {
        updateRapports({commit}, payload) {
            commit('updateRapports', payload);
        }
    }
};