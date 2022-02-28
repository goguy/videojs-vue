const WORKER_DATA = () => {
    return {
      worker_id: 0,
      name: '홍길동',
      reg_dt: '',
      work_id: 0
    }
  } 

const workerStore = {
    namespaced: true,
    state: {
        worker: WORKER_DATA()
    },
    mutations: {
        MU_WORKER: (state, payload) => {
            state.worker = payload;
        }
    },
    actions: {
        AC_WORKER: ({ commit }, payload)=>{
            commit('MU_WORKER', payload);
        }
    },
    getters: {
        GE_WORKER: state => state.worker
    }
}
export default workerStore