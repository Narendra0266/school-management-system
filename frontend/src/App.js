import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchSchools();
    }
  }, []);

  const fetchSchools = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/schools');
      setSchools(response.data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setIsLoggedIn(true);
      fetchSchools();
    } catch (error) {
      alert('Login failed: ' + error.response?.data?.error || error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1>Modern Group of Education</h1>
          <h2>School Management System</h2>
          <form onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p>Demo: director@modern.edu / password</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="navbar-content">
          <h1>🎓 School Management System</h1>
          <div className="user-info">
            <span>Welcome, {user?.name || user?.email}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="schools-section">
          <h2>Our Schools & Colleges</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="schools-grid">
              {schools.map(school => (
                <div key={school.id} className="school-card">
                  <h3>{school.name}</h3>
                  <p><strong>Principal:</strong> {school.principal}</p>
                  <p><strong>Medium:</strong> {school.medium}</p>
                  <p><strong>Students:</strong> {school.students}</p>
                  <p><strong>Staff:</strong> {school.staff}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="modules-section">
          <h2>Management Modules</h2>
          <div className="modules-grid">
            <div className="module-card">
              <h3>💰 Fees Management</h3>
              <p>Manage school fees, payments, and billing</p>
            </div>
            <div className="module-card">
              <h3>👨‍🏫 Staff Management</h3>
              <p>Teachers, salary, and attendance tracking</p>
            </div>
            <div className="module-card">
              <h3>🚌 Transport</h3>
              <p>Bus routes, drivers, and tracking</p>
            </div>
            <div className="module-card">
              <h3>🏠 Hostel</h3>
              <p>Room allocation and hostel billing</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
