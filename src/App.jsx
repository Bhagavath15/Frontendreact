import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { Newyork, NewyorkCardList } from './Newyork';
import { Mumbai, MumbaiCardList } from './Mumbai';
import { Pune, PuneCardList } from './Pune';

export default function App() {
  const [city, setCity] = useState(
    [
      {
        "id": "1",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484049253.jpg?k=562ec335058865cca7ffab567ec0f09814217e38278a99e0d5dfec1dd1d2d0a8&o=&hp=1",
        "location": "8558 Pecan st",
        "address": "RCE Theatres - 907 S Beckford Dr,Henderson, Nc 27536",
        "rooms": "3",
        "bed": "1",
        "bath": "1",
        "sft": "732",
        "price": "7,256"
      },
      {
        "id": "2",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/130774650.jpg?k=32c21c86a35e378fb22fc61e3ffa996308c82b6600d6f245146429209b47a6b7&o=&hp=1",
        "location": "Lancaster Terrace,",
        "address": "Royal Lancaster London, Westminster Borough, London, W2 2TY",
        "rooms": "3",
        "bed": "3",
        "bath": "2",
        "sft": "832",
        "price": "8,926"
      },
      {
        "id": "3",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484059262.jpg?k=727be689c63da6221cee4cdfa31cfa78f0d2c9479dd958e96b180669ff485269&o=&hp=1",
        "location": "2-8 Great Suffolk Street",
        "address": "Hilton London Bankside, Southwark, London, SE1 0UG, United Kingdom",
        "rooms": "3",
        "bed": "1",
        "bath": "1",
        "sft": "732",
        "price": "7,256"
      },
      {
        "id": "4",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484049253.jpg?k=562ec335058865cca7ffab567ec0f09814217e38278a99e0d5dfec1dd1d2d0a8&o=&hp=1",
        "location": "8558 Pecan st",
        "address": "RCE Theatres - 907 S Beckford Dr,Henderson, Nc 27536",
        "rooms": "3",
        "bed": "1",
        "bath": "1",
        "sft": "732",
        "price": "7,256"
      },
      {
        "id": "5",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/130774650.jpg?k=32c21c86a35e378fb22fc61e3ffa996308c82b6600d6f245146429209b47a6b7&o=&hp=1",
        "location": "Lancaster Terrace,",
        "address": "Royal Lancaster London, Westminster Borough, London, W2 2TY",
        "rooms": "3",
        "bed": "3",
        "bath": "2",
        "sft": "832",
        "price": "8,926"
      },
      {
        "id": "6",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484059262.jpg?k=727be689c63da6221cee4cdfa31cfa78f0d2c9479dd958e96b180669ff485269&o=&hp=1",
        "location": "2-8 Great Suffolk Street",
        "address": "Hilton London Bankside, Southwark, London, SE1 0UG, United Kingdom",
        "rooms": "3",
        "bed": "1",
        "bath": "1",
        "sft": "732",
        "price": "7,256"
      }
    ])
  const [punecity, setPunecity] = useState([
    {
      "id": "1",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252004905.jpg?k=69522f1462cbcc701c40921d8920876240fc5e7b0ef85a165180bc7806a689ea&o=&hp=1",
      "location": "Weikfield IT City Infopark",
      "address": "Novotel, Survey No. 30/3, Ramwadi, Viman Nagar, 411014 Pune, India",
      "rooms": "2",
      "bed": "1",
      "bath": "1",
      "sft": "672",
      "price": "6,586"
    },
    {
      "id": "2",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/423624225.jpg?k=e45164e6d0e0fb2b5b62e57b9ed1a2594743a9c75482919c45db22ea46297e39&o=&hp=1",
      "location": "Kalyani Nagar (Adj. Aga Khan Palace)",
      "address": "Hyatt Pune, 88 Nagar Road , Kalyani Nagar, 411006 Pune, India",
      "rooms": "3",
      "bed": "2",
      "bath": "1",
      "sft": "732",
      "price": "7,186"
    },
    {
      "id": "3",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/423172066.jpg?k=a2c87f47051134c7306a0285814dcd90de43aba20df8d05d57b0ac5893b40b45&o=&hp=1",
      "location": "Survey No. 40/3 ",
      "address": "Hilton Garden Inn, Hinjawadi Wakad Rd, 411057 Pune, India ",
      "rooms": "2",
      "bed": "1",
      "bath": "1",
      "sft": "672",
      "price": "6,836"
    },
    {
      "id": "4",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252004905.jpg?k=69522f1462cbcc701c40921d8920876240fc5e7b0ef85a165180bc7806a689ea&o=&hp=1",
      "location": "Weikfield IT City Infopark",
      "address": "Novotel, Survey No. 30/3, Ramwadi, Viman Nagar, 411014 Pune, India",
      "rooms": "2",
      "bed": "1",
      "bath": "1",
      "sft": "672",
      "price": "6,586"
    },
    {
      "id": "5",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/423624225.jpg?k=e45164e6d0e0fb2b5b62e57b9ed1a2594743a9c75482919c45db22ea46297e39&o=&hp=1",
      "location": "Kalyani Nagar (Adj. Aga Khan Palace)",
      "address": "Hyatt Pune, 88 Nagar Road , Kalyani Nagar, 411006 Pune, India",
      "rooms": "3",
      "bed": "2",
      "bath": "1",
      "sft": "732",
      "price": "7,186"
    },
    {
      "id": "6",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/423172066.jpg?k=a2c87f47051134c7306a0285814dcd90de43aba20df8d05d57b0ac5893b40b45&o=&hp=1",
      "location": "Survey No. 40/3 ",
      "address": "Hilton Garden Inn, Hinjawadi Wakad Rd, 411057 Pune, India ",
      "rooms": "2",
      "bed": "1",
      "bath": "1",
      "sft": "672",
      "price": "6,836"
    }
  ])
  const [mumbaicity, setMumbaicity] = useState([
    {
      "id": "1",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/283176996.jpg?k=8aebdf02f6ce9f738fb2f17881c5feca118791a499df2bfebdbcad6fc11b6d59&o=&hp=1",
      "location": " Sakinaka Junction, Andheri Kurla Road",
      "address": "Holiday Inn Mumbai International Airport, Andheri East, 400072 Mumbai, India",
      "rooms": "2",
      "bed": "2",
      "bath": "1",
      "sft": "832",
      "price": "8,146"
    },
    {
      "id": "2",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/33034375.jpg?k=ebad21bc68081acf90d3fc69b50bc8a713a60df7eb219351be8ca0e409473758&o=&hp=1",
      "location": "C-56, G Block, Bandra Kurla Complex",
      "address": "Trident Bandra Kurla, Bandra, 400051 Mumbai, India",
      "rooms": "3",
      "bed": "1",
      "bath": "1",
      "sft": "732",
      "price": "7,256"
    },
    {
      "id": "3",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465549681.jpg?k=8c903ab7bf0fd906a3fe7b456463805c4026db2dab6706341a83d385160f0f9b&o=&hp=1",
      "location": "IA Project Road, Chhatrapati Shivaji International Airport",
      "address": "JW Marriott Mumbai Sahar Airport, Andheri East, 400099 Mumbai, India",
      "rooms": "2",
      "bed": "2",
      "bath": "1",
      "sft": "842",
      "price": "8,656"
    },
    {
      "id": "4",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/283176996.jpg?k=8aebdf02f6ce9f738fb2f17881c5feca118791a499df2bfebdbcad6fc11b6d59&o=&hp=1",
      "location": " Sakinaka Junction, Andheri Kurla Road",
      "address": "Holiday Inn Mumbai International Airport, Andheri East, 400072 Mumbai, India",
      "rooms": "2",
      "bed": "2",
      "bath": "1",
      "sft": "832",
      "price": "8,146"
    },
    {
      "id": "5",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/33034375.jpg?k=ebad21bc68081acf90d3fc69b50bc8a713a60df7eb219351be8ca0e409473758&o=&hp=1",
      "location": "C-56, G Block, Bandra Kurla Complex",
      "address": "Trident Bandra Kurla, Bandra, 400051 Mumbai, India",
      "rooms": "3",
      "bed": "1",
      "bath": "1",
      "sft": "732",
      "price": "7,256"
    },
    {
      "id": "6",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465549681.jpg?k=8c903ab7bf0fd906a3fe7b456463805c4026db2dab6706341a83d385160f0f9b&o=&hp=1",
      "location": "IA Project Road, Chhatrapati Shivaji International Airport",
      "address": "JW Marriott Mumbai Sahar Airport, Andheri East, 400099 Mumbai, India",
      "rooms": "2",
      "bed": "2",
      "bath": "1",
      "sft": "842",
      "price": "8,656"
    }
  ])
  const [newyorkcity, setNewyorkcity] = useState([
    {
      "id": "1",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/466811346.jpg?k=99b8ffaff5504a10b406f8cc8f802b2a9e2af641142bf1f99026af797d3d61c2&o=&hp=1",
      "location": "790 8th Avenue",
      "address": "Kimpton Hotel Theta,New York, NY 10019",
      "rooms": "2",
      "bed": "2",
      "bath": "1",
      "sft": "862",
      "price": "8,256"
    },
    {
      "id": "2",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/261355520.jpg?k=92f96913d29ac4bb951d07641456f2668b2dc7bbd5a4ae007baa97f5f379757a&o=&hp=1",
      "location": "111 East 48th Street",
      "address": "InterContinental New York Barclay Hotel, Midtown East, New York, NY 10017",
      "rooms": "3",
      "bed": "2",
      "bath": "1",
      "sft": "822",
      "price": "8,486"
    },
    {
      "id": "3",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/434765852.jpg?k=940f24c16b8aa90e6873dfccae82c64e460230a82ac1d8cdb2dd0f79f25c0e3c&o=&hp=1",
      "location": "270 West 43rd Street",
      "address": "The Westin New York at Times Square, New York, NY 10036",
      "rooms": "2",
      "bed": "1",
      "bath": "1",
      "sft": "672",
      "price": "6,836"
    },
    {
      "id": "4",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/466811346.jpg?k=99b8ffaff5504a10b406f8cc8f802b2a9e2af641142bf1f99026af797d3d61c2&o=&hp=1",
      "location": "790 8th Avenue",
      "address": "Kimpton Hotel Theta,New York, NY 10019",
      "rooms": "2",
      "bed": "2",
      "bath": "1",
      "sft": "862",
      "price": "8,256"
    },
    {
      "id": "5",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/261355520.jpg?k=92f96913d29ac4bb951d07641456f2668b2dc7bbd5a4ae007baa97f5f379757a&o=&hp=1",
      "location": "111 East 48th Street",
      "address": "InterContinental New York Barclay Hotel, Midtown East, New York, NY 10017",
      "rooms": "3",
      "bed": "2",
      "bath": "1",
      "sft": "822",
      "price": "8,486"
    },
    {
      "id": "6",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/434765852.jpg?k=940f24c16b8aa90e6873dfccae82c64e460230a82ac1d8cdb2dd0f79f25c0e3c&o=&hp=1",
      "location": "270 West 43rd Street",
      "address": "The Westin New York at Times Square, New York, NY 10036",
      "rooms": "2",
      "bed": "1",
      "bath": "1",
      "sft": "672",
      "price": "6,836"
    }
  ])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<London city={city} setCity={setCity} />} />
        <Route path='/newyork' element={<Newyork newyorkcity={newyorkcity} setNewyorkcity={setNewyorkcity} />} />
        <Route path='/pune' element={<Pune punecity={punecity} setPunecity={setPunecity} />} />
        <Route path='/mumbai' element={<Mumbai mumbaicity={mumbaicity} setMumbaicity={setMumbaicity} />} />
        <Route path="/london/:id" element={<Card city={city} setCity={setCity} />} />
        <Route path="/pune/:id" element={<PuneCardList punecity={punecity} setPunecity={setPunecity} />} />
        <Route path="/mumbai/:id" element={<MumbaiCardList mumbaicity={mumbaicity} setMumbaicity={setMumbaicity} />} />
        <Route path="/newyork/:id" element={<NewyorkCardList newyorkcity={newyorkcity} setNewyorkcity={setNewyorkcity} />} />
      </Routes>
    </div>
  )
}

function Card({ city }) {
  const { id } = useParams()  //link id
  const cities = city[id - 1] //array[index]
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
function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="navbar-content">
        <b>Featured Listed Property</b>
        <p>Real estate can be bought, sold, leased or rented, aand can be a<br />
          Valuable investment opportunity. The value of real estate can be...</p>
      </div>
      <div className="span-button">
        <div className="city-button">
          <span onClick={() => navigate("/newyork")}>New york</span>
          <span onClick={() => navigate("/mumbai")}> Mumbai</span >
          <span onClick={() => navigate("/pune")}>Pune</span>
          <span onClick={() => navigate("/")}>London</span>
        </div >
        <span className="view">View all</span>
      </div >
    </div >
  )
}

function London({ city, setCity }) {
  const [visible, setvisible] = useState(3)
  const loadmore = () => {
    setvisible((prevcount) => prevcount + 3)
  }
  return (
    <div>
      <div className="london-container">

        {city.slice(0, visible).map((city, index) => <LondonCard city={city} key={index} />)}


      </div>
      <div className="center-button">
        <span className="loadmore" onClick={loadmore}>loadmore</span>

      </div>
    </div>
  )
}

function LondonCard({ city }) {
  const navigate = useNavigate()
  return (
    <div className="city-container" onClick={() => navigate(`/london/${city.id}`)}>
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