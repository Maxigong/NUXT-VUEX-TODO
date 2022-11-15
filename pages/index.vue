<template>
  <div class="section-center section">
    <h2 className="title">Todo Nuxt Vuex</h2>
    <Alert />
    <section class="main-container">
      <h2>Task List</h2>
      <Form ref="form" />
      <div class="todo-list">
        <ul class="todo-container">
          <TodoItem v-for="item in todoList" :key="item.id" :item="item" />
        </ul>
      </div>

      <button
        v-if="todoList.length"
        class="remove-items"
        @click="$store.dispatch('REMOVE_ALL')"
      >
        remove all
      </button>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("SET_ITEMS");
  },

  computed: {
    ...mapState({
      todoList: "todoList",
      // showAlert: "showAlert",
    }),
  },
};
</script>

<style></style>
