import Header from '../components/Header.tsx';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
