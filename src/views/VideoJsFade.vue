<template>
   <div id="cssFade">
		  <video  class="video-js"
                         ref="videoPlayer"
                         :options="playerOptions"
                         :playsinline="true"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
                         @ended="onPlayerEnded($event)"
                         @loadeddata="onPlayerLoadeddata($event)"                         
                         @waiting="onPlayerWaiting($event)"
                         @playing="onPlayerPlaying($event)"
                         @timeupdate="onPlayerTimeupdate()"
                         @canplay="onPlayerCanplay($event)"
                         @canplaythrough="onPlayerCanplaythrough($event)"
                         @ready="playerReadied"
                         @statechanged="playerStateChanged($event)">
		  </video>
	</div>
</template>

<script>
import videojs from 'video.js'
//import 'video.js/dist/video-js.css'

export default {
	name: 'VideoJsOptions',
    data() {
      return {
        // videojs options
        playerOptions: {
  	      //height: '360',
          autoplay: true,
		  controls: true,
          muted: true,
          language: 'en',
          //playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: require('@/assets/video/oceans.mp4'),
          }],
        },
		player: null,
        playTime: 0,
      }
    },
    mounted() {
				
        this.player = videojs(this.$refs.videoPlayer, this.playerOptions, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });

		
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        console.log('player play!', player)
        this.player.muted(false);
      },
      onPlayerPause(player) {
        console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        console.log('player Playing!', player)
      },
	  
      onPlayerTimeupdate() {
        ++this.playTime;
        if(this.playTime === 31 || this.playTime === 36 || this.playTime === 41 
        || this.playTime === 46 || this.playTime === 51 || this.playTime === 56 
        || this.playTime === 61){            
            this.fn_fadeOut(this.playTime);
        }
      },
	  
      onPlayerCanplay(player) {
        console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        //player.currentTime(10)
        console.log('example 01: the player is readied', player)
      },
      fn_fadeOut(t){
            console.log('playTime1 : ' + this.playTime);
          switch(t){
           case 31:
               this.player.volume(0.8);
               document.getElementById('cssFade').className='fade-out';     
               break;    
           case 36:
               this.player.volume(0.4);
               break;    
           case 41:
               this.player.volume(0.3);
               break;    
           case 46:
               this.player.volume(0.2);
               break;    
           case 51:
               this.player.volume(0.1);
               break;    
           case 56:
               this.player.volume(0);
               break;    
           case 61:
               this.player.muted(true);
               this.player.pause();               
               this.player.dispose();
               this.nextWork();
               break;    
            }  
      },
      nextWork() {
          //this.$router.push('about');
          this.$router.replace('about');
      }
    }		
};

</script>
<style>
@import '../assets/css/video-js.css';

/* Just add .fade-in class to element */

.fade-in {
	animation: fadeIn 5s;
  	opacity: 1;
}

@keyframes fadeIn {
  from {
  	opacity: 0;
  }
  to {
 	opacity: 1;
  }
}

.fade-out {
	animation: fadeOut 5s;
  	opacity: 0;
}

@keyframes fadeOut {
  from {
  	opacity: 1;
  }
  to {
 	opacity: 0;
  }
}


</style>