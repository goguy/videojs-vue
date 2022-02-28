<template>
  <div>
   <div 
   class="vjs-wrap-div"
      @mouseenter="onPlayerMouseEnter($event)"
      @mouseleave="onPlayerMouseLeave($event)"
      @click="onPlayerClick($event)"   
   >
		  <video  class="video-js"
                         ref="videoPlayer"
                         :options="playerOptions"
                         :playsinline="true"
                         @pause="onPlayerPause($event)"
                         @ended="onPlayerEnded($event)"
                         @loadeddata="onPlayerLoadeddata($event)"
                         @waiting="onPlayerWaiting($event)"
                         @playing="onPlayerPlaying($event)"
                         @canplay="onPlayerCanplay($event)"
                         @canplaythrough="onPlayerCanplaythrough($event)"
                         @ready="playerReadied"
                         @statechanged="playerStateChanged($event)">

        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
          >
        </p>

		  </video>

      <v-fab-transition>
        <v-btn 
            v-show="!hidden"              
            depressed
            fab
            color="pink"
            dark
            small
            absolute
            left
            @click="previousVideo"
            class="vjs-previous-button"
          >
            <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-fab-transition>

      <v-fab-transition>
        <v-btn
          v-show="!hidden"
          depressed  
          fab
          color="pink"
          dark
          small
          absolute
          right
          @click="nextVideo"
          class="vjs-next-button"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-fab-transition>


      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>

          <v-btn
            v-show="!hidden"
            depressed
            fab
            small
            tile
            color="indigo"
            dark
            absolute
            left
            v-bind="attrs"
            v-on="on"
            class="vjs-menu-button"
          >
            <v-icon>mdi-menu-right</v-icon>
          </v-btn>
        </v-fab-transition>
        </template>

        <v-card>
          <v-list
            nav
            dense
            rounded
            hoverable
            activatable                      
          >
            <v-list-item 
              link
              @click="vjsLink(0)"
            >
              <v-list-item-content>
                <v-list-item-title>Animation</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-list-item 
              link
              @click="vjsLink(1)"
            >
              <v-list-item-content>
                <v-list-item-title>Seoul</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item 
              link
              @click="vjsLink(2)"
            >
              <v-list-item-content>
                <v-list-item-title>Lake</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item 
              link
              @click="vjsLink(3)"
            >
              <v-list-item-content>
                <v-list-item-title>Record</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item 
              link
              @click="vjsLink(4)"
            >
              <v-list-item-content>
                <v-list-item-title>Sand</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item 
              link
              @click="vjsLink(5)"
            >
              <v-list-item-content>
                <v-list-item-title>Sheep</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>


          </v-list>

          <v-divider></v-divider>


          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="menu = false"
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

      <!--
      <v-btn
        depressed
        color="success"
        @click="jumpVideo"
      >
        Play Third
      </v-btn>
      -->
    <div class="vjs-card-div">
      <v-row justify="end">
        <v-card
          v-show="!hidden"
        >
          <v-card-title>Animation.mp4</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <p>홍길동</p>
            <p>2021-11-11</p>
          </v-card-text>
        </v-card>
      </v-row>
    </div>

	</div>
  <p></p>
  <br><br>
  </div>
</template>

<script>
import videojs from 'video.js'
import playlistMaker from 'videojs-playlist/src/playlist-maker'

const plugin = function(list, item) {
  playlistMaker(this, list, item);
};

videojs.registerPlugin('playlist', plugin);



//import 'video.js/dist/video-js.css'

export default {
	name: 'VideoJsListBasicDesign',
    data() {
      return {
        hidden: true,
        menu: false,
        message: false,

        // videojs options
        playerOptions: {
  	      //height: '360',
          //autoplay: true,
          muted: false, 
          controls: true,
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
            name: 'Animation',
            id: 1,
            sources: [{
                        src: require('@/assets/video/Animation.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            name: 'Seoul',
            id: 2,
            sources: [{
                        src: require('@/assets/video/Seoul.mp4'),
                        type: 'video/mp4',
                    }],
                }, {
            name: 'Lake',
            id: 3,
            sources: [{
                        src: require('@/assets/video/Lake.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            name: 'Record',
            id: 4,
            sources: [{
                        src: require('@/assets/video/Record.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            name: 'Sand',
            id: 5,
            sources: [{
                        src: require('@/assets/video/Sand.mp4'),
                        type: 'video/mp4'
                    }],
                }, {
            name: 'Sheep',
            id: 6,
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
        this.player.on([
          'duringplaylistchange',
          'playlistchange',
          'beforeplaylistitem',
          'playlistitem',
          'playlistsorted',
          'play'
        ], function(e) {
          videojs.log('player saw "' + e.type + '"');
        });

		    this.player.playlist(this.playlist);
        //this.player.playlist.autoadvance(0);
        //this.player.playlist.repeat(false);
        this.player.muted(false);

        //this.createButton();

    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
    methods: {
      vjsLink(n){
        this.player.playlist.currentItem(n)  
      },
      previousVideo() {
        this.player.playlist.previous()
        this.hidden = !this.hidden 
      },
      nextVideo() {
        this.player.playlist.next()
        this.hidden = !this.hidden 
      },
      jumpVideo() {
        this.player.playlist.currentItem(3)  
      },
      createButton() {
        const videoButton = videojs.getComponent('Button')
        
        /* ADD PREVIOUS */
        const PrevButton = videojs.extend(videoButton, {
          //constructor: function(player, options) {
          constructor: function() {
            videoButton.apply(this, arguments);
            //this.addClass('vjs-chapters-button');
            this.addClass('icon-angle-left');
            this.controlText("Previous");
          },

          handleClick: function(e) {
            console.log('click : ' + e);
            this.player.playlist.previous();
          }
        });

        videojs.registerComponent('PrevButton', PrevButton);
        this.player.getChild('controlBar').addChild('PrevButton', {}, 0);
      },

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
      },
      onPlayerMouseEnter(player){
        console.log('player MouseEnter!', player)
        this.hidden = !this.hidden
      },
      onPlayerMouseLeave(player){
        console.log('player MouseLeave!', player)
        this.hidden = !this.hidden
      },
      onPlayerClick(player){
        console.log('player click!', player)
        this.hidden = !this.hidden
      },
    }		
}

</script>
<style>
@import '../assets/css/videojs.css';

.vjs-wrap-div{
  position: relative;
  width:100%;  
}
.vjs-wrap-div .vjs-menu-div{
  position: absolute;
  top: 10%;
}
.vjs-wrap-div .vjs-card-div{
  position: absolute;
  width: 100%;
  top: 10%;
  padding-right: 1.2%;
  opacity: 0.65;
}
.vjs-wrap-div .vjs-previous-button{
  top: 80%;
}

.vjs-wrap-div .vjs-next-button{
  top: 80%;
}

.vjs-wrap-div .vjs-menu-button{
  top: 10%;
}

.vjs-PN-div{
  position: absolute;
  width: 100%;
  z-index: 10;
}
.video-js .vjs-big-play-button{
  top: 45%;
  left: 45%;
}

</style>
