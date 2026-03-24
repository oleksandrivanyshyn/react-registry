import type { Params } from 'react-router';
import { getPackage } from '../../api/queries/getPackage.ts';
import type { PackageDetails } from '../../api/types/packageDetails.ts';
interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}
export async function detailsLoader({
  params,
}: LoaderArgs): Promise<DetailsLoaderResult> {
  const { name } = params;
  if (!name) throw new Error('Package name is required');
  const details = await getPackage(name);
  return {
    details,
  };
}
