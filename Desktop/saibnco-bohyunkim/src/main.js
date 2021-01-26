import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Routes from "./router/routes.js";
import "../src/styles/common.scss";
import axios from "axios";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
