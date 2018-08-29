<template>
  <div class="about">
    <h3 class="title">About Me</h3>
    <div class="about_intro">
      <div class="intro-left" v-html="store.About.about_intro[0]">
      </div>
      <div class="intro-right" v-html="store.About.about_intro[1]">
      </div>
    </div>

    <h3 class="title divider">Work Experience</h3>
    <div class="job-list">
      <div class="job" v-for="(company, i) in store.About.work_exp" :key="i">
        <div>
          <div class="job-company">{{company.company}}</div>
          <p class="job-title">{{company.job_title}}</p>
        </div> 
        <div class="job-duration">{{company.duration}}</div>
      </div>
    </div>

    <h3 class="title divider">Volunteer</h3>
    <div class="job-list">
      <div class="job" v-for="(volunteer, i) in store.About.volunteer" :key="i">
        <div>
          <div class="job-company">{{volunteer.name}}</div>
          <div class="job-title">{{volunteer.title}}</div>
        </div> 
        <div class="job-duration">{{volunteer.duration}}</div>
      </div>  
    </div>

    <h3 class="title divider">Skills</h3>
    <div class="skills">
      <ul>
        <li v-for="(skill, i) in store.About.skills" :key="i">
          <div class="skills_title">{{skill.skill_title}}</div>
          <p class="skills_item">{{skill.skill_items}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: "About",
  data() {
    return {
      store
    };
  }
};
</script>

<style lang="scss" scoped>
.about_intro {
  margin-bottom: 60px;
  display: flex;

  .intro-left {
    width: 48%;
    margin-right: 4%;
  }

  .intro-right {
    width: 48%;
  }
}

.job-list {
  margin-bottom: 120px;
}

.job {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.job-company {
  font-size: 18px;
  padding-bottom: 4px;
  font-weight: 600;
}

.job-duration {
  font-size: 16px;
  font-weight: 300;
}

.job-title {
  font-size: 16px;
  margin-bottom: 0;
}

.skills {
  font-size: 16px;
  margin-bottom: 80px;

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin-bottom: 32px;
    }
  }
  .skills_title {
    font-size: 18px;
    padding-bottom: 4px;
    font-weight: 600;
  }
}

@media (max-width: 768px) {
  .about_intro {
    flex-direction: column;

    .intro-left,
    .intro-right {
      width: 100%;
    }
  }

  .job-company,
  .skills .skills_title {
    font-size: 16px;
  }

  .job-title,
  .job-duration {
    font-size: 14px;
  }
}

@media (max-width: 414px) { 

  .job {
    flex-direction: column;
    margin-bottom: 40px;
  }

  .job-title {
    margin-bottom: 12px;
  }
}

</style>
