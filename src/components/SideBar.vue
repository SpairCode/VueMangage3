<template>
  <div class="side-bar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :default-active="onRoutes"
      unique-opened
      router
    >
      <el-menu-item index="/BaseShow">
        <el-icon>
          <icon-menu />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="/BaseSwitch">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
      <el-menu-item index="/EchartMaps">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>EchartMap</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  position: absolute;
  top: 60px;
  left: 0px;
  height: calc(100% - 60px);
  width: 200px;

  > .el-menu {
    height: 100%;
  }
}

.side-bar::-webkit-scrollbar {
  width: 0;
}
</style>
