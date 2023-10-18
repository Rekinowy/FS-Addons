import { groq } from 'next-sanity';
import { readClient } from './lib/client'
import { buildQuery } from './utils';

interface GetResourcesParams { query: string, category: string, page: string, order: string}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page, order } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'addon',
        query,
        category,
        page: parseInt(page),
        order,
      })}{title, _id, icao, developer, version, country, date, downloadLink, "image": image.asset->url, slug, category}`
    );

    return resources;

  } catch (err) {
    console.log(err)
  }
}