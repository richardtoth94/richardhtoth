import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLinkedin, faTwitter, faGithub);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
