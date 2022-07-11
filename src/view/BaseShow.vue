<template>
  <div>Base Show</div>
  <div>Base Show</div>
  <div>Base Show</div>
  <div>Base Show</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.querySelect();
  },
  methods: {
    querySelect() {
      let params = {
        id: 12345,
      };
      this.$api.common.querySelect(params).then((res) => {
        if (res.code == 200) {
        }
      });
    },
  },
};
</script>
