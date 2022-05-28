import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from '../../context/authContext';
import UserContext from '../../context/userContext';

export function Signin() {
  const { setAuth } = useContext(Context);
  const { username, setUsername, password, setPassword } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('username', username || '');
    fetch("http://localhost:3001/auth/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => {
        if (res.status === 200) {
          window.localStorage.setItem('auth', 'session')
          const userId = window.localStorage.getItem('userId');
          setAuth(true);
          navigate(`/dashboard/${userId}`);
        } else {
          navigate('/sign-in');
        }
      })
      .catch((err) =>{
        window.localStorage.removeItem('auth');
        console.error(err);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='form-title'>Sign In</h3>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username || ''}
          className='input'
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ''}
          className='input'
        />
        <button className='form-btn input'>Submit</button>
      </form>
    </>
  )
}
