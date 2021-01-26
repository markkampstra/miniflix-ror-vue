<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">MiniFlix</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/videos" class="nav-link">Videos</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <router-link to="/admin" class="nav-link">Admin</router-link>
        </li>
    </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      backend_api_root_url: 'http://localhost:3000/',
    }
  }
}
</script>
