import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export function Mumbai({ mumbaicity, setMumbaicity }) {
    const [visible, setvisible] = useState(3)
    const loadmore = () => {
        setvisible((prevcount) => prevcount + 3)
    }
    return (
        <div>
            <div className="london-container">

                {mumbaicity.slice(0, visible).map((city, index) => <MumbaiCard city={city} key={index} />)}
            </div>
            <div className="center-button">
                <span className="loadmore" onClick={loadmore}>loadmore</span>

            </div>
        </div>
    )
}

function MumbaiCard({ city }) {
    const navigate = useNavigate()
    return (
        <div className="city-container" onClick={() => navigate(`/mumbai/${city.id}`)}>
            <div className="city-card">
                <img src={city.image} />
                <div className="location-details">
                    <p><i class="bi bi-geo-alt"></i>{city.location} </p>
                    <b>{city.address}</b>
                    <div className="icons">
                        <div className="icon-col border-left">
                            <i class="bi bi-building-fill"></i><span>{city.rooms}  Rooms</span>
                        </div>
                        <div className="icon-col border-left">
                            <span>{city.bed} Beds</span>            </div>
                        <div className="icon-col border-left">
                            <span>{city.bath} Bath</span>
                        </div>
                        <div className="icon-col">
                            <i class="bi bi-arrows-move"></i> <span>{city.sft} sft</span>
                        </div>

                    </div>
                    <div className="price">
                        <span><mark>${city.price} </mark>/month</span>
                        <span className="readmore">Read More</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export function MumbaiCardList({ mumbaicity }) {
    const { id } = useParams()  //link id
    const cities = mumbaicity[id - 1] //array[index]
    return (
        <div className="city-container center">
            <div className="city-card">
                <img src={cities.image} />
                <div className="location-details">
                    <p><i class="bi bi-geo-alt"></i>{cities.location} </p>
                    <b>{cities.address}</b>
                    <div className="icons">
                        <div className="icon-col border-left">
                            <i class="bi bi-building-fill"></i><span>{cities.rooms}  Rooms</span>
                        </div>
                        <div className="icon-col border-left">
                            <span>{cities.bed} Beds</span>            </div>
                        <div className="icon-col border-left">
                            <span>{cities.bath} Bath</span>
                        </div>
                        <div className="icon-col">
                            <i class="bi bi-arrows-move"></i> <span>{cities.sft} sft</span>
                        </div>

                    </div>
                    <div className="price">
                        <span><mark>${cities.price} </mark>/month</span>
                        <span className="readmore">Read More</span>
                    </div>
                </div>
            </div>
        </div >
    )
}