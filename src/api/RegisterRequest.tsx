interface RegisterData {
    email: string;
    password: string;
    name: string;
    surname: string;
  }
  
  async function registerUser(data: RegisterData) {
    try {
      const response = await fetch('http://localhost:5173/Account/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const result: { id: string } = await response.json();
        return { success: true, userId: result.id };
      }
      
      if (response.status === 409) {
        const error: { conflictFieldName: string } = await response.json();
        return { 
          success: false, 
          error: `Conflict: ${error.conflictFieldName} already exists` 
        };
      }
  
      return { success: false, error: 'Registration failed' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  }
  
  const registrationResult = await registerUser({
    email: 'user@example.com',
    password: 'securePassword123',
    name: 'John',
    surname: 'Doe'
  });