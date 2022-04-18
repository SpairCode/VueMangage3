<template>
  <div class="tag-list">
    <ul>
      <li>测试标签</li>
      <li>测试标签</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tagList",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tag-list {
  width: 100%;
  height: 30px;
  background-color: aqua;

  > ul {
    width: 100%;
    margin: 0px;
    padding: 0px;
    list-style: none;

    > li {
      display: inline-block;
      margin: 0px 3px;
      padding: 4px 20px;
      background-color: beige;
      border-radius: 3px;
      cursor: pointer··;
    }
  }
}
</style>
