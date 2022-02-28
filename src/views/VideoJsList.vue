<template>
  <div>
    <video-player-list :options="videoOptions"
                       :listOptions="playlist"/>

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
import VideoPlayerList from '@/components/VideoPlayerList.vue'
//import 'video.js/dist/video-js.css'
export default {
	name: 'videoJsList',
	components: {
		VideoPlayerList
	},
	data() {
		return {
			videoOptions: {
				autoplay: false,
				controls: true,
                plugins: {
                    playlist: {
                        autoadvance: true
                    }
                },                
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

            changePlaylist: [{
                sources: [{
                            src: require('@/assets/video/Sheep.mp4'),
                            type: 'video/mp4'
                        }],
                }],

		};
	},
    methods: {
        listChange(){
            console.log('listChange')

            this.playlist=this.changePlaylist
        }
    }
}

</script>
<style>
@import '../assets/css/video-js.css';
</style>