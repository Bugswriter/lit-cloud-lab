<template>
<div id="app">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/blog" class="navbar-item">Blog</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
      </div>
      
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/contact" class="button is-success">Sign Up</router-link>
            <router-link to="/contact" class="button is-light">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    
    a {
        font-weight: bold;
        color: #2c3e50;
        
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
