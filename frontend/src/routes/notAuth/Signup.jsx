import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Context from '../../context/authContext';
import UserContext from '../../context/userContext';

export function Signup() {
  const { username, setUsername, password, setPassword } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const { setAuth, userId, setUserId } = useContext(Context);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    window.localStorage.setItem('username', username);
    fetch("http://localhost:3001/auth/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          setAuth(true);
          setUserId(res.data?.id);
          window.localStorage.setItem('auth', 'session');
          window.localStorage.setItem('userId', res.data.id);
          navigate(`/dashboard/${userId}`);
        } else {
          navigate('/sign-up');
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='form-title'>Sign Up</h3>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className='input'
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className='input'
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className='input'
        />
        <button className='form-btn input'>Submit</button>
      </form>
    </>
  )
}
