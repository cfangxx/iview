<template>
  <Poptip
    confirm
    placement="top-end"
    title="确认删除？"
    @on-ok="$emit('ok')"
    ok-text="确认"
    cancel-text="取消"
  >
    <Button>删除</Button>
  </Poptip>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Delete extends Vue {}
</script>
