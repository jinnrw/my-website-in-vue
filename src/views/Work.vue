<template>
  <div class="work">
    <h3 class="title">Works on GitHub</h3>
    <div class="work-list-top">
      <div v-for="(project, i) in store.Work.github" :key="i" class="top_item">
        <a :href="project.href" target="_blank" class="top_item_link">
          <div class="top_item_content">
            <div class="feature">{{project.tags}}</div>
            <h2 class="top_item_title">{{project.name}}</h2> 
            <p class="top_item_desc" v-html="project.desc"></p>
          </div>
          <div class="top_item_thumb">
            <img :src="`/img/${project.thumbnail}`" alt="">
          </div>
          <div class="top_item_cta">
              <svg width="36px" height="10px" viewBox="1206 658 36 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <polygon id="arrow" stroke="none" points="1241.1 662.6 1235.1 658 1235.2 662.4 1206 662.4 1206 663.3 1235.3 663.3 1235.4 667.6"></polygon>
              </svg>
          </div>
        </a>
      </div>
    </div>

    <h3 class="title divider">CodePen and Communities</h3>
    <div class="work-list">
      <div class="work-list_item" v-for="(project, i) in store.Work.other_works" :key="i">
        <a class="item_link" :href="project.href" target="_blank">
          <div class="item_thumb-img">
            <img :src="`/img/${project.thumbnail}`" alt="">
          </div>
          <div class="item_link_content">
            <h4 class="item_title">{{project.title}}</h4>
            <p class="item_desc">{{project.desc}}</p>
          </div>
          <span class="feature">{{project.tags}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "Work",
  data() {
    return {
      store
    };
  }
};
</script>

<style lang="scss" scoped>
.work-list-top {
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 120px;
}

.top_item {
  position: relative;
  width: 100%;
  min-height: 400px;
  display: flex;

  .top_item_link {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 60px;
  }

  .top_item_cta {
    position: absolute;
    bottom: 20px;
    right: 30px;
    height: 37px;
    line-height: 37px;
    border: none;
    transform: translateX(0);
    transition: all 0.4s ease;
  }

  &:hover .top_item_cta {
    transform: translateX(10px);
  }
}

.top_item {
  &:first-child {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    background-color: #f7f6fd;

    .top_item_link {
      flex-direction: row;
      justify-content: space-between;
    }

    .top_item_content {
      width: 50%;
    }

    .top_item_thumb {
      max-width: 480px;
      padding: 0 30px;
    }
  }

  &:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    background-color: #dceded;
  }

  &:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-color: #fff6ca;
  }
}

.top_item_content {
  min-height: 300px;

  .top_item_title {
    font-size: 30px;
    margin: 60px 0 40px;
  }

  .top_item_desc {
    line-height: 18px;
    font-size: 14px;
    letter-spacing: 0.3px;
  }

  .feature {
    position: relative;
    display: inline-block;
    font-size: 14px;
    padding-top: 12px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      border-top: 1px solid;
      transform-origin: center left;
    }
  }
}

.top_item_thumb {
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 30px 0;

  img {
    width: 100%;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.05);
  }
}

// Works - Bottom
.work-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin-bottom: 60px;
}

.work-list_item {
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  // min-height: 360px;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.2s ease-out;
  transition-delay: 0.1s;
  overflow: hidden;
  border-radius: 4px;

  &:hover {
    transform: translate(0, -4px);
  }

  .item_link {
    position: relative;
    display: block;
    border-bottom: none;
    height: 100%;

    .feature {
      position: absolute;
      left: 12px;
      bottom: 16px;
      font-size: 14px;
      color: #b2c0c8;
      line-height: 12px;
    }
  }
}

.item_link {
  .item_link_content {
    padding: 0 12px 16px;
  }

  .item_title {
    font-size: 16px;
    letter-spacing: 0.3px;
    margin-bottom: 16px;
    font-weight: 600;
  }

  .item_desc {
    line-height: 18px;
    font-size: 14px;
    letter-spacing: 0.3px;
    padding-bottom: 20px;
  }

  .item_thumb-img {
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
}

.work-list_item {
  &.flappy-chicken {
    .item_thumb-img {
      img {
        position: relative;
        top: 20px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .work-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .item_link .item_thumb-img {
    // height: 300px;
  }
}

@media (max-width: 768px) {
  .top_item_content {
    .top_item_title {
      font-size: 22px;
    }
  }

  .top_item:first-child {
    .top_item_content {
      width: 60%;
    }
  }
  .top_item {
    .top_item_link {
      padding: 40px;
    }
  }

  .work-list_item {
    &:hover {
      transform: none;
    }
  }
}

@media (max-width: 414px) {
  .work-list {
    grid-template-columns: repeat(1, 1fr);
  }

  .top_item_thumb {
    display: none;
  }

  .work-list-top {
    .top_item {
      min-height: 360px;
    }
  }

  .top_item_content {
    width: 100%;
    min-height: unset;
    padding: 0;

    .top_item_title {
      font-size: 18px;
      margin-top: 40px;
    }

    .feature {
      font-size: 12px;
    }
  }

  .top_item {
    &:first-child {
      grid-column: 1 / -1;
      grid-row: auto;
      background-color: #f7f6fd;

      .top_item_content {
        width: 100%;
        padding-right: 0;
      }
    }

    &:nth-child(2) {
      grid-column: 1 / -1;
      grid-row: auto;
    }

    &:nth-child(3) {
      grid-column: 1 / -1;
      grid-row: auto;
    }
  }
}
</style>

