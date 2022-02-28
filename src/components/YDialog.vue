<template>
  <v-container>
      <component 
        :is="param.target" 
        :popupParam="param.param" 
        @closeDialog="param.closeCallback" />
  </v-container>      
</template>

<script>
export default {
  name: 'y-dialog',
  props: {
    dialog: {
        default: false
    },
    param: {
      type: Object,
      default: () => ({
        target: null,
        title: '',
        // 동기화 여부
        dialog: false,
        // dialog 너비
        width: '100',
        // dialog 높이
        height: null,

        // dialog margin-top 크기 조정
        top: '50px',
        // 부모로부터 받을 파람
        param: {},
        // 부모로부터 받을 닫기 여부
        closeCallback: null,
      }),
    },
  },
  data() {
    return {};
  },
  //computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {
    //Object.assign을 이용하여 데이터를 복사하여사용.
    Object.assign(this.$data, this.$options.data());
    this.init();
  },
  mounted() {},
  beforeDestory() {},
  methods: {
    init() {},
  },
};

</script>

<style>

</style>