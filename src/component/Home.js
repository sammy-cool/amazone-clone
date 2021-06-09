import React from 'react'
import '../component/Home.css'
import Product from './Product'
import wall from "../image/wall.jpg"
import wall2 from "../image/wall2.jpg"
import frame from "../image/frame.jpg"

function Home(props) {
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Unrec_PC_Hero_1X_ENGLISH._CB416347023_.jpg"
                alt="home banner"
            />

            {/* Product id , title, price, rating, image */}

            <div className="home_row">
                <Product
                    id="12345"
                    title="The lean Startup: How Constant Innovation Creates Radically Successfully Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image={wall}
                />
                <Product
                    id="123456"
                    title="The lean Startup: How Constant Innovation Creates Radically Successfully Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image={wall2}
                />
            </div>

            <div className="home_row">
                <Product
                    id="123457"
                    title="The lean Startup: How Constant Innovation Creates Radically Successfully Businesses Paperback"
                    price={11.96}
                    rating={4}
                    image={wall}
                />
                <Product
                    id="123458"
                    title="The lean Startup: How Constant Innovation Creates Radically Successfully Businesses Paperback"
                    price={11.96}
                    rating={3}
                    image={wall2}
                />
                <Product
                    id="123459"
                    title="The lean Startup: How Constant Innovation Creates Radically Successfully Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image={frame}
                />
            </div>

            <div className="home_row">
                <Product
                    id="1234510"
                    title="The lean Startup: How Constant Innovation Creates Radically Successfully Businesses Paperback"
                    price={11.96}
                    rating={4}
                    image={wall}
                />
            </div>
        </div>
    )
}

export default Home