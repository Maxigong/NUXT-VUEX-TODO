const saveLocalStorage = (todoList) => {
  localStorage.setItem("nuxtStore", JSON.stringify(todoList));
};

export const state = () => ({
  todoList: [],
  showAlert: false,
  isEditing: false,
  ItemID: "",
  ItemValue: "",
  timeOut: 0,
  alert: {
    message: "",
    type: "",
  },
});

export const mutations = {
  SET_ITEMS(state) {
    let todo = localStorage.getItem("nuxtStore");
    if (todo) {
      state.todoList = JSON.parse(localStorage.getItem("nuxtStore"));
    } else {
      localStorage.setItem("nuxtStore", JSON.stringify([]));
    }
  },
  UPDATE_VALUE(state, payload) {
    state.ItemValue = payload;
  },
  HANDLE_FORM_SUBMIT(state) {
    if (state.ItemValue && state.ItemValue.trim() !== "") {
      if (!state.isEditing) {
        const newTask = {
          id: new Date().getTime().toString(),
          value: state.ItemValue,
          isComplete: false,
        };
        state.todoList.push(newTask);

        state.alert = {
          message: "Task added",
          type: "success",
        };
      } else {
        let updatedTodoList = state.todoList.map((item) => {
          if (item.id === state.ItemID) {
            return { ...item, value: state.ItemValue };
          }
          return item;
        });
        state.todoList = updatedTodoList;

        state.alert = {
          message: "Task Edited",
          type: "success",
        };
      }
      state.ItemID = null;
      state.isEditing = false;
      state.ItemValue = "";

      saveLocalStorage(state.todoList);
    } else {
      state.alert = {
        message: "Task added",
        type: "success",
      };
    }

    this.commit("ALERT_MESSAGE");
  },

  EDIT_ITEM(state, payload) {
    const specificItem = state.todoList.find((item) => item.id === payload);
    state.ItemID = payload;
    state.ItemValue = specificItem.value;
    state.isEditing = true;
    state.alert = {
      message: "Editing ...",
      type: "warning",
    };
    this.commit("ALERT_MESSAGE");
  },

  TOGGLE_COMPLETE(state, payload) {
    const completedList = state.todoList.map((item) => {
      if (item.id === payload) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    state.isEditing = false;
    state.ItemValue = "";
    state.todoList = completedList;
    saveLocalStorage(state.todoList);
  },
  DELETE_ITEM(state, payload) {
    const todoList = state.todoList.filter((item) => item.id !== payload);
    state.isEditing = false;
    state.ItemValue = "";
    state.todoList = todoList;
    saveLocalStorage(state.todoList);
    state.alert = {
      message: "item deleted",
      type: "danger",
    };
    this.commit("ALERT_MESSAGE");
  },

  REMOVE_ALL(state) {
    state.todoList = [];
    state.ItemValue = "";
    state.isEditing = false;
    saveLocalStorage(state.todoList);
    state.alert = {
      message: "All items deleted",
      type: "danger",
    };
    this.commit("ALERT_MESSAGE");
  },

  ALERT_MESSAGE(state) {
    state.showAlert = true;
    clearTimeout(state.timeOut);
    if (!state.isEditing) {
      state.timeOut = setTimeout(() => {
        this.commit("HIDE_ALERT_MESSAGE");
      }, 1500);
    }
  },
  HIDE_ALERT_MESSAGE(state) {
    state.showAlert = false;
  },
};

export const actions = {
  SET_ITEMS: ({ commit }) => {
    commit("SET_ITEMS");
  },
  REMOVE_ALL: ({ commit }) => {
    commit("REMOVE_ALL");
  },
  UPDATE_VALUE: ({ commit }, payload) => {
    commit("UPDATE_VALUE", payload);
  },
  HANDLE_FORM_SUBMIT: ({ commit }) => {
    commit("HANDLE_FORM_SUBMIT");
  },
  DELETE_ITEM: ({ commit }, payload) => {
    commit("DELETE_ITEM", payload);
  },
  TOGGLE_COMPLETE: ({ commit }, payload) => {
    commit("TOGGLE_COMPLETE", payload);
  },
  EDIT_ITEM: ({ commit }, payload) => {
    commit("EDIT_ITEM", payload);
  },
};
