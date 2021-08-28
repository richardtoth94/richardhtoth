<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <img src="/profile_photo.jpeg" alt="Profile Photo" class="img-fluid profile_image">
        <div class="text-card mt-3">
          <h1>Richard Toth</h1>
          <h4>Web Developer</h4>
        </div>
        <div class="socials">
          <a href="https://www.linkedin.com/in/richard-toth-57508012a/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>

          <a href="https://twitter.com/richardchad12" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>

          <a href="https://github.com/richardtoth94" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    //
  }
}
</script>

<style>
body {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

.socials {
  display: flex; 
  justify-content: center;
  align-items: center;
}

.socials a {
  margin: 10px 20px 0 20px;
}

.profile_image {
  width: 160px;
  height: 160px;
  border-radius: 100%;
}

h1, h4, a, svg {
  color: white;
}

a {
  font-size: 24px;
}
</style>
