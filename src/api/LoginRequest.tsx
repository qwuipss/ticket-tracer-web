interface LoginData {
    email: string;
    password: string;
  }
  
  async function loginUser(data: LoginData) {
    try {
      const response = await fetch('http://localhost:5173/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const result: { id: string } = await response.json();
        localStorage.setItem('authToken', result.id);
        return { success: true, token: result.id };
      }
      
      if (response.status === 401) {
        return { success: false, error: 'Invalid credentials' };
      }
  
      return { success: false, error: 'Login failed' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  }
  
  const loginResult = await loginUser({
    email: 'user@example.com',
    password: 'securePassword123'
  });