// import Prismic from "prismic-javascript";
// import PrismicConfig from "~/prismic.config.js";

// export const state = () => ({
//   navigation: {}
// });

// export const mutations = {
//   SET_NAVIGATION: (state, payload) => {
//     state.navigation = payload;
//   }
// };

// export const action = {
//   async nuxtServerInit({ commit, req }) {
//     const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
//     const response = await api.getSingle("navigation");
//     const navigation = response.data;
//     console.log(navigation);
//     store.commit("SET_NAVIGATION", navigation);
//   }
// };
