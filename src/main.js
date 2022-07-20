import Vue from "vue";
import App from "./App.vue";
import Board from "./components/Board.vue";
import Cell from "./components/Cell.vue";

Vue.component("board", Board);
Vue.component("cell", Cell);

new Vue({
  el: "#app",
  render: h => h(App)
});
