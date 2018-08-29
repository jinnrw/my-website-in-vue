<template>
  <div id="app">
    <div class="nav nav-top">
      <!-- <img src="./assets/logo.png" class="logo"> -->
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/work" class="nav-link">Work</router-link>
    </div>
    <router-view class="main"/>
    <div class="nav nav-bottom">
      <a href="https://www.linkedin.com/in/jinnwang/" target="_blank">@jinnwang</a>
      <span>&nbsp;/ View Source on
        <a href="https://github.com/jinnrw/my-website-in-vue" target="_blank">GitHub</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
// Init Font
h1,
h2,
h3,
h4,
p {
  margin-top: 0;
}

h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 30px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }
}

// Color Var
$link-color: #888;
$dark-blue: #1e1d31;
$external-link: #1e1d32;

body {
  position: relative;
  margin: 0;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

a.link {
  color: $external-link;
  border-bottom: 1px solid $external-link;
}

// App
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  min-height: calc(100vh - 60px);
}

.nav {
  font-family: "Questrial", Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  background: #fff;
  z-index: 9;

  .logo {
    width: 60px;
    margin-right: 60px;
  }

  .nav-link {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: $link-color;
    letter-spacing: 0.5px;
    border-bottom: none;
    transition: color 0.3s;
    margin-right: 40px;

    &:hover {
      color: $dark-blue;
    }

    &.router-link-exact-active {
      color: $dark-blue;
    }
  }
}

.nav {
  &.nav-top {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 160px);
    height: 40px;
    padding: 10px 80px;
  }
}

.main {
  max-width: 980px;
  margin: 0 auto;
  padding: 130px 40px 60px;
}

.nav-bottom {
  position: absolute;
  bottom: 0;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
  padding: 20px 0;

  a {
    border: none;
    font-weight: 700;
  }
}

.title {
  font-size: 24px;
  margin-bottom: 40px;

  &.divider {
    position: relative;
    padding-top: 60px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border-top: 2px solid #000;
      width: 40px;
    }
  }
}


@media (max-width: 1140px) {
    .nav.nav-top {
    width: calc(100% - 80px);
    padding: 10px 40px;

    .nav-link {
    }
  }
}
@media (max-width: 414px) {
  .main {
    padding-top: 100px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .nav.nav-top {
    width: calc(100% - 40px);
    padding: 10px 20px;
    justify-content: space-around;

    .nav-link {
      margin-right: 0;
    }
  }
}
</style>
