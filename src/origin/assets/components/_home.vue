<template>
  <div id="pageHome" v-bind:class="[toggleView ? 'article-content list-view__mockup':'article-content']">
    <div class="section-home" v-show="!showModal">
      <ul class="list-type">
        <li>
          <a href="javascript:void(0)" class="link-type" v-on:click="toggleView = false" v-bind:class="[toggleView ? '':'link-type__on']">
            <span class="icon-mockup"></span>
            Mock up
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" class="link-type" v-on:click="toggleView = true" v-bind:class="[toggleView ? 'link-type__on':'']">
            <span class="icon-imagelist"></span>
            Image List
          </a>
        </li>
      </ul>
      <div id="boxSearch" class="box-search" v-bind:class="{ 'on-focus': isFocus }">
        <span class="icon-search"></span>
        <input type="text" id="searchInp" class="input-search" v-on:focus="isFocus = onFocus()" v-on:blur="isFocus = onBlur()" placeholder="Search Script" v-model="searchItem">
        <button type="button" class="btn-del" v-on:click="searchDel()">삭제</button>
      </div>
      <!-- Framer 영역 -->
      <div class="view-item" data-tool="framer" id="framer">
        <div class="list-item">
          <h3 class="title-sub">Framer Interactions<span class="none-text">목록이 없습니다.</span></h3>
          <div class="item" v-for="(tools, index) in framerItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
            <a href="javascript:void(0)" class="link-thumb" v-on:click="dataTarget(tools)">
              <span class="bg-phone">
                <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + tools.gifImg + ')' }">
                </span>
                <span class="box-photo" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg + ')' }">
                </span>
              </span>
              <span class="box-thumb" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg_s + ')' }"></span>
              <span class="box-detail">VIEW MORE</span>
            </a>
            <span class="text-cate">{{ typeItem[tools.type] }}</span>
            <strong class="title-item">{{ tools.title }}</strong>
            <p class="text-desc">{{ tools.desc }}</p>
            <p class="text-type">{{ tools.used }}</p>
            <a v-bind:href="tools.url" class="link-example" target="_blank">{{ tools.url }}</a>
            <ul class="wrap-tag">
              <li v-for="tags in tools.tag" :key="tags">
                <a href="javascript:void(0)" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#wrapContainer'">{{ tags }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- FramerX 영역 -->
      <div class="view-item" data-tool="framerX" id="framerx">
        <div class="list-item">
          <h3 class="title-sub">FramerX Interactions<span class="none-text">목록이 없습니다.</span></h3>
          <div class="item" v-for="(tools, index) in framerXItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
            <a href="javascript:void(0)" class="link-thumb" v-on:click="dataTarget(tools)">
              <span class="bg-phone">
                <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + tools.gifImg + ')' }">
                </span>
                <span class="box-photo" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg + ')' }">
                </span>
              </span>
              <span class="box-thumb" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg_s + ')' }"></span>
              <span class="box-detail">VIEW MORE</span>
            </a>
            <span class="text-cate">{{ typeItem[tools.type] }}</span>
            <strong class="title-item">{{ tools.title }}</strong>
            <p class="text-desc">{{ tools.desc }}</p>
            <p class="text-type">{{ tools.used }}</p>
            <a v-bind:href="tools.url" class="link-example" target="_blank">{{ tools.url }}</a>
            <ul class="wrap-tag">
              <li v-for="tags in tools.tag" :key="tags">
                <a href="javascript:void(0)" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#wrapContainer'">{{ tags }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Lottie 영역 -->
      <div class="view-item" data-tool="lottie" id="lottie">
        <div class="list-item">
          <h3 class="title-sub">Lottie Interactions<span class="none-text">목록이 없습니다.</span></h3>
          <div class="item" v-for="(tools, index) in lottieItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
            <a href="javascript:void(0)" class="link-thumb" v-on:click="dataTarget(tools)">
              <span class="bg-phone">
                <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + tools.gifImg + ')' }">
                </span>
                <span class="box-photo" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg + ')' }">
                </span>
              </span>
              <span class="box-thumb" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg_s + ')' }"></span>
              <span class="box-detail">VIEW MORE</span>
            </a>
            <span class="text-cate">{{ typeItem[tools.type] }}</span>
            <strong class="title-item">{{ tools.title }}</strong>
            <p class="text-desc">{{ tools.desc }}</p>
            <p class="text-type">{{ tools.used }}</p>
            <a v-bind:href="tools.url" class="link-example" target="_blank">{{ tools.url }}</a>
            <ul class="wrap-tag">
              <li v-for="tags in tools.tag" :key="tags">
                <a href="javascript:void(0)" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#wrapContainer'">{{ tags }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Principle 영역 -->
      <div class="view-item" data-tool="principle" id="principle">
        <div class="list-item">
          <h3 class="title-sub">Principle Interactions<span class="none-text">목록이 없습니다.</span></h3>
          <div class="item" v-for="(tools, index) in principleItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
            <a href="javascript:void(0)" class="link-thumb" v-on:click="dataTarget(tools)">
              <span class="bg-phone">
                <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + tools.gifImg + ')' }">
                </span>
                <span class="box-photo" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg + ')' }">
                </span>
              </span>
              <span class="box-thumb" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg_s + ')' }"></span>
              <span class="box-detail">VIEW MORE</span>
            </a>
            <span class="text-cate">{{ typeItem[tools.type] }}</span>
            <strong class="title-item">{{ tools.title }}</strong>
            <p class="text-desc">{{ tools.desc }}</p>
            <p class="text-type">{{ tools.used }}</p>
            <a v-bind:href="tools.url" class="link-example" target="_blank">{{ tools.url }}</a>
            <ul class="wrap-tag">
              <li v-for="tags in tools.tag" :key="tags">
                <a href="javascript:void(0)" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#wrapContainer'">{{ tags }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- sketch 영역 -->
      <div class="view-item" data-tool="sketch" id="sketch">
        <div class="list-item">
          <h3 class="title-sub">Sketch Interactions<span class="none-text">목록이 없습니다.</span></h3>
          <div class="item" v-for="(tools, index) in sketchItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
            <a href="javascript:void(0)" class="link-thumb" v-on:click="dataTarget(tools)">
              <span class="bg-phone">
                <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + tools.gifImg + ')' }">
                </span>
                <span class="box-photo" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg + ')' }">
                </span>
              </span>
              <span class="box-thumb" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg_s + ')' }"></span>
              <span class="box-detail">VIEW MORE</span>
            </a>
            <span class="text-cate">{{ typeItem[tools.type] }}</span>
            <strong class="title-item">{{ tools.title }}</strong>
            <p class="text-desc">{{ tools.desc }}</p>
            <p class="text-type">{{ tools.used }}</p>
            <a v-bind:href="tools.url" class="link-example" target="_blank">{{ tools.url }}</a>
            <ul class="wrap-tag">
              <li v-for="tags in tools.tag" :key="tags">
                <a href="javascript:void(0)" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#wrapContainer'">{{ tags }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- html 영역 -->
      <div class="view-item" data-tool="html" id="html">
        <div class="list-item">
          <h3 class="title-sub">HTML Interactions<span class="none-text">목록이 없습니다.</span></h3>
          <div class="item" v-for="(tools, index) in htmlItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
            <a href="javascript:void(0)" class="link-thumb" v-on:click="dataTarget(tools)">
              <span class="bg-phone">
                <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + tools.gifImg + ')' }">
                </span>
                <span class="box-photo" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg + ')' }">
                </span>
              </span>
              <span class="box-thumb" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg_s + ')' }"></span>
              <span class="box-detail">VIEW MORE</span>
            </a>
            <span class="text-cate">{{ typeItem[tools.type] }}</span>
            <strong class="title-item">{{ tools.title }}</strong>
            <p class="text-desc">{{ tools.desc }}</p>
            <p class="text-type">{{ tools.used }}</p>
            <a v-bind:href="tools.url" class="link-example" target="_blank">{{ tools.url }}</a>
            <ul class="wrap-tag">
              <li v-for="tags in tools.tag" :key="tags">
                <a href="javascript:void(0)" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#wrapContainer'">{{ tags }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-if="showModal">
      <div class="modal-cont">
        <span class="text-cate">{{ modalType }}</span>
        <div class="title">
          <strong class="title-item">{{ modalTitle }}</strong>
          <ul class="wrap-tag">
            <li v-for="tags in modalTag" :key="tags">
              <span class="link-tag on-tag">{{ tags }}</span>
            </li>
          </ul>
        </div>
        <p class="text-desc">{{ modalDesc }}</p>
        <p class="text-type">{{ modalUsed }}</p>
        <div class="detail-cont">
          <div class="detail-phone">
            <span class="bg-phone">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + modalImg + ')' }"></span>
            </span>
            <a v-bind:href="modalUrl" class="link-example" target="_blank">{{ modalUrl }}</a>
          </div>
          <div class="detail-code" v-html="modalSource"></div>
        </div>
        <a href="javascript:void(0)" class="link-close" v-on:click="modalClose">
          <img src="../images/ic-back@2x.png" alt="닫기">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { BUS } from '../js/eventBus'
  import itemList from '../data/itemList'
    export default {
      data : function(){
        return {
          searchItem:'',
          toggleView:false,
          toggleTag:false,
          typeItem : itemList.typeList,
          framerItem : itemList.item.framer,
          framerXItem : itemList.item.framerX,
          lottieItem : itemList.item.lottie,
          principleItem : itemList.item.principle,
          sketchItem : itemList.item.sketch,
          htmlItem : itemList.item.html,
          isFocus : false,
          text:'',
          showModal: false,
          modalTitle : '',modalDesc : '',modalUsed:'',modalType:'',modalTag:[],modalImg:'',modalSource:'',modalUrl:''
        }
      },
      created(){
        BUS.$on('tagBus', this.receiveTag),
        BUS.$on('cateBus', this.receiveCate)
        BUS.$on('toolsBus', this.receiveTools)
      },
      methods : {
        resetList() {
          this.framerItem=itemList.item.framer,
          this.framerXItem=itemList.item.framerX,
          this.lottieItem=itemList.item.lottie,
          this.principleItem=itemList.item.principle,
          this.sketchItem=itemList.item.sketch,
          this.htmlItem=itemList.item.html,
          this.searchItem='',
          this.isFocus = false
        },
        receiveTools(e){
          return this.showModal = e;
        },
        receiveCate(cate) {
          this.resetList();
          this.showModal = false;
          if(cate == 0){
          } else {
            return this.framerItem = this.framerItem.filter(function(e){return e.type == cate}),
                    this.framerXItem = this.framerXItem.filter(function(e){return e.type == cate}),
                    this.lottieItem = this.lottieItem.filter(function(e){return e.type == cate}),
                    this.principleItem = this.principleItem.filter(function(e){return e.type == cate}),
                    this.sketchItem = this.sketchItem.filter(function(e){return e.type == cate}),
                    this.htmlItem = this.htmlItem.filter(function(e){return e.type == cate})
          }
        },
        receiveTag(tags) {
          return this.searchItem = tags, this.isFocus = true, this.showModal = false
        },
        onBlur : function(){
          let searchBoxInp = document.getElementById('searchInp').value;
          if(searchBoxInp == ""|| searchBoxInp==null) {
            return false
          } else {
            return true
          }
        },
        onFocus :function(){
          return true
        },
        searchTag: function (tagName) {
          return this.searchItem = tagName, this.isFocus = true
        },
        searchDel : function(){
          return this.searchItem = '', this.isFocus = false
        },
        dataTarget : function(e){
          this.modalFunc();
          this.modalTitle = e.title,
          this.modalDesc = e.desc,
          this.modalUsed = e.used,
          this.modalTag = e.tag,
          this.modalType = this.typeItem[e.type];
          this.modalImg = e.gifImg;
          this.modalSource = e.source;
          this.modalUrl = e.url;
        },
        modalFunc : function(){
          window.scrollTo(0,0);
          BUS.$emit('toggleBarBus',true);
          return this.showModal = true;
        },
        modalClose : function(){
          BUS.$emit('toggleBarBus',false);
          this.showModal = false
        }
      }
    }
</script>
