import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import workStore from './modules/workStore'
import equipmentStore from './modules/equipmentStore'
import workEquipmentStore from './modules/workEquipmentStore'

import workerStore from './modules/workerStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    workStore,
    equipmentStore,
    workEquipmentStore,
    workerStore
  },
  plugins: [
    createPersistedState()
  ]  
})
export default store