<template>
    <div>
        <h1>Videos</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Summary</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="video in videos" :key="video.id">
                    <td>{{ video.id }}</td>
                    <td>{{ video.title }}</td>
                    <td>{{ video.summary }}</td>
                    <td>
                      <router-link :to="{name: 'AdminEditVideo', params: { id: video.id }}" class="btn btn-primary btn-sm">Edit</router-link>&nbsp;
                      <button class="btn btn-danger btn-sm" v-on:click="deleteVideo(video.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link :to="{ name: 'AdminCreateVideo' }" class="btn btn-primary btn-sm">Add Video</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      videos: []
    }
  },

  created: function()
  {
    this.fetchVideos()
  },

  methods: {
    fetchVideos() {
      let uri = this.backend_api_root_url + 'videos';
      axios.get(uri).then((response) => {
        this.videos = response.data
      });
    },
    deleteVideo(id) {
      if (confirm('Delete video?')) {
        let uri = this.backend_api_root_url + 'videos/' + id
        axios.delete(uri).then((response) => {
          console.log(response.data)
          for(var i = 0; i < this.videos.length; i++) {
            if(this.videos[i].id == id) {
              this.videos.splice(i, 1)
            }
          }
        })
      }
    }
  }
}
</script>
