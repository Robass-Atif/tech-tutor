export async function signup(email: string, password: string) {
    // Implement your signup logic here
    // This can be an API call to your backend or directly to your authentication provider
  
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Signup failed');
    }
  
    return response.json();
  }
  