<template>
  <h1>Videos Page</h1>
  <div id="videos">
    <div v-for="(video, index) in videos" :key="video.id">
      <p>{{ index }} {{video.title}} is my {{video.summary}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      videos: [],
      errors: []
    }
  },
  created() {
    axios.get('http://localhost:3000/videos')
    .then(response => {
      this.videos = response.data
    })
    .catch(e => {
      this.error.push(e)
    })
  },
}
</script>
