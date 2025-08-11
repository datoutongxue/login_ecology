import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { login as loginApi, type LoginPayload, type LoginResult } from '@/services/auth'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const user = ref<LoginResult['user'] | null>(null)

  const isAuthenticated = computed(() => Boolean(token.value))

  async function login(payload: LoginPayload) {
    const result = await loginApi(payload)
    token.value = result.token
    user.value = result.user
  }

  function logout() {
    token.value = null
    user.value = null
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout,
  }
})