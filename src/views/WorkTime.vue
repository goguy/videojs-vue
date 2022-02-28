<template>
  <div>
    <v-card
        :loading="loading"
        class="mx-auto"
        max-width="500"
        tile
      >
      <v-list>
        <v-subheader>WORKTIMER</v-subheader>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
          >
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
              <timer :time="workingTime"></timer>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          rounded
          dark
          elevation="1"
          @click="startTimer"          
        >
          Start
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          rounded
          dark
          elevation="1"
          @click="stopTimer"          
        >
          Stop
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          rounded
          dark
          elevation="1"
          @click="resetTimer"          
        >
          Reset
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          rounded
          dark
          elevation="1"
          @click="limitTimer"          
        >
          Limit
        </v-btn>
      </v-card-actions>

    </v-card>
        
    <v-overlay
      :z-index="zIndex"
      :value="overlay"
    >
      <v-btn
        class="white--text"
        color="teal"
        @click="messageSnackbar"
      >
        Message Confirm
      </v-btn>
    </v-overlay>

    <v-snackbar
          v-model="snackbar"
          :vertical="vertical"
        >
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="indigo"
              text
              v-bind="attrs"
              @click="nextStep()"
            >
              HOME
            </v-btn>
          </template>
    </v-snackbar>    
  </div>
  
</template>

<script>

let Timer = {
	template: `
		 <span>{{ time | workTime }}</span> 
	`,
	props:['time'],
	filters: {
		 workTime : function(value) {
			  let data = value.split(':')
			  let minutes = data[0]
			  let secondes = data[1]
			  return minutes+":"+secondes
		 }
	}
}

  export default {
    name: 'WorkTime',
    components: {
      'timer':Timer
    },    
    data: () => ({
      isTimerRunning: false,
      minutes:0,
      secondes:0,
      timeWork:180,
      limitTime:1,
      timer:null,
      loading: false,
      overlay: false,
      zIndex: 0,

      snackbar: false,
      text: '작업시간 초과로 더이상 진행불가합니다',
      vertical: true,            
    }),
    computed: {
      workingTime() {        
			  let timeWork = this.timeWork / 60
			  let minutes = parseInt(timeWork)
			  let secondes = Math.round((timeWork - minutes) * 60)			  
			  if (minutes < 10) {
					minutes = '0'+minutes
			  }
			  if (secondes < 10) {
					secondes = '0'+secondes
			  }
        if(minutes === '00' && parseInt(secondes) < this.limitTime)
          secondes ='00'

			  return minutes+":"+secondes      
      }
    },
    watch: {
      workingTime (newWorkingTime) {
        console.log('newWorkingTime : ' + newWorkingTime)
        if(newWorkingTime === '00:00'){
          this.stopRatingWork()
        }
      },
    },
    mounted() {

    },  
    methods: {
      startTimer() {
        this.loading = true
        this.isTimerRunning = true

        this.timer = setInterval( () => {
          if (this.timeWork - this.limitTime >= 0) {
            this.timeWork = this.timeWork - this.limitTime
            //this.timeWork--
          } else {
            clearInterval(this.timer)
            this.resetTimer()
          }
        }, 1000 )

        setTimeout(() => (this.loading = false), 500)
      },
      stopTimer() {
        this.loading = true

        this.isTimerRunning = false
        clearInterval(this.timer)
        this.timer = null

        setTimeout(() => (this.loading = false), 500)
      },
      resetTimer() {
        this.loading = true

			  this.stopTimer()
        this.timeWork = 180
        this.limitTime = 1
			  this.secondes = 0
			  this.minutes = 0

        setTimeout(() => (this.loading = false), 500)
      },
      limitTimer() {
        this.loading = true

        this.limitTime = 10

        setTimeout(() => (this.loading = false), 500)
      },
      stopRatingWork() {
        console.log('stopRatingWork')
        this.overlay = true
      },
      messageSnackbar() {
        this.snackbar = true
      },
      nextStep() {
        this.$router.replace('/')
      }
    },
  }
</script>
