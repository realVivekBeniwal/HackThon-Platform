// frontend/src/services/api.js
const API_URL = 'http://localhost:5000/api';

// Helper function to get auth token
const getToken = () => localStorage.getItem('token');

// Generic fetch function with auth header
async function fetchWithAuth(endpoint, options = {}) {
  const token = getToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };
  
  const config = {
    ...options,
    headers,
  };
  
  const response = await fetch(`${API_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  
  return response.json();
}

// API functions
export const api = {
  // Auth endpoints
  auth: {
    login: (credentials) => fetchWithAuth('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
    register: (userData) => fetchWithAuth('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  },
  
  // Hackathon endpoints
  hackathons: {
    getAll: () => fetchWithAuth('/hackathons'),
    getById: (id) => fetchWithAuth(`/hackathons/${id}`),
    create: (hackathonData) => fetchWithAuth('/hackathons', {
      method: 'POST',
      body: JSON.stringify(hackathonData),
    }),
    update: (id, hackathonData) => fetchWithAuth(`/hackathons/${id}`, {
      method: 'PUT',
      body: JSON.stringify(hackathonData),
    }),
    delete: (id) => fetchWithAuth(`/hackathons/${id}`, {
      method: 'DELETE',
    }),
    register: (hackathonId, participantId) => fetchWithAuth(`/hackathons/${hackathonId}/register`, {
      method: 'POST',
      body: JSON.stringify({ participantId }),
    }),
    getSubmissions: (hackathonId) => fetchWithAuth(`/hackathons/${hackathonId}/submissions`),
  },
  
  // Submission endpoints
  submissions: {
    getAll: () => fetchWithAuth('/submissions'),
    getById: (id) => fetchWithAuth(`/submissions/${id}`),
    create: (submissionData) => fetchWithAuth('/submissions', {
      method: 'POST',
      body: JSON.stringify(submissionData),
    }),
    update: (id, submissionData) => fetchWithAuth(`/submissions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(submissionData),
    }),
    delete: (id) => fetchWithAuth(`/submissions/${id}`, {
      method: 'DELETE',
    }),
    rate: (id, ratingData) => fetchWithAuth(`/submissions/${id}/rate`, {
      method: 'POST',
      body: JSON.stringify(ratingData),
    }),
  },
  
  // User endpoints
  users: {
    getAll: () => fetchWithAuth('/users'),
    getById: (id) => fetchWithAuth(`/users/${id}`),
    getParticipants: () => fetchWithAuth('/users/role/participants'),
    getUserSubmissions: (userId) => fetchWithAuth(`/users/${userId}/submissions`),
    markInterested: (participantId, recruiterId) => fetchWithAuth(`/users/${participantId}/interest`, {
      method: 'POST',
      body: JSON.stringify({ recruiterId }),
    }),
  },
};