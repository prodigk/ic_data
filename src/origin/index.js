// typescripts
require('./assets/js/ui.js');

// styles
require('./assets/styles/catalog.scss');


import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
const VueScrollTo = require('vue-scrollto')

Vue.use(VueRouter);
Vue.use(VueScrollTo);
const router = new VueRouter({
  routes : Routes
})


new Vue({
  el: '#app',
  render: h => h(App),
  router : router
});
Vue.component('modal', {
  template: '#modal-template'
})

//텝메뉴 이벤트
let tabItem = document.querySelectorAll('.list-tab>li .link-tab');
let targetBar = document.getElementById('tabBar');
function pageSet(){
  let currentPage = window.location.hash.substr(1);
  let tabArr = new Array()
  for (let i = 0; i < tabItem.length; i++){
    tabArr.push({name: tabItem[i].dataset.page,position:tabItem[i].dataset.position,width:tabItem[i].dataset.width})
  };
  for (let i = 0; i < tabArr.length; i++){
    if(currentPage == tabArr[i].name){
      targetBar.style.left = tabArr[i].position + 'px';
      targetBar.style.width = tabArr[i].width + 'px';
    }
  }
}pageSet()
for (let i = 0; i < tabItem.length; i++){
  tabItem[i].addEventListener("click",function (e) {
    pageSet();
  })
}

let homeIndex = document.querySelectorAll('.section-sidebar .link-nav,.section-sidebar .link-tag');
for (let i = 0; i < homeIndex.length; i++){
  homeIndex[i].addEventListener("click",function (e) {
    targetBar.style.left = '59px';
    targetBar.style.width ='51px';
  })
}




//사이드 메뉴
let navGroup = document.querySelectorAll('.nav-wrap .link-nav')
for (let i = 0; i < navGroup.length; i++){
  navGroup[i].addEventListener("click",function (e) {
    for (let j = 0; j < navGroup.length; j++){
      navGroup[j].parentNode.classList.remove('on');
    }
    this.parentNode.classList.add('on')
  })
}

let sideBar = document.getElementById('wrapContainer');
sideBarFunc();
window.addEventListener('resize',sideBarFunc);
function sideBarFunc(){
  let documentWidth = window.innerWidth;
  if(documentWidth < 1200 ) {
    sideBar.classList.add('side__close')
  } else {
    sideBar.classList.remove( 'side__close' );
  };
}
