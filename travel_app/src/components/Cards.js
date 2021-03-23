import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import images from "../images/img-9.jpg"
import images1 from "../images/img-2.jpg"
import images2 from "../images/img-1.jpg"
import images3 from "../images/img-8.jpg"
import images4 from "../images/img-22.jpg"

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations !</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={images}
                        text = "Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />

                        <CardItem
                        src={images1}
                        text = "Travel through this beautiful island"
                        label='Luxury'
                        path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                        src={images2}
                        text = "Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />

                        <CardItem
                        src={images3}
                        text = "Travel through this beautiful island"
                        label='Luxury'
                        path='/services'
                        />

                        <CardItem
                        src={images4}
                        text = "Travel through this beautiful island"
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
