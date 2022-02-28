<template>
   <div>
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
                         @canplay="onPlayerCanplay($event)"
                         @canplaythrough="onPlayerCanplaythrough($event)"
                         @ready="playerReadied"
                         @statechanged="playerStateChanged($event)">
		  </video>
	</div>
</template>

<script>
import videojs from 'video.js'
import playlistMaker from "videojs-playlist/src/playlist-maker"

const plugin = function(list, item) {
  playlistMaker(this, list, item);
};

videojs.registerPlugin('playlist', plugin);



//import 'video.js/dist/video-js.css'

export default {
	name: 'VideoJsList',
    data() {
      return {
        // videojs options
        playerOptions: {
  	      //height: '360',
          autoplay: true,
          muted: true, 
          //controls: true,
          //language: 'en',
          fluid: true,// 화면의 따라
          //playbackRates: [0.7, 1.0, 1.5, 2.0],
          //techOrder: ['html5'],
          plugins: {
            playlist: {
              autoadvance: true
            }
          }  
        },
        playlist: [{
            sources: [{
                        src: require('@/assets/video/Animation.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            sources: [{
                        src: require('@/assets/video/Seoul.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            sources: [{
                        src: require('@/assets/video/Lake.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            sources: [{
                        src: require('@/assets/video/Record.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            sources: [{
                        src: require('@/assets/video/Sand.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            sources: [{
                        src: require('@/assets/video/Sheep.mp4'),
                        type: 'video/mp4'
                    }],
            }],
		player: null,
      }
    },
    mounted() {
				
        this.player = videojs(this.$refs.videoPlayer, this.playerOptions, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });

        // Play through the playlist automatically.    
		this.player.playlist(this.playlist);
        this.player.playlist.autoadvance(0);
        this.player.playlist.repeat(false);
        this.player.muted(false);
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        console.log('player play!', player)
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
	  /*
      onPlayerTimeupdate(player) {
        console.log('player Timeupdate!', player.currentTime())
      },
	  */
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
      }
    }	
	
};

</script>
<style>
@import '../assets/css/video-js.css';
</style>