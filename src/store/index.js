import { createStore } from "vuex";

export default createStore({
  state: {
    toasterMessage: "",
    enAttente: false,
  },
  getters: {},
  mutations: {
    SET_TOASTER_MESSAGE(state, payload) {
      state.toasterMessage = payload;
    },
    SET_EN_ATTENTE(state, payload) {
      state.enAttente = payload;
    },
  },
  actions: {
    setToaster(context, payload) {
      // vérifier si payload est une chaîne de texte, sinon lever une exception...
      context.commit("SET_TOASTER_MESSAGE", payload);
      setTimeout(() => {
        context.commit("SET_TOASTER_MESSAGE", "");
      }, 3000);
    },
    setEnAttente(context, payload) {
      context.commit("SET_EN_ATTENTE", !!payload);
    },
  },
  modules: {},
});
