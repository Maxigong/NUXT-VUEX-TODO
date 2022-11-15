<template>
  <li :class="{ isComplete: item.isComplete }" class="item">
    <p style="text-align: start" class="item-value">{{ item.value }}</p>
    <div class="btns-container">
      <button @click="$store.dispatch('EDIT_ITEM', item.id)" class="btn edit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"
          />
        </svg>
      </button>
      <button
        @click="$store.dispatch('TOGGLE_COMPLETE', item.id)"
        class="btn complete"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
          />
        </svg>
      </button>
      <button
        @click="$store.dispatch('DELETE_ITEM', item.id)"
        class="btn delete"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </svg>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>
