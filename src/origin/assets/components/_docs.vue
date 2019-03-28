<template>
  <div id="pageDocs" class="article-content">
    <div class="section-update">
      <h3 class="title-sub">Documentation</h3>
      <p class="desc-sub">페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 페이지 스크롤시 배경 이미지의 사이즈 애니메이션을 통한 연결성있는 화면을 테스트 할 수 있음</p>
      <ul class="list-docs">
        <li v-for="(docs, index) in docsItem" :key="index">
          <strong class="title-docs">{{ docs.title }}</strong>
          <p class="text-docs"v-html="docs.text"></p>
        </li>
      </ul>
    </div>
    <div class="section-copyright">
      <small>COPYRIGHT © SK PLANET CO. LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </div>
</template>

<script>
    import docs from '../data/docs'
    export default {
      data: function () {
        return {
          docsItem : docs.item
        }
      }
    }
</script>
