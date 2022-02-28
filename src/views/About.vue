<template>
  <v-container>
    <!--
    <v-row justify="center">
      <v-col>
        <v-btn
          color="primary"
          dark
          @click.stop="dialog=true"
        >
          Open Dialog
        </v-btn>

        <AboutPop 
          :dialog.sync="dialog"
          :param="dialogOptions"
          @dialogInfo="userInfo" 
          />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-btn
          color="primary"
          dark
          @click.stop="btnPopSave"
        >
          Open Dialog
        </v-btn>

        <y-dialog
          :dialog.sync="dialogIng" 
          :param="dialogOptions">
        </y-dialog>
    
      </v-col>
    </v-row>
    -->

    <v-row justify="center">
      <v-col>
        <v-btn
          color="primary"
          dark
          @click.stop="btnPopSave"
        >
          Open Dialog
        </v-btn>

        <v-dialog
          v-model="dialog"
          width="700"
        >
        <y-dialog-component 
          :param="dialogOptions"
          />

        </v-dialog>
    
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
  //import AboutPopR from './AboutPopR.vue'

  export default {
    components: {
      //AboutPopR
    },    
    data () {
      return {
        dialog: false,
        dialogIng: false,
        diag:false,
        dialogOptions: {
          target: null,
          title: '',
          dialog: false,
          width: '60%',
          param: {},
          closeCallback: null,
        },

      }
    },
    mounted() {
    
    },  
    methods: {
      btnPopSave(){
        console.log('btnPopSave')
        /*
        const paramObj = new Object();        
        paramObj.selectedUserId = this.selectedUserId;
        this.dialogOptions.param = Object.assign(this.user, paramObj);
        */
        this.dialog=true;
        this.dialogOptions.target = () => import(`${'@/views/AboutPopR.vue'}`);
        this.dialogOptions.param = {}
        this.dialogOptions.closeCallback = this.closeDialog;
      },

      closeDialog() {
        this.dialogOptions.target = null;
        this.dialog = false;
      },
      userInfo(obj) {
        console.log('obj : ' + JSON.stringify(obj,null,2))
      }
    
    },  
  }
</script>

<style>

</style>