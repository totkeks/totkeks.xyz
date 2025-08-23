import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedinIn,
	faStackOverflow,
	faTwitter,
	faXing,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";

library.add(faGithub, faLinkedinIn, faStackOverflow, faTwitter, faXing);

Vue.component("font-awesome-icon", FontAwesomeIcon);
