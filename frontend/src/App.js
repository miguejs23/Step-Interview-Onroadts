import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
// Routes
import { Signin } from './routes/notAuth/Signin';
import { Signup } from './routes/notAuth/Signup';
import { Profile } from './routes/auth/Profile';
import { Dashboard } from './routes/auth/Dashboard';
// Components
import { Header } from './components/Header';
import { ListProducts } from './components/ListProducts';
import { AddProduct } from './components/AddProduct';
// Context
import { TitleContextProvider } from './context/TitleContext';
import Context from './context/authContext';
// Styles
import './App.css';


function App() {
  const { auth, userId } = useContext(Context);

  return (
    <div className='App'>
      {auth && userId ? (
        <>
          <TitleContextProvider>
            <Header mode='auth'/>
            <Routes>
              <Route path='/dashboard/:userId' element={<Dashboard />}>
                <Route path='list' element={<ListProducts />}/>
                <Route path='add' element={<AddProduct />}/>
              </Route>
              <Route path='/profile' element={<Profile />} />
              <Route path='/' element={<Navigate to={`/dashboard/${userId}`} />}/>
            </Routes>
          </TitleContextProvider>
        </>
      ) : (
        <>
          <Header mode='notAuth'/>
          <Routes >
            <Route path='/' element={<Signin />} />
            <Route path='/sign-in' element={<Signin />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='*' element={<Navigate to='/sign-in' />} />
          </Routes>

        </>
      )}
    </div>
  )
}

export default App;
