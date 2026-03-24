import type { PackageDetails } from '../types/packageDetails.ts';
export async function getPackage(name: string): Promise<PackageDetails> {
  const res = await fetch(`https://registry.npmjs.org/${name}`);
  return res.json();
}
