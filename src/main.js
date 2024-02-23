import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';
import ProjectList from './components/ProjectList'
import ProjectCreate from './components/ProjectCreate'
import ProjectEdit from './components/ProjectEdit'
import ProjectShow from './components/ProjectShow'


  
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: ProjectList 
    },
    { 
      path: '/create', 
      component: ProjectCreate 
    },
    { 
      path: '/edit/:id', 
      component: 
      ProjectEdit 
    },
    { 
      path: '/show/:id', 
      component: ProjectShow 
    },
  ],
});

createApp(App).use(router).mount('#app')
