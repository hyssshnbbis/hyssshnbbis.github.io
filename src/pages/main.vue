<script setup>
import {onMounted, reactive} from 'vue'
import StarTrails from '../components/StarTrails.vue'
import {smoothScroll} from '../JavaScript/smoothScroll.js'
import {updateYear} from '../JavaScript/updateYear.js'

const data = reactive ({
  titleList: [
    '你好，请多指教',
    '希望能成为有趣的人',
    'さあ、ゲームを始めよう',
    '相信美好的事情即将发生',
    '平凡的日常正奇迹的发生着',
    '你所热爱的<br/>就是你的生活',
    '给时光以生命<br/>给岁月以文明',
    '路虽远行则将至<br/>事虽难做则必成',
    '一望无际的迷雾中<br/>有人在寻找光明',
    '当你在凝视着网页的时候<br/>网页也正在凝视着你',
    '成长的路不需要惊天伟业<br/>平凡踏实也同样精彩',
  ],
  navLinks: [{
    name: 'Misskey',
    link: 'misskey',
    isRouter: true,
  }, {
    name: 'Blog',
    link: 'https://blog.hanahime.online',
  }, {
    name: 'Index',
    link: 'https://HanaKDev.github.io',
  }],

  myProjects: [{
    name: 'Index',
    description: '个人简介、主页、引导页',
    link: 'https://github.com/HanaKDev/HanaKDev.github.io',
  }, {
    name: 'Blog',
    description: '个人博客，学习&随笔',
    link: 'https://blog.hanahime.online',
  }, {
    name: 'undefined',
    description: '喵喵喵~ 暂时没有别的东西 wv',
    link: './',
  }],

  socialLinks: [{
    icon: '<i i-ant-design-github-outlined />',
    link: 'https://github.com/HanaKDev',
    label: 'Github',
  }, {
    icon: '<i i-ant-design-twitter-outlined />',
    link: 'https://twitter.com/luanyaolingwu',
    label: 'Twitter',
  }, /* {
    icon: '<i i-ant-design-youtube-outlined />',
    link: 'https://youtube.com/@sun0225SUN',
    label: 'YouTube',
  }, */ {
    icon: '<i i-ant-design-bilibili-outlined />',
    link: 'https://space.bilibili.com/511373704/',
    label: 'Bilibili',
  }],
})

onMounted (() => {
  // 背景固定
  window.addEventListener ('scroll', () => {
    const bg = document.getElementById ('background')
    const scrollTop = window.scrollY
    if (scrollTop > 0.7 * window.innerHeight) {
      bg.classList.add ('fixed')
    } else {
      bg.classList.remove ('fixed')
    }
  })
  // 页脚Copyright时间
  updateYear ()
})
</script>

<template>
  <!-- 导航 -->
  <nav absolute bottom-4 fixed left-4 z-20>
    <div v-for="(item, index) in data.navLinks" :key="index" my-6 text-3 text-white wv>
      <RouterLink
        v-if="item.isRouter" :to="{ name: item.link }"
        hover:opacity-100 opacity-75 text-white tracking-widest
      >
        {{ item.name }}
      </RouterLink>
      <a v-else :href="item.link" hover:opacity-100 opacity-75 text-white tracking-widest>
        {{ item.name }}
      </a>
    </div>
  </nav>

  <!-- 主体 -->
  <main absolute bg-transparent top-75vh w-full z-10>
    <!-- 大标题 -->
    <section absolute ml-15vw>
      <div
        font-bold text-10 text-white tracking-widest
        v-html="data.titleList[Math.floor(Math.random() * data.titleList.length)]"
      />
      <div flex items-center>
        <div flex gap-2 mr-4>
          <div bg-red h-3 rounded-full w-3/>
          <div bg-yellow h-3 rounded-full w-3/>
          <div bg-green h-3 rounded-full w-3/>
        </div>
        <div text-4 text-white tracking-widest>
          Hysss
        </div>
      </div>
    </section>
    <!-- 个人简介 -->
    <section mt-90 mx-9vw>
      <!-- 关于我 -->
      <div mb-4 ml-10 text-8 text-bold text-white>
        About Me
      </div>
      <div flex justify-between mb-10 mx-10>
        <div class="text-white/80">
        <h1>None</h1>
        </div>
        <div>
          <button class="transparent-button" @click.prevent="smoothScroll('AboutMe')">
            <img
              alt="avatar"
              h-25 hidden hover:-translate-y-1 md:block rounded-full src="../assets/images/avatar.jpg" transition w-25
            >
          </button>
        </div>
      </div>

      <!-- 我的技能 -->
      <!-- <div text-bold mb-2 ml-10 text-8 text-white>
          My Skills
        </div> -->

      <!-- 我的项目 -->
      <div mb-2 ml-10 text-8 text-bold text-white>
        Projects
      </div>
      <div flex flex-wrap justify-between mb-10>
        <div v-for="(item, index) in data.myProjects" :key="index" class="basis-3/4 md:basis-1/6" mx-10 my-4>
          <a :href="item.link">
            <div

              backdrop-blur-3xl

              backdrop-opacity-60 class="bg-white/5 hover:bg-white/10" flex-col hover:-translate-y-2 hover:backdrop-opacity-100 p-2 rounded-lg
              shadow-md transition
            >
              <div opacity-75 text-bold text-white>
                {{ item.name }}
              </div>
              <div mt-1 opacity-50 text-3 text-white>
                {{ item.description }}
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- 社交链接 -->
      <div id="AboutMe" mb-2 ml-10 text-8 text-bold text-white>
        Find Me
      </div>
      <div flex flex-wrap justify-between>
        <div v-for="(item, index) in data.socialLinks" :key="index" class="basis-1/6" mx-10 my-4>
          <a
            :href="item.link"

            backdrop-blur-3xl

            backdrop-opacity-60 class="bg-white/5 hover:bg-white/10" flex-col hover:-translate-y-2 hover:backdrop-opacity-100 items-center justify-between p-2
            rounded-lg shadow-md transition
          >
            <div f-c-c mb-1 text-white v-html="item.icon"/>
            <div opacity-75 text-bold text-white>{{ item.label }}</div>
          </a>
        </div>
      </div>
    </section>

    <!-- 底部 -->
    <footer mb-5>
      <div class="text-white/60" f-c-c mt-50>
        <i i-ant-design-environment-outlined mr-1/>
        <p>路虽远行则将至，事虽难做则必成</p>
        <!--  <i i-ant-design-environment-outlined ml-1 /> -->
      </div>
      <div class="text-white/60" f-c-c gap-4 mt-2>
        <div>
          © 2019
          <span id="yearSpan"/>
          鸾依凌
        </div>
        <div text-pink-800>
          <a href="https://beian.miit.gov.cn">ICP: 粤ICP备2024275888号-1</a>
        </div>
      </div>
    </footer>
  </main>

  <!-- 背景 -->
  <div id="background" absolute left-0 top-0 wh-full z-0>
    <!-- 渐变阴影 -->
    <div absolute bg-gradient-to-t bottom--30vh from-black h-80vh left-0 to-black-500 w-full/>
    <!-- 星轨背景 -->
    <StarTrails bg-black pb-45vh/>
  </div>
</template>

<style lang="scss" scoped>
#background.fixed {
  position: fixed;
  top: -70%;
}

.transparent-button {
  background: transparent;
  border: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
