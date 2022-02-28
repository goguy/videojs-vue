<template>
    <div ref="document">

  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/about">About</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/videoJs">VideoJs</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/videoJsOptions">VideoJsOptions</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/videoJsList">VideoJsList</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/videoJsDesignList">VideoJsDesignList</router-link>
            </v-list-item-title>
          </v-list-item>
       
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/videoJsListBasic">VideoJsListBasic</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/videoJsListBasicDesign">VideoJsListBasicDesign</router-link>
            </v-list-item-title>
          </v-list-item>
       
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/videoJsFade">VideoJsFade</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/workListEx">WorkListEx</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/workTime">WorkTime</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/webApp">WebApp</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view ref="componentRef"/>
      <button @click="exportToPDF">Export to PDF</button>
    </v-main>
  </v-app>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'

export default {
  name: 'App',

  data: () => ({
    //
      drawer: false,
      group: null,    
  }),
  methods: {
    exportToPDF () {
      let element = this.$refs.document
      let opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      console.log('aa')
      html2pdf().set(opt).from(element).save()
      
      /*
      html2pdf(this.$refs.document, {
        margin: 1,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
      })
      */
      console.log('bb')
    }
  },

};
</script>
