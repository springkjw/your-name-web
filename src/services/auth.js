import { useState } from 'react';

import api from './api';

export function useLogin() {
  const [loading, setLoading] = useState(false);

  async function mutate({ fcmToken, idProvider, idProviderUserId }) {
    const { data: { accessToken } } = await api.post('auth/login');
  }

  return { loading, mutate };
}
