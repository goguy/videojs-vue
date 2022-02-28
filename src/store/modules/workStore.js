const workStore = {
    namespaced: true,
    state: {
        workList:  [
            {
                work_id: 1,
                name: '탱크 Cleaning',
                time: 10*60
            },
            {
                work_id: 2,
                name: '탱크 샌딩 및 도장',
                time: 10*60
            }
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        GE_WORK_LIST: state => state.workList
    }
}
//namespaced : 각 파일별로 네임스페이스를 지정하여, 해당 파일의 상태, 변이, 액션, getter을 사용하겠다고 명시하는 문구입니다.
export default workStore