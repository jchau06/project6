async function getAllBreweries() {
  let breweries = [];
  let page = 1;
  const perPage = 200; // Max allowed by the API

  while (true) {
    const response = await fetch(
      `https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=${perPage}`
    );
    const data = await response.json();

    if (data.length === 0) break; // Stop if no more breweries

    breweries.push(...data);
    page++;
  }

  return breweries;
}

export default getAllBreweries;