<template>
  <div class="alert-container">
    <div :class="alert.type" class="alert-box">
      <p>{{ alert.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      alert: "alert",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
