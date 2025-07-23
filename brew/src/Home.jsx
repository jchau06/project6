import './Home.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import List from './components/List.jsx'
import StateBarGraph from './components/StateBarGraph.jsx'
import TypeBarGraph from './components/TypeBarGraph.jsx'

function Home() {

  return (
    <div className="background-wrapper">
      <Header/>
      <div className='card-grid'>
        <Card
          cardAttribute='Total Breweries in the U.S'
          data='8393'
        />
          <Card
            cardAttribute='State with Most Breweries'
            data='California'
          />
        <Card
          cardAttribute='Average Breweries per State'
          data='167'
        />
      </div>
      <div className='info-container'>
        <div className='brewery-list'>
          <List/>
        </div>
        <div className='graph-container'>
          <StateBarGraph/>
          <TypeBarGraph/>
        </div>
      </div>
    </div>
  )
}

export default Home
