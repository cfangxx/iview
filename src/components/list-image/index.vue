<template>
  <img class="c-list-image" :src="src" />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    src: {
      type: String,
      default: ""
    }
  }
})
export default class ListImage extends Vue {}
</script>

<style lang="scss" src="./style.scss"></style>
