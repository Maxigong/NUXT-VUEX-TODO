<template>
  <div class="alert-container">
    <div v-if="showAlert" :class="alert.type" class="alert-box">
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
      showAlert: "showAlert",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
