import React, { useState, useEffect } from 'react';
import './List.css';
import getAllBreweries from '../functions/search_all.js';
import { Link } from 'react-router-dom';

function List() {
    const [allBreweries, setAllBreweries] = useState([]);
    const [stateSearch, setStateSearch] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    useEffect(() => {
        const fetchBreweries = async () => {
        try {
        const breweries = await getAllBreweries();
        setAllBreweries(breweries);
        console.log(`Total breweries: ${breweries.length}`);
        // getTop5BreweryTypes();
        } catch (error) {
        console.error('Error fetching breweries:', error);
        }
  };

  fetchBreweries();
}, []);


    // Filter breweries by state and type
    const filteredBreweries = allBreweries
      .filter(brewery =>
        (!stateSearch || brewery.state.toLowerCase().includes(stateSearch.toLowerCase())) &&
        (!typeFilter || brewery.brewery_type === typeFilter)
      )
      .slice(0, 30);

    return (
        <div className='list-container'>
            <div className="search-filter-bar">
                <input
                    type="text"
                    placeholder="Search by State"
                    value={stateSearch}
                    onChange={e => setStateSearch(e.target.value)}
                    className="state-search-input"
                />
                <select
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value)}
                    className="type-dropdown"
                >
                    <option value="">All Types</option>
                    <option value="micro">micro</option>
                    <option value="nano">nano</option>
                    <option value="regional">regional</option>
                    <option value="brewpub">brewpub</option>
                    <option value="large">large</option>
                    <option value="planning">planning</option>
                    <option value="bar">bar</option>
                    <option value="contract">contract</option>
                    <option value="proprietor">proprietor</option>
                    <option value="closed">closed</option>
                </select>
            </div>
            <table className='brewery-list'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBreweries.map((brewery) => (
                        <tr key={brewery.id}>
                            <td>
                                <Link to={`/brewery/${brewery.id}`} className="brewery-link">
                                    {brewery.name}
                                </Link>
                            </td>
                            <td>{brewery.brewery_type}</td>
                            <td>{brewery.city}</td>
                            <td>{brewery.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;