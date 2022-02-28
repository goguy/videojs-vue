<template>
  <v-layout row justify-center>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            color="green darken-1" 
            @click.native="close">Close</v-btn>
        </v-card-actions>
      </v-card>
  </v-layout>
</template>

<script>
export default {
    name: 'AboutPopup',
    props: {
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
        this.$emit('closeDialog',false)
        this.$emit('update:dialog', false)
        this.$emit('dialogInfo',{userId:'admin'})
      }

    }

}
</script>

<style>

</style>