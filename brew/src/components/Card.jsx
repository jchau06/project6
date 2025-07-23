import './Card.css'

function Card({cardAttribute, data}) {
    return (
        <div className='card'>
            <h2 className='card-data'>{data}</h2>
            <h4 className='card-title'>{cardAttribute}</h4>
        </div>
    )
}

export default Card;