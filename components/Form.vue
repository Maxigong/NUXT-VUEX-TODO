<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <input
      type="text"
      :value="ItemValue"
      class="input-control"
      placeholder="Type something..."
      maxlength="25"
      @input="updateMessage"
    />
  </form>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      ItemValue: "ItemValue",
    }),
  },
  methods: {
    updateMessage(e) {
      this.$store.dispatch("UPDATE_VALUE", e.target.value);
    },
    handleSubmit() {
      this.$store.dispatch("HANDLE_FORM_SUBMIT", this.task);
    },
  },
};
</script>

<style lang="scss" scoped></style>
