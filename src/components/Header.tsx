import { Link } from 'react-router';
import SearchInput from './SearchInput.tsx';

const Header = () => {
  return (
    <div>
      <Link to="/">NPM Registry</Link>
      <SearchInput />
    </div>
  );
};

export default Header;
