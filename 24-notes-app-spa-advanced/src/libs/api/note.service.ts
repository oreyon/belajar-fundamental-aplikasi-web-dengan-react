import customFetch from "./fetch.config";

export interface Note {
	id: string;
	title: string;
	body: string;
	createdAt: string;
	archived: boolean;
  owner: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export const getAccessToken = () => {
  return localStorage.getItem('accessToken') || '';
}

export const putAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
}


export const register = async (request: RegisterRequest) => {
  return await customFetch('/register', {
    method: 'POST',
    body: JSON.stringify({
      name: request.name,
      email: request.email,
      password: request.password
    })
  })
}

interface LoginRequest {
  email: string;
  password: string;
}

export const login = async (request: LoginRequest) => {
  return await customFetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      email: request.email,
      password: request.password
    })
  });
}

export const getUserLogged = async () => {
  return await customFetch('/users/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`
  }
  });
}

interface AddNoteRequest {
  title: string;
  body: string;
}

export const addNote = async (request: AddNoteRequest) => {
  return await customFetch('/notes', {
    method: 'POST',
    body: JSON.stringify({
      title: request.title,
      body: request.body
    }),
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`
    }
  });
}

export const getNotes = async () => {
  return await customFetch(`/notes`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`
    }
  })
}

export const getArchivedNotes = async () => {
  return await customFetch(`/notes/archived`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`
    }
  })
}

export const getSingleNote = async (noteId: string) => {
  return await customFetch(`/notes/${noteId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`
    }
  });
}

export const archiveNote = async (noteId: string) => {
  return await customFetch(`/notes/${noteId}/archive`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`
    }
  });
}

export const unarchiveNote = async (noteId: string) => {
  return await customFetch(`/notes/${noteId}/unarchive`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`
    }
  });
}

export const deleteNote = async (noteId: string) => {
  return await customFetch(`/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    }
  })
}