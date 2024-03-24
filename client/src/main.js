import { createApp } from "vue";

import App from "./App.vue";
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./styles/general.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

library.add(faPaperPlane);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
