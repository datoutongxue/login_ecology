<script setup lang="ts">
import { reactive, ref } from 'vue'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

interface LoginForm {
  username: string
  password: string
}

const form = reactive<LoginForm>({ username: '', password: '' })
const loading = ref(false)

const router = useRouter()
const auth = useAuthStore()

async function onSubmit() {
  if (!form.username || !form.password) {
    showToast('请输入用户名和密码')
    return
  }
  loading.value = true
  try {
    await auth.login({ username: form.username, password: form.password })
    showToast('登录成功')
    router.replace({ name: 'form' })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : '登录失败'
    showToast(message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-page">
    <div class="logo">Mobile App</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="form.username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请输入用户名' }]"
          clearable
        />
        <van-field
          v-model="form.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
          clearable
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit" :loading="loading">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
.login-page {
  padding: 24px 16px;
}
.logo {
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  margin: 24px 0 8px;
}
</style>