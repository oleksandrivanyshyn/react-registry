import { useLoaderData } from 'react-router';
import type { DetailsLoaderResult } from './detailsLoader.ts';

const DetailsPage = () => {
  const { details } = useLoaderData() as DetailsLoaderResult;
  return <div>{details.name}</div>;
};

export default DetailsPage;
