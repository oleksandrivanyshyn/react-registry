import { useLoaderData } from 'react-router';
import type { SearchLoaderResult } from './searchLoader.ts';

const SearchPage = () => {
  const data = useLoaderData() as SearchLoaderResult;
  console.log(data);
  return <div>Search Page</div>;
};

export default SearchPage;
