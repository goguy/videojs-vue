const equipmentStore ={
    namespaced: true,
    state: {
        equipmentList: [
            {
            equipment_id: 1,           	
            name: '안전모',	
            type: 'protect',
            priority: '',
            weight:	'',
            accident: 4
            },
            {
            equipment_id: 2,	
            name: '안전대',	
            type: 'protect',
            priority: '',
            weight:	'',
            accident: 4
            },
            {
            equipment_id: 3,	
            name: '안전화',	
            type: 'protect',			
            priority: '',
            weight:	'',
            accident: 4
            },
            {
            equipment_id: 4,	
            name: '보안면',	
            type: 'protect',		
            priority: '',
            weight:	'',	
            accident: 2
            },
            {
            equipment_id: 5,	
            name: '보안경',	
            type: 'protect',	
            priority: '',
            weight:	'',   
            accident: 2
            },
            {
            equipment_id: 6,	
            name: '보호복',	
            type: 'protect',	
            priority: '',
            weight:	'',		
            accident: 4
            },
            {
            equipment_id: 7,
            name: '안전장갑',	
            type: 'protect',
            priority: '',
            weight:	'',	
            accident: 4
            },
            {
            equipment_id: 8,
            name: '방진마스크',	
            type: 'protect',
            priority: '',
            weight:	'',	
            accident: 1
            },
            {
            equipment_id: 9,
            name: '방독마스크',	
            type: 'protect',
            priority: '',
            weight:	'',	
            accident: 1
            },
            {
            equipment_id: 10,
            name: '귀마개',	
            type: 'protect',	
            priority: '',
            weight:	'',	
            accident: 4
            },
            {
            equipment_id: 11,	
            name: '송기마스크',	
            type: 'protect',
            priority: '',
            weight:	'',	
            accident: 1
            },
            {
            equipment_id: 12,	
            name: '산소농도측정기',	
            type: 'safety',
            priority: '',
            weight:	'',	
            accident: 1
            },
            {
            equipment_id: 13,	
            name: '소음측정기',
            type: 'safety',
            priority: '',
            weight:	'',	
            accident: 2
            },
            {
            equipment_id: 14,	
            name: '열선풍속측정기',
            type: 'safety',
            priority: '',
            weight:	'',	
            accident: 5
            },
            {
            equipment_id: 15,	
            name: '송풍기',	
            type: 'safety',	
            priority: '',
            weight:	'',	
            accident: 1
            },
            {
            equipment_id: 16,	
            name: '배풍기',
            type: 'safety',	
            priority: '',
            weight:	'',	
            accident: 1
            },
            {
            equipment_id: 17,	
            name: '방폭등',	
            type: 'safety',	
            priority: '',
            weight:	'',	
            accident: 5
            },
            {
            equipment_id: 18,	
            name: '사료재취용 펌프',
            type: 'safety',
            priority: '',
            weight:	'',	
            accident: 5
            },
            {
            equipment_id: 19,	
            name: '고압세척기',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 20,	
            name: '슬러지제거기',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 21,	
            name: '소독기',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 22,	
            name: '진공펌프',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 23,	
            name: '세정액',
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 24,	
            name: '고압분무기',
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 25,	
            name: '면걸레',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 26,	
            name: '샌딩사',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 27,	
            name: '샌드블러스터',
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 28,	
            name: '비파괴검사기',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0	
            },
            {
            equipment_id: 29,	
            name: '용접기',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 30,	
            name: '에어스프레이',
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0	
            },
            {
            equipment_id: 31,	
            name: '에어리스',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 32,	
            name: '페인트',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 33,	
            name: '온풍기',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            },
            {
            equipment_id: 34,	
            name: '도막측정기',	
            type: 'work',
            priority: '',
            weight:	'',	
            accident: 0
            }
        ]
        
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        GE_EQUIPMENT_LIST: state => state.equipmentList
    }

}
//namespaced : 각 파일별로 네임스페이스를 지정하여, 해당 파일의 상태, 변이, 액션, getter을 사용하겠다고 명시하는 문구입니다.
export default equipmentStore