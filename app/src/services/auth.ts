export interface LoginPayload {
  username: string
  password: string
}

export interface LoginResult {
  token: string
  user: {
    id: string
    name: string
  }
}

export async function login(payload: LoginPayload): Promise<LoginResult> {
  // Mocked login to keep the project runnable without a backend
  await new Promise((r) => setTimeout(r, 600))
  if (!payload.username || !payload.password) {
    throw new Error('请输入用户名和密码')
  }
  return {
    token: 'mock-token-123',
    user: {
      id: 'u_' + Math.random().toString(36).slice(2, 8),
      name: payload.username,
    },
  }
}