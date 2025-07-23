async function getTop5BreweryTypes() {
  const perPage = 50;
  let page = 1;
  let breweries = [];
  let moreData = true;

  // Fetch all breweries using pagination
  while (moreData) {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?per_page=${perPage}&page=${page}`);
    const data = await response.json();

    if (data.length === 0) {
      moreData = false;
    } else {
      breweries = breweries.concat(data);
      page++;
    }
  }

  // Count breweries by type
  const typeCounts = {};
  breweries.forEach(brewery => {
    const type = brewery.brewery_type;
    if (type) {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    }
  });

  // Convert to array and sort by count
  const sortedTypes = Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Display result
  sortedTypes.forEach(([type, count], index) => {
    console.log(`#${index + 1}: ${type} - ${count} breweries`);
  });

  return sortedTypes;
}

getTop5BreweryTypes();
