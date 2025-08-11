<script setup lang="ts">
import { reactive, ref } from 'vue'
import { showToast } from 'vant'
import UserInfoSection from '@/components/forms/UserInfoSection.vue'
import AddressSection from '@/components/forms/AddressSection.vue'

interface FormData {
  userInfo: {
    realName: string
    mobile: string
  }
  address: {
    province: string
    city: string
    address: string
  }
  remarks: string
}

const form = reactive<FormData>({
  userInfo: { realName: '', mobile: '' },
  address: { province: '', city: '', address: '' },
  remarks: '',
})

const submitting = ref(false)

async function onSubmit() {
  submitting.value = true
  try {
    // TODO: replace with real API
    await new Promise((r) => setTimeout(r, 800))
    showToast('提交成功')
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="form-page">
    <UserInfoSection v-model="form.userInfo" />
    <AddressSection v-model="form.address" />
    <van-cell-group inset>
      <van-field v-model="form.remarks" label="备注" type="textarea" placeholder="选填" />
    </van-cell-group>

    <div style="margin: 16px;">
      <van-button block round type="primary" :loading="submitting" @click="onSubmit">
        提交
      </van-button>
    </div>
  </div>
</template>

<style scoped>
.form-page {
  padding: 12px 12px 24px;
}
</style>