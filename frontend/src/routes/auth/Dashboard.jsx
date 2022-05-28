import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import TitleContext from '../../context/TitleContext';
import './styles/Dashboard.css';

export function Dashboard() {
  const { title, setTitle } = useContext(TitleContext);

  return (
    <div className='dashboard'>
      <aside className='aside'>
        <ul className='nav'>
          <li className='nav-item'>
            <Link 
              to='add'
              onClick={() => setTitle(`It's time to add a new product`)}
            >
              Add product
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='list'
              onClick={() => setTitle(`These are your products`)}
            >
              List products
            </Link>
          </li>
        </ul>
      </aside>
      <main className='main'>
        <h1 className='title'>{title}</h1>
        <Outlet />
      </main>
    </div>
  )
}
