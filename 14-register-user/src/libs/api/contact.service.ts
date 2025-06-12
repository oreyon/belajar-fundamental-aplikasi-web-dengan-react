    const BASE_URL = 'https://contact-api.dicoding.dev/v1';
     
    function getAccessToken() {
      return localStorage.getItem('accessToken')
    }
     
    function putAccessToken(accessToken:string) {
      return localStorage.setItem('accessToken', accessToken);
    }
     
    async function fetchWithToken(url: RequestInfo | URL, options: RequestInit = {}) {
      return fetch(url, {
        ...options,
        headers: {
          ...(options.headers as Record<string, string>),
          Authorization: `Bearer ${getAccessToken()}`
        }
      });
    }
     
    async function login(email:string, password:string) {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });
     
      const responseJson = await response.json();
     
      if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null };
      }
     
      return { error: false, data: responseJson.data };
    }

    type RegisterRequest = {
      name: string;
      email: string;
      password: string;
    }
     
    async function register(registerRequest: RegisterRequest) {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          name: registerRequest.name, 
          email: registerRequest.email, 
          password: registerRequest.password
        }),
      });
     
      const responseJson = await response.json();
     
      if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
      }
     
      return { error: false };
    }
     
    async function getUserLogged() {
      const response = await fetchWithToken(`${BASE_URL}/users/me`);
      const responseJson = await response.json();
     
      if (responseJson.status !== 'success') {
        return { error: true, data: null };
      }
     
      return { error: false, data: responseJson.data };
    }
     
    async function addContact(name:string, tag:string) {
      const response = await fetchWithToken(`${BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, tag }),
      });
     
      const responseJson = await response.json();
     
      if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
      }
     
      return { error: false };
    }
     
    async function getContacts() {
      const response = await fetchWithToken(`${BASE_URL}/contacts`);
      const responseJson = await response.json();
     
      if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: [] };
      }
     
      return { error: false, data: responseJson.data };
    }
     
    async function deleteContact(id:number) {
      const response = await fetchWithToken(`${BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
      });
     
      const responseJson = await response.json();
     
      if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
      }
     
      return { error: false };
    }
     
    export { 
      getAccessToken,
      putAccessToken,
      login,
      register,
      getUserLogged,
      addContact,
      getContacts,
      deleteContact 
    }