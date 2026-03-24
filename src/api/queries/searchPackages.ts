import type { PackageSummary } from '../types/packageSummary.ts';
interface SearchResponse {
  objects: {
    package: PackageSummary;
  }[];
}
export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`,
  );
  const data: SearchResponse = await res.json();
  return data.objects.map(
    ({ package: { name, description, keywords, version } }) => ({
      name,
      description,
      keywords,
      version,
    }),
  );
}
