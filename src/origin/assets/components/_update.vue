<template>
  <div id="pageUpdate" class="article-content">
    <div class="section-update">
      <h3 class="title-sub">Update</h3>
      <p class="desc-sub">페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 화면을 테스트 할 수 있음</p>
      <ul class="list-update">
        <li v-for="(update, index) in updateItem" :key="index">
          <div class="head-list">
            <span class="icon-new" v-if="update.newIcon">NEW</span>
            <span class="tools-icon" v-bind:class="update.type"></span>
          </div>
          <div class="body-list">
            <strong class="title-update">{{ update.text }}</strong>
          </div>
          <div class="foot-list">{{ update.date }}</div>
        </li>
      </ul>
    </div>
    <div class="section-copyright">
      <small>COPYRIGHT © SK PLANET CO. LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </div>
</template>

<script>
  import update from '../data/update'
  export default {
    data: function () {
      return {
        updateItem : update.item
      }
    }
  }
</script>
