import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import './BreweryDetails.css';

function BreweryDetails() {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      .then(res => res.json())
      .then(setBrewery)
      .catch(console.error);
  }, [id]);

  if (!brewery) return <p>Loading brewery...</p>;

  return (
    <div className="background-wrapper">
        <Header />
        <div className="brewery-details">
          <h2>{brewery.name}</h2>
          <p><strong>Type:</strong> {brewery.brewery_type}</p>
          <p><strong>State:</strong> {brewery.state}</p>
          <p><strong>City:</strong> {brewery.city}</p>
          <p><strong>Phone:</strong> {brewery.phone || 'N/A'}</p>
          <p><strong>Website:</strong> <a href={brewery.website_url}>{brewery.website_url}</a></p>
        </div>
    </div>
  );
}

export default BreweryDetails;
