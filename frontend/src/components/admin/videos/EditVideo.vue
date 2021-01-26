<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Video</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateVideo">
          <div class="form-group">
            <label>title:</label>
            <input type="text" class="form-control" v-model="video.title"/>
          </div>
          <div class="form-group">
            <label>summary:</label>
            <textarea class="form-control" v-model="video.summary"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary btn-sm" value="Update Video"/>
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
  created: function() {
    this.getVideo()
  },
  methods: {
    getVideo()
    {
      let uri = this.backend_api_root_url + 'videos/' + this.$route.params.id
      axios.get(uri).then((response) => {
        this.video = response.data
      })
    },
    updateVideo() {
      let uri = this.backend_api_root_url + 'videos/' + this.$route.params.id
      axios.put(uri, {
        video: {
          title: this.video.title,
          summary: this.video.summary
        }
      }).then(this.$router.push({ name: 'AdminListVideos' }))
    }
  }
}
</script>
