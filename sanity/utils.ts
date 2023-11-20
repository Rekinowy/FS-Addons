import qs from 'query-string'

interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  country: string;
  page: number;
  perPage: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, country, page, perPage } = params;

  const conditions = [`*[_type == "${type}"`];
  let order = "date desc"

  if (query) {
    conditions.push(`[icao, title, developer] match "*${query}*"`)
    order = "lower(title) asc";
  }

  if (category) {
    conditions.push(`category == "${category}"`);
  }

  if (country) {
    conditions.push(`country == "${country}"`);
  }
  
  // calculate pagination limits
  const offset = (page - 1) * perPage;
  const limit = offset + perPage;

  const queryConditions = conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(' && ')})]`
    : `${conditions[0]}]`;

    // add sorting to the query
    const sortedQuery = `${queryConditions} | order(${order}) [${offset}...${limit}]`;
    return {queryConditions, sortedQuery};
}


interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}

export function formUrlQuery({
  params,
  key,
  value,
  keysToRemove,
}: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  }
  
  if (key && value) {
    currentUrl[key] = value;
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
}