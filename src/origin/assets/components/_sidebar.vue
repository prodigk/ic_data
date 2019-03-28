<template>
  <div class="section-sidebar">
    <h1 class="title-logo">
      <img src="../images/logo@2x.png" width="150" height="40" class="logo-img" alt="INTERACTION CATALOG">
    </h1>
    <button type="button" class="btn-fold" v-on:click="selSidebar(toggleBar = !toggleBar)"><span class="icon-fold">메뉴 접기</span></button>
    <div class="box-nav">
      <h2 class="title-navigation">네비게이터</h2>
      <ul class="nav-wrap">
        <li class="on">
          <div class="link-nav" v-on:click="selCate(filterCate(0))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-all"></span>
              <strong class="title-cate">All</strong>
              <span class="count-cate">({{ filteredCount(0).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(1))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-states"></span>
              <strong class="title-cate">States</strong>
              <span class="count-cate">({{ filteredCount(1).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(2))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-scroll"></span>
              <strong class="title-cate">Scroll</strong>
              <span class="count-cate">({{ filteredCount(2).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(3))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-splash"></span>
              <strong class="title-cate">Splash</strong>
              <span class="count-cate">({{ filteredCount(3).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(4))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-page"></span>
              <strong class="title-cate">Page</strong>
              <span class="count-cate">({{ filteredCount(4).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(5))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-flow"></span>
              <strong class="title-cate">Flow</strong>
              <span class="count-cate">({{ filteredCount(5).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(6))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-banner"></span>
              <strong class="title-cate">Banner</strong>
              <span class="count-cate">({{ filteredCount(6).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(7))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-animation"></span>
              <strong class="title-cate">Animation</strong>
              <span class="count-cate">({{ filteredCount(7).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(8))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-component"></span>
              <strong class="title-cate">UI Component</strong>
              <span class="count-cate">({{ filteredCount(8).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(9))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-navigation"></span>
              <strong class="title-cate">Menu Navigation</strong>
              <span class="count-cate">({{ filteredCount(9).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(10))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-reference"></span>
              <strong class="title-cate">Reference</strong>
              <span class="count-cate">({{ filteredCount(10).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(11))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-etc"></span>
              <strong class="title-cate">ETC</strong>
              <span class="count-cate">({{ filteredCount(11).length }})</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="box-tools">
      <h2 class="title-nav">tools</h2>
      <ul class="nav-tools">
        <li v-on:click="selTools"  v-scroll-to="'#framer'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon framer"></span>
            <strong class="title-cate">Framer</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#framerx'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon framerx"></span>
            <strong class="title-cate">Framer X</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#lottie'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon lottie"></span>
            <strong class="title-cate">Lottie</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#principle'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon principle"></span>
            <strong class="title-cate">Principle</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#sketch'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon sketch"></span>
            <strong class="title-cate">Sketch</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#html'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon HTML"></span>
            <strong class="title-cate">HTML</strong>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="box-tag">
      <h2 class="title-tag">script Tag</h2>
      <ul class="nav-tag">
        <li v-for="tags in filteredTags()" :key="tags">
          <div v-on:click="selTags(tags)" v-scroll-to="'#wrapContainer'"><router-link to="/home" class="link-tag">{{ tags }}</router-link></div>
        </li>
      </ul>
    </div>
    <div class="service-copyright">
      <img src="../images/sk-planet-logo@2x.png" width="72" height="34" alt="">
      <small>COPYRIGHT © SK PLANET CO.<br> LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </div>
</template>

<script>
  import { BUS } from '../js/eventBus'
  import itemList from '../data/itemList'
    export default {
      name: "side-bar",
      data : function(){
        return {
          toggleBar: false,
          typeItem : itemList.typeList,
          toolItem : itemList.item,
          framerItem : itemList.item.framer,
          framerXItem : itemList.item.framerX,
          lottieItem : itemList.item.lottie,
          principleItem : itemList.item.principle,
          sketchItem : itemList.item.sketch,
          htmlItem : itemList.item.html,
        }
      },
      methods: {
        selTools : function(){
          BUS.$emit('toolsBus',false)
        },
        receivetoggleBarBus : function(e){
          return this.toggleBar = e;
        },
        selCate : function(cate){
          BUS.$emit('cateBus',cate)
        },
        selTags: function(tags){
          BUS.$emit('tagBus',tags);
        },
        selSidebar: function(e){
          BUS.$emit('sidebarBus',e);
        },
        filterCate : function(cate){
          return cate
        },
        filteredCount: function(e) {
          let allItem = this.framerItem.concat(this.framerXItem,this.lottieItem,this.principleItem,this.sketchItem,this.htmlItem)
          if(e == 0){
            return allItem
          } else if (e == 1) {
            return allItem.filter(function(i){return i.type == 1})
          } else if (e == 2) {
            return allItem.filter(function(i){return i.type == 2})
          } else if (e == 3) {
            return allItem.filter(function(i){return i.type == 3})
          } else if (e == 4) {
            return allItem.filter(function(i){return i.type == 4})
          } else if (e == 5) {
            return allItem.filter(function(i){return i.type == 5})
          } else if (e == 6) {
            return allItem.filter(function(i){return i.type == 6})
          } else if (e == 7) {
            return allItem.filter(function(i){return i.type == 7})
          } else if (e == 8) {
            return allItem.filter(function(i){return i.type == 8})
          } else if (e == 9) {
            return allItem.filter(function(i){return i.type == 9})
          } else if (e == 10) {
            return allItem.filter(function(i){return i.type == 10})
          } else if (e == 11) {
            return allItem.filter(function(i){return i.type == 11})
          }
        },
        filteredTags : function() {
          let allItem = this.framerItem.concat(this.framerXItem,this.lottieItem,this.principleItem,this.sketchItem,this.htmlItem)
          let key = 'tag';
          let tagArray = new Array();
          for(let i =0;i<allItem.length;i++){
            let allTags = Object.assign({},allItem[i][key])
            for (let key of Object.values(allTags)) {
              tagArray.push(key)
            }
          }
          let tagList = tagArray.filter((item,idx,array) => {
            return array.indexOf(item) == idx;
          });
          return tagList
        }
      }
    }
</script>
