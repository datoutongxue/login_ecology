<script setup lang="ts">
const model = defineModel<{
  realName: string
  mobile: string
}>({ default: { realName: '', mobile: '' } })
</script>

<template>
  <van-cell-group inset>
    <van-field v-model="model.realName" label="姓名" placeholder="请输入姓名" />
    <van-field v-model="model.mobile" label="手机号" type="tel" placeholder="请输入手机号" />
  </van-cell-group>
</template>