import { useLoaderData } from 'react-router';

const SearchPage = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Search Page</div>;
};

export default SearchPage;
