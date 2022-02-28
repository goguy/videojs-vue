const workEquipmentStore = {
    namespaced: true,
    state: {
        workEquipmentList:  [
                {    
                    work_id: 1,		
                    equipment_id: 1
                },
                {    
                    work_id: 1,		
                    equipment_id: 2
                },
                {    
                    work_id: 1,		
                    equipment_id: 3
                },
                {    
                    work_id: 1,		
                    equipment_id: 4
                },
                {    
                    work_id: 1,		
                    equipment_id: 5
                },
                {    
                    work_id: 1,		
                    equipment_id: 6
                },
                {    
                    work_id: 1,		
                    equipment_id: 7
                },
                {    
                    work_id: 1,		
                    equipment_id: 8
                },
                {    
                    work_id: 1,		
                    equipment_id: 9
                },
                {    
                    work_id: 1,		
                    equipment_id: 10
                },
                {    
                    work_id: 1,		
                    equipment_id: 11
                },
                {    
                    work_id: 1,		
                    equipment_id: 12
                },
                {    
                    work_id: 1,		
                    equipment_id: 15
                },
                {            
                    work_id: 1,		
                    equipment_id: 16
                },
                {    
                    work_id: 1,		
                    equipment_id: 17
                },
                {    
                    work_id: 1,		
                    equipment_id: 19
                },
                {    
                    work_id: 1,		
                    equipment_id: 20
                },
                {    
                    work_id: 1,		
                    equipment_id: 21
                },
                {    
                    work_id: 1,		
                    equipment_id: 22
                },
                {    
                    work_id: 1,		
                    equipment_id: 23
                },
                {    
                    work_id: 1,		
                    equipment_id: 24
                },
                {    
                    work_id: 1,		
                    equipment_id: 25
                },
                {    
                    work_id: 2,		
                    equipment_id: 1
                },
                {    
                    work_id: 2,		
                    equipment_id: 2
                },
                {    
                    work_id: 2,		
                    equipment_id: 3
                },
                {    
                    work_id: 2,		
                    equipment_id: 4
                },
                {    
                    work_id: 2,		
                    equipment_id: 5
                },
                {    
                    work_id: 2,		
                    equipment_id: 6
                },
                {    
                    work_id: 2,		
                    equipment_id: 7
                },
                {    
                    work_id: 2,		
                    equipment_id: 8
                },
                {    
                    work_id: 2,		
                    equipment_id: 9
                },
                {    
                    work_id: 2,		
                    equipment_id: 10
                },
                {    
                    work_id: 2,		
                    equipment_id: 11
                },
                {    
                    work_id: 2,		
                    equipment_id: 12
                },
                {    
                    work_id: 2,		
                    equipment_id: 15
                },
                {    
                    work_id: 2,		
                    equipment_id: 16
                },
                {    
                    work_id: 2,		
                    equipment_id: 17
                },
                {    
                    work_id: 2,		
                    equipment_id: 26
                },
                {    
                    work_id: 2,		
                    equipment_id: 27
                },
                {    
                    work_id: 2,		
                    equipment_id: 28
                },
                {    
                    work_id: 2,		
                    equipment_id: 29
                },
                {    
                    work_id: 2,		
                    equipment_id: 30
                },
                {    
                    work_id: 2,		
                    equipment_id: 31
                },
                {    
                    work_id: 2,		
                    equipment_id: 32
                },
                {    
                    work_id: 2,		
                    equipment_id: 33
                },
                {    
                    work_id: 2,		
                    equipment_id: 34
                    
                }
            ]    
            
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        GE_WORK_EQUIPMENT_LIST: state => state.workEquipmentList
    }
}
//namespaced : 각 파일별로 네임스페이스를 지정하여, 해당 파일의 상태, 변이, 액션, getter을 사용하겠다고 명시하는 문구입니다.
export default workEquipmentStore