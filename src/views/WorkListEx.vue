<template>
  <div class="about">
    <h1>This is an WorkListEx page</h1>
    <div
      v-for="(item, idx) in dataLIst"
      :key="idx"
    >
      장비아이디: {{ item.equipment_id }} 
      장비명: {{ item.name }}
      장비타입: {{ item.type }}
      장비관련사고: {{ item.accident }}
    </div>
    <!--
    <div
      v-for="(item, idx) in workList"
      :key="idx"
    >
      작업아이디: {{ item.work_id }} 
      작업명: {{ item.name }}
      작업시간: {{ item.time }}
    </div>
    -->
    <v-btn elevation="2" @click="workerChange">worker change</v-btn>
  </div>
</template>
<script>
// vuex 라이브러리에서 mapGetters 함수를 가져옵니다.
import { mapGetters, mapActions } from 'vuex'
import Enumerable  from 'linq'

/*
  namespaced: true를 사용했기 때문에 선언해줍니다.
  index.js 에서 modules 객체의 '키' 이름입니다.

  modules: {
    키: 값
    equipmentStore: equipmentStore,
    workStore: workStore
  }  
*/

const equipmentStore = 'equipmentStore'
const workStore = 'workStore'
const workEquipmentStore = 'workEquipmentStore'
const workerStore = 'workerStore'

export default {
  name: 'WorkLIstEx',
  data() {
    return {
      dataLIst:[],
      //
    }
  },
  computed: {
    /*
      mapGetter는 store의 getters를 가져옵니다.

      네임스페이스를 사용하기 때문에 키 이름을 적어줍니다. (equipmentStore, workStore)

      2가지 방식으로 가져올 수 있습니다.
      1) 이름 지정해서 가져오기
      2) getters 이름 그대로 사용해서 가져오기
    */
    // 1) 이름 지정해서 가져오기
    ...mapGetters(equipmentStore, [
       'GE_EQUIPMENT_LIST'
    ]),

    // 2) getters 이름 그대로 사용해서 가져오기
    ...mapGetters(workStore, [
      'GE_WORK_LIST'
    ]),    

    ...mapGetters(workEquipmentStore, [
      'GE_WORK_EQUIPMENT_LIST'
    ]),    

    ...mapGetters(workerStore, [
      'GE_WORKER'
    ]),    

    // 스토어의 리스트 중에서 검색한 유저이름의 포스트 목록만 반환합니다.
    equipmentList() {
      let list = []

      for(let item of this.GE_EQUIPMENT_LIST) {
        //if(item.author == this.storeUserName) {
          list.push(item)
        //}
      }

      return list
    },
    workList() {
      let list = []

      for(let item of this.GE_WORK_LIST) {
        //if(item.author == this.storeUserName) {
          list.push(item)
        //}
      }

      return list
    }
  },
  watch: {
    /*
    // getters에 watch를 걸 수 있습니다.
    storeUserName(val) {
      this.userName = val
    }
    */
  },  
  created() {
    //this.userName = this.storeUserName
  },
  mounted() {
      //let result = Enumerable.range(1, 10).where(i => i % 3 == 0).select(i => i * 10);
      //console.log(result.toArray()); // [ 30, 60, 90 ]

      //let testQuery1 = this.GE_EQUIPMENT_LIST;
      //console.log('testQuery1 : ' + JSON.stringify(testQuery1,null,2));  

      let query1 = Enumerable.from(this.GE_EQUIPMENT_LIST).where(w=>w.type === 'protect').toArray();
      console.log('query1.length : ' + query1.length);
      
      let query2 = Enumerable.from(this.GE_EQUIPMENT_LIST)
                .join(this.GE_WORK_EQUIPMENT_LIST,
                    pk => pk.equipment_id,
                    fk => fk.equipment_id).toArray();
      console.log('query2.length : ' + query2.length);

      let query3 = Enumerable.from(this.GE_WORK_LIST)
                .join(Enumerable.from(this.GE_EQUIPMENT_LIST)
                    .join(this.GE_WORK_EQUIPMENT_LIST,
                        pk=>pk.equipment_id,
                        fk=>fk.equipment_id,
                        (left, right) =>({...left, ...right})),
                pk=>pk.work_id,
                fk=>fk.work_id,
                (left, right)=>({...left, ...right})).orderBy(o=>o.work_id).thenBy(o => o.equipment_id).toArray();
      
      
      //this.dataLIst = query1;   
      //console.log('query3 : ' + JSON.stringify(query3, null, 2));
      console.log('query3.length : ' + query3.length);  

      let query5 = Enumerable.from(this.GE_WORK_LIST)
                .groupJoin(Enumerable.from(this.GE_EQUIPMENT_LIST)
                    .join(this.GE_WORK_EQUIPMENT_LIST,
                        pk=>pk.equipment_id,
                        fk=>fk.equipment_id,
                        (left, right) =>({...left, ...right})),
                pk=>pk.work_id,
                fk=>fk.work_id,
                (work, items)=>({...work, items:items.toArray()})).where(w => w.work_id === 1).orderBy(o=>o.work_id).thenBy(o => o.equipment_id).toArray();
      console.log('query5 : ' + JSON.stringify(query5, null, 2));
      console.log('query5.length : ' + query5.length);  
      //console.log('query5.items : ' + query5);  

      query5.forEach(element => {
        console.log( 'element:' + JSON.stringify(element) );
        this.dataLIst = element.items;
      });

      console.log('this.GE_WORKER1 : ' + JSON.stringify(this.GE_WORKER));  
      //this.dataLIst = query5;   


},
  methods: {
    /*
      mapGetter는 store의 getters를 가져옵니다.

      네임스페이스를 사용하기 때문에 키 이름을 적어줍니다. (userStore, postStore)

      2가지 방식으로 가져올 수 있습니다.
      1) 이름 지정해서 가져오기
      2) getters 이름 그대로 사용해서 가져오기      

      개인의 취향이지만, getters 이름 그대로 사용하는 것을 추천드립니다.

      다른 메소드 이름으로 매핑 예를 들면, setUserName: AC_USER_NAME 하면,
      setUserName 함수가 나중에는 스토어 함수인지, 현재 파일의 함수인지 헷갈리는 경우가 있습니다.

    ...mapActions(userStore, [
      'AC_USER_NAME'
    ]),
    // 버튼을 클릭하면 수행됩니다.    
    searchName() {
      const payload = {
        userName: this.userName
      }
      // store의 userName을 변경합니다.
      this.AC_USER_NAME(payload)
    }
    */
    ...mapActions(workerStore, [
      'AC_WORKER'
    ]),

    workerChange() {
        this.GE_WORKER.name='최강인';
        this.AC_WORKER(this.GE_WORKER);
    
        console.log('this.GE_WORKER2 : ' + JSON.stringify(this.GE_WORKER));  
    }
    

  }
}

</script>
