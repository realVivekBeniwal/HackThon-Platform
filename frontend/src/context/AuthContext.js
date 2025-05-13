import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const HARDCODED_USERS = {
  participant: { password: '1234', role: 'participant' },
  judge: { password: '1234', role: 'judge' },
  organizer: { password: '1234', role: 'organizer' },
  recruiter: { password: '1234', role: 'recruiter' },
};

export const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white/60 dark:bg-gray-900/60 z-50">
    <div className="glassmorphism p-8 rounded-2xl flex flex-col items-center shadow-2xl">
      <svg className="animate-spin h-10 w-10 text-primary-600 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      <span className="text-primary-700 font-semibold text-lg">Loading...</span>
    </div>
  </div>
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setTimeout(() => setLoading(false), 800); // Simulate loading
  }, []);

  const login = async (username, password) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const userData = HARDCODED_USERS[username];
      if (userData && userData.password === password) {
        const user = { username, role: userData.role };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true };
      }
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (username, password, role) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (HARDCODED_USERS[username]) {
        return { success: false, error: 'Username already exists' };
      }
      
      const user = { username, role };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
}; 