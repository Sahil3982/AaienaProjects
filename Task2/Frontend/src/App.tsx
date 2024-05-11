/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle signup
  const handleSignup = () => {
    if (username && password) {
      // Send signup request to the backend (mocked here)
      fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('User created successfully!');
        } else {
          alert('Failed to create user. Please try again.');
        }
      });
    } else {
      alert('Please enter username and password');
    }
  };

  // Function to handle login
  const handleLogin = () => {
    if (username && password) {
      // Send login request to the backend (mocked here)
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setLoggedInUser(username);
          alert('Login successful!');
        } else {
          setErrorMessage('Invalid username or password');
        }
      });
    } else {
      alert('Please enter username and password');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedInUser('');
  };

  // Function to handle delete user
  const handleDeleteUser = () => {
    // Send delete request to the backend (mocked here)
    fetch('/api/deleteUser', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('User deleted successfully!');
      } else {
        alert('Failed to delete user. Please try again.');
      }
    });
  };

  // Function to handle update password
  const handleUpdatePassword = () => {
    if (username && newPassword) {
      // Send update password request to the backend (mocked here)
      fetch('/api/updatePassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, newPassword }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Password updated successfully!');
        } else {
          alert('Failed to update password. Please try again.');
        }
      });
    } else {
      alert('Please enter username and new password');
    }
  };

  return (
    <div>
      <h1>Login and Signup</h1>
      <div>
        <h2>Signup</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      {loggedInUser && (
        <div>
          <h2>Logout</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <div>
        <h2>Delete User</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <button onClick={handleDeleteUser}>Delete User</button>
      </div>
      <div>
        <h2>Update Password</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
        <button onClick={handleUpdatePassword}>Update Password</button>
      </div>
    </div>
  );
}

export default App;
