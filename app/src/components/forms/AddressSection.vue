<script setup lang="ts">
const model = defineModel<{
  province: string
  city: string
  address: string
}>({ default: { province: '', city: '', address: '' } })
</script>

<template>
  <van-cell-group inset>
    <van-field v-model="model.province" label="省份" placeholder="请输入省份" />
    <van-field v-model="model.city" label="城市" placeholder="请输入城市" />
    <van-field v-model="model.address" label="详细地址" placeholder="街道、门牌号" />
  </van-cell-group>
</template>