<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Video</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addVideo">
          <div class="form-group">
            <label>title:</label>
            <input type="text" class="form-control" v-model="video.title"/>
          </div>
          <div class="form-group">
            <label>summary:</label>
            <textarea class="form-control" v-model="video.summary"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Video"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      video: {}
    }
  },
  methods: {
    addVideo() {
      let uri = this.backend_api_root_url + 'videos'
      axios.post(uri, { video: this.video } ).then(response => console.log(response.data))
      this.$router.push({ name: 'AdminListVideos' })
    }
  }
}
</script>
