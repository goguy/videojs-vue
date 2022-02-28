<template>
  <v-layout row justify-center>
    <v-dialog 
        v-model="dialog" 
        persistent
        fullscreen
        hide-overlay 
        >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            color="green darken-1" 
            @click.native="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    name: 'AboutPop',
    props: {
        dialog: {
            default: false
        },
        param: Object,
    },
    data() {
      return {          
      };
    },
    mounted() {
        console.log('param : ' + JSON.stringify(this.param,null,2))
    },
    methods: {
        close() {
        this.$emit('update:dialog', false)
        this.$emit('dialogInfo',{userId:'admin'})
      }

    }

}
</script>

<style>

</style>