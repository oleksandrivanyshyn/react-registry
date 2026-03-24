import { searchPackages } from '../../api/queries/searchPackages.ts';

export async function searchLoader({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');
  if (!term) throw new Error('Search term is required');
  const results = await searchPackages(term);
  return {
    searchResults: results,
  };
}
