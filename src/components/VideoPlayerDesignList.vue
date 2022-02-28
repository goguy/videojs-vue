<template>
        <video ref="VideoPlayerDesignList" class="video-js"
                    :playsinline="true"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @ended="onPlayerEnded($event)"
                    @loadeddata="onPlayerLoadeddata($event)"
                    @waiting="onPlayerWaiting($event)"
                    @playing="onPlayerPlaying($event)"
                    @canplay="onPlayerCanplay($event)"
                    @canplaythrough="onPlayerCanplaythrough($event)"
                    @ready="playerReadied($event)"
                    @statechanged="playerStateChanged($event)"
                    @playlistitem="playerPlaylistitem($event)">
        </video>
</template>

<script>
import videojs from 'video.js'
import playlistMaker from "videojs-playlist/src/playlist-maker"
//import 'video.js/dist/video-js.css'


const plugin = function(list, item) {
  playlistMaker(this, list, item);
};

videojs.registerPlugin('playlist', plugin);


export default {
    name: "VideoPlayerDesignList",
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        },
        listOptions: {
            type: Array,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.VideoPlayerDesignList, this.options, function onPlayerReady() {
            //console.log('onPlayerReady', this);
        })
        this.$emit('player', this.player)
        
        // Play through the playlist automatically.    
		//this.player.playlist(this.listOptions);
        //this.player.playlist.autoadvance(0);
        //this.player.playlist.repeat(false);
        //this.player.muted(false);
        
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
            //console.log('player play!', player)
            this.$emit('playerState', player)
      },
       
      onPlayerPause(player) {
            //console.log('player pause!', player)
            this.$emit('playerState', player)
      },
      onPlayerEnded(player) {
            //console.log('player ended!', player)
            this.$emit('playerState', player)
      },
      onPlayerLoadeddata(player) {
            //console.log('player Loadeddata!', player)
            this.$emit('playerState', player)
      },
      onPlayerWaiting(player) {
            //console.log('player Waiting!', player)
            this.$emit('playerState', player)
      },
      onPlayerPlaying(player) {
            //console.log('player Playing!', player)
            this.$emit('playerState', player)
      },
      
      //@timeupdate="onPlayerTimeupdate($event)"     
      onPlayerTimeupdate(player) {
            console.log('player Timeupdate!', player.currentTime())
      },
            
      onPlayerCanplay(player) {
            //console.log('player Canplay!', player)
            this.$emit('playerState', player)
      },
      onPlayerCanplaythrough(player) {
            //console.log('player Canplaythrough!', player)
            this.$emit('playerState', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
            //console.log('player current update state', playerCurrentState)
            this.$emit('playerState', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        //player.currentTime(10)
        //console.log('example 01: the player is readied', player)
        //this.$emit('playerState', player)
      },
      playerPlaylistitem(player) {
          console.log('player Playlistitem!', player)
      }           
    },
}

</script>