<template>
  <div class="home">
    <Header />
    <SideBar />
    <div class="home-content">
      <Tag />
      <router-view v-slot="{ Component }">
        <transition name="move">
          <!-- 是否缓存组件 -->
          <!-- <keep-alive> -->
          <component :title="Component" :is="Component" />
          <!-- </keep-alive> -->
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import Tag from "../components/Tag.vue";

export default {
  components: {
    SideBar,
    Header,
    Tag,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  .home-content {
    position: absolute;
    top: 60px;
    left: 200px;
    width: calc(100% - 200px);
    height: calc(100% - 60px);
    background-color: aliceblue;
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
    overflow-x: hidden;
    overflow-y: auto;
  }
}

.move-enter-active,
.move-leave-active {
  transition: opacity 0.1s ease;
}

.move-enter-from,
.move-leave-to {
  opacity: 0;
}
</style>
