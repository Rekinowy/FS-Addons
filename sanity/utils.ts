import qs from 'query-string'

interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  page: number;
  perPage?: number;
  order: string;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 10, order } = params;

  const conditions = [`*[_type=="${type}"`];

  if (query) {
    conditions.push(`title match "*${query}*"`);
  }

  if (category && category !== 'all') {
    conditions.push(`category == "${category}"`);
  }

  // calculate pagination limits
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const queryConditions = conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(' && ')})]`
    : `${conditions[0]}]`;

  // add sorting to the query
  const sortedQuery = `${queryConditions} | order(${order}) [${offset}...${limit}]`;

  return sortedQuery;
}