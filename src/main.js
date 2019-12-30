import Vue from "vue";
import App from "./App.vue";
import "./common/stylus/index.styl";
Vue.config.productionTip = false;

function handlerResize() {
  debugger;
  const element = document.body;
  const { offsetHeight, offsetWidth } = document.documentElement;
  const scaleW = offsetWidth / 1920;
  const scaleH = offsetHeight / 1080;
  console.log(offsetHeight, offsetHeight);
  element.style.transform = `scale(${scaleW}, ${scaleH})`;
}

new Vue({
  render: h => h(App),
  mounted() {
    setTimeout(() => {
      handlerResize();
      window.addEventListener("resize", handlerResize);
    }, 20);
  },
  beforeDestroy() {
    window.removeEventListener("resize", handlerResize);
  }
}).$mount("#app");
