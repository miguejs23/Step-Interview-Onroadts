import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/authContext';
import TitleContext from '../context/TitleContext';
import './styles/Header.css';


export function Header({ mode } = { mode: 'notAuth'}) {
  const { setAuth, userId } = useContext(Context);
  const { setTitle } = useContext(TitleContext);

  function handleLogOut() {
    setAuth(null);
    window.localStorage.removeItem('auth');
  }

  return (
    <div className='ctn-header'>
      <header className='header'>
        <h1 className='logo'>
          {
            mode === 'auth' ? 
              (<>ManagmentProduct</>)
              :
              (<>SaveProducts</>)
          }
        </h1>
        <ul className='nav'>
          {
            mode === 'notAuth' ? (
              <>
                <li className='nav-item'>
                  <Link to='/sign-in'>Sing in</Link>
                </li>
                <li className='nav-item ctn_sign-up'>
                  <Link to='/sign-up'>Sign up</Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link
                    onClick={() => setTitle('These are your products')}
                    to={`dashboard/${userId}/list`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    onClick={handleLogOut}
                    to='/'
                  >
                    Log Out
                  </Link>
                </li>
                <li className='nav-item ctn_sign-up'>
                  <Link to='/profile'>Profile</Link>
                </li>
              </>
            )
          }
        </ul>
      </header>
    </div>
  )
}
