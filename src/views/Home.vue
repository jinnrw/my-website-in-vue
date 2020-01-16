<template>
  <div class="home">
    <div class="hero">
      <img src="/img/hero_avatar.png" class="avatar">
      
      <div class="hero_intro">
        <h1 v-html="store.Home.hero_text"></h1>
      </div>

    </div>

    <div class="home_intro" v-html="store.Home.intro">
    </div>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: "home",
  data() {
    return {
      store
    };
  },
  created() {
  },
  methods: {}
};
</script>


<style lang="scss">
.home {
}
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 130px;
  font-family: "Raleway", Helvetica, Arial, sans-serif;

  .hero_intro {
    padding: 0 20px;

    h1 {
      line-height: 50px;
      margin: 0;
    }
  }
}

.home_intro {
  p {
    margin-bottom: 16px;
  }
}

.avatar {
  width: 140px;
  margin-right: 20px;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    margin-bottom: 60px;
    text-align: center;

    .hero_intro {
      padding: 0;
    }
    .avatar {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
}
</style>
