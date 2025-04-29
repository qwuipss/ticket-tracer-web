async function logoutUser() {
    try {
      const token = localStorage.getItem('authToken');
      
      const response = await fetch('http://localhost:5173/Account/Logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.ok) {
        localStorage.removeItem('authToken');
        return { success: true };
      }
      
      if (response.status === 401) {
        return { success: false, error: 'Unauthorized' };
      }
  
      return { success: false, error: 'Logout failed' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  }
  
  const logoutResult = await logoutUser();