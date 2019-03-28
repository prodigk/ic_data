<template>
  <div id="pageAbout" class="article-content">
    <div class="section-about">
      <h3 class="title-sub">Interaction Catalog</h3>
      <p class="desc-sub">페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 화면을 테스트 할 수 있음</p>
      <!-- item start -->
      <div class="box-about" v-for="(about, index) in aboutItem" :key="index">
        <img :src="about.imgUrl" width="842px" height="367px" alt="">
        <em class="about-caption">{{ about.desc }}</em>
        <p class="text-about">{{ about.text }}</p>
      </div>
    </div>
    <div class="section-copyright">
      <small>COPYRIGHT © SK PLANET CO. LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </div>
</template>

<script>
    import about from '../data/about'
    export default {
      data: function () {
        return {
          aboutItem : about.item
        }
      }
    }
</script>
