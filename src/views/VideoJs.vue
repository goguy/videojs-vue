<template>
  <div>
    <video-player :options="videoOptions"/>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
//import 'video.js/dist/video-js.css'
export default {
	name: 'videoJs',
	components: {
		VideoPlayer
	},
	data() {
		return {
			videoOptions: {
				autoplay: true,
				controls: true,
				sources: [
					{
						src:'/videos/Seoul.mp4',
						//src:'http://localhost:8080/videos/Seoul.mp4',
                        //src:'http://localhost:9090/MTS/api/videos/Seoul.mp4',
						//src: require('@/assets/video/Seoul.mp4'),
						type: 'video/mp4'
					}
				]
			}
		};
	}
};

</script>
<style>
@import '../assets/css/video-js.css';
</style>
