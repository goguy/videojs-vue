<template>
    <div>
        <video ref="videoPlayer" class="video-js"
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

export default {
    name: "VideoPlayer",
    props: {
        options: {
            type: Object,
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
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
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
      
    },


}
</script>