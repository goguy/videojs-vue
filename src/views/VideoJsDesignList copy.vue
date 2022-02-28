<template>
    <div>
        <div class="vjs-wrap-div"
            @mouseenter="onDivPlayerMouseEnter($event)"
            @mouseleave="onDivPlayerMouseLeave($event)"
            @click="onDivPlayerClick($event)">

            <video-player-design-list :options="playerOptions"
                                        :listOptions="playList"
                                        @player="onPlayer" 
                                        @playerState="onPlayerState"/>

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
                    @click="previousPlayer"
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
                @click="nextPlayer"
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

            <div class="vjs-card-div">
                <v-row justify="end">
                    <v-card
                    v-show="!hidden"
                    >
                    <v-card-title>Animation</v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <p>홍길동</p>
                        <p>2021-11-11</p>
                    </v-card-text>
                    </v-card>
                </v-row>
            </div>
        </div>
    <div>
        <v-btn
            @click="listChange"
        >
            list 변경
        </v-btn>    
       
    </div>
    </div>
</template>

<script>
import VideoPlayerDesignList from '@/components/VideoPlayerDesignList.vue'
//import 'video.js/dist/video-js.css'

export default {
	name: 'videoJsDesignList',
	components: {
		VideoPlayerDesignList
	},
	data() {
		return {
            player: null,
            PlayerListPrevousIndex: -1,
            PlayerListCurrentIndex: 0,
            PlayerListNextIndex: 1,
            response: null,
			playerOptions: {
				autoplay: false,
				controls: true,
                fluid: true,// 화면의 따라
                plugins: {
                    playlist: {
                    autoadvance: true
                    }
                },                
			},
            playList: [{
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
            changePlayList: [{
                sources: [{
                            src: require('@/assets/video/Seoul.mp4'),
                            type: 'video/mp4'
                        }],
                }],
            hidden: true,
            menu: false,
		};
	},
    computed: {},   
    watch: {},
    mounted() {
        if(this.response)
            this.onPlayer()
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },

    methods: {
       async onPlayer(player){
            this.player = player
            this.response = await this.player.playlist(this.playList)
            this.response = await this.player.playlist.autoadvance(0)

            this.playerListStated(this.player)
        },
        
        async listChange(){

            this.response = await this.player.playlist(this.changePlayList)
            
        
        },

        playerListStated(player){            
            player.on([
                'duringplaylistchange',
                'playlistitem',
                'playlistsorted',
                'playlistchange',
                'beforeplaylistitem',
                ],function(e) {
                    this.PlayerListPrevousIndex = player.playlist.previousIndex()
                    this.PlayerListCurrentIndex = player.playlist.currentItem()
                    this.PlayerListNextIndex = player.playlist.nextIndex() 

                    player.log('player-list saw "' + e.type + '"');
                    console.log('playlist.previousIndex() : ' + player.playlist.previousIndex());
                    console.log('playlist.currentItem() : ' + player.playlist.currentItem());
                    console.log('playlist.nextIndex() : ' + player.playlist.nextIndex());
            });
        },
        onPlayerState(event){
            switch(event.type){
                case 'play':
                    console.log('player : ' + event.type);
                    break;    
                case 'pause':
                    console.log('player : ' + event.type);
                    break;    
                case 'ended':
                    console.log('player : ' + event.type);
                    break;    
                case 'loadeddata':
                    console.log('player : ' + event.type);
                    break;    
                case 'waiting':
                    console.log('player : ' + event.type);
                    break;    
                case 'playing':
                    console.log('player : ' + event.type);
                    break;    
                case 'canplay':
                    console.log('player : ' + event.type);
                    break;    
                case 'canplaythrough':
                    console.log('player : ' + event.type);
                    break;    
                /*
                case '':
                    console.log('player : ' + event.type);
                    break;    
                case '':
                    console.log('player : ' + event.type);
                    break;
                */        
                default:
                    console.log('default');
            }
        },

        vjsLink(n){
            this.player.playlist.currentItem(n)  
        },
        previousPlayer() {
            this.player.playlist.previous()
            this.hidden = !this.hidden 
        },
        nextPlayer() {
            this.player.playlist.next()
            this.hidden = !this.hidden
        },

        onDivPlayerMouseEnter(player){
            console.log('divPlayer MouseEnter!', player)
            this.hidden = !this.hidden
        },
        onDivPlayerMouseLeave(player){
            console.log('divPlayer MouseLeave!', player)
            this.hidden = !this.hidden
        },
        onDivPlayerClick(player){
            console.log('divPlayer click!', player)
            this.hidden = !this.hidden
        },
    }    
};

</script>
<style>
@import '../assets/css/video-js.css';

.video-js .vjs-big-play-button{
  top: 45%;
  left: 45%;
}

.vjs-wrap-div{
  position: relative;
  width:100%;  
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


.vjs-wrap-div .vjs-card-div{
  position: absolute;
  width: 100%;
  top: 10%;
  padding-right: 1.2%;
  opacity: 0.70;
}

</style>