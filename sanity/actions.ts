import { groq } from 'next-sanity';
import { readClient } from './lib/client'
import { buildQuery } from './utils';

interface GetResourcesParams { query: string, category: string, country:string, page: string, perPage: string}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, country, page, perPage} = params;

  const newQuery = buildQuery({
    type: 'addon',
    query,
    category,
    country,
    page: parseInt(page),
    perPage: parseInt(perPage),
  })

  try {
    const resources = await readClient.fetch(
      groq`${newQuery.sortedQuery}{title, _id, icao, developer, version, country, date, downloadLink, "image": image.asset->url, slug, category}`
    );
    
    const count = await readClient.fetch(
      groq`count(${newQuery.queryConditions})`)
    return {resources, count};

  } catch (err) {
    console.log(err)
  }
}

export const getMapData = async () => {
  try {
    const mapData = await readClient.fetch(
      groq`*[_type == 'addon' && defined(coordinates)]{ coordinates, title, slug, icao, developer, category, version, downloadLink, "image": image.asset->url}`)
    return mapData;

  } catch (err) {
    console.log(err)
  }
}

export const getAddonDetails = async (slug: string) => {
  try {
    const addonDetails = await readClient.fetch(
      groq`*[_type == 'addon' && slug.current == '${slug}']{ title, _id, icao, date, developer, category, version, description, downloadLink, "image": image.asset->url}`)
    return addonDetails[0];

  } catch (err) {
    console.log(err)
  }
}