<template>
    <div>
        <video ref="videoPlayerList" class="video-js"
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
                    @statechanged="playerStateChanged($event)"
                    @playlistchange="playerPlaylistchange($event)">
        </video>
    </div>
</template>

<script>
import videojs from 'video.js'
import playlistMaker from "videojs-playlist/src/playlist-maker"
import 'video.js/dist/video-js.css'


const plugin = function(list, item) {
  playlistMaker(this, list, item);
};

videojs.registerPlugin('playlist', plugin);


export default {
    name: "VideoPlayerList",
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
        this.player = videojs(this.$refs.videoPlayerList, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
        // Play through the playlist automatically.    
		this.player.playlist(this.listOptions);
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
      @timeupdate="onPlayerTimeupdate($event)"     
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
      },
      playerPlaylistchange(player){
          console.log('player Playlistchange!', player)
      }      
      
    },
}

</script>
<style>
@import '../assets/css/video-js.css';
</style>