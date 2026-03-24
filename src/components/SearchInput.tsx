import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as React from 'react';

const SearchInput = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(term);
    navigate(`/search?term=${term}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          name="term"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchInput;
