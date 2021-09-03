import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div
            className='searchPage__info'>
                <p>62 stays . 26 augest to 30
                    augest . 2 guest</p>
                    <h1>Stays nearby</h1>
                    <Button
                    variant="outlined">Cancellation
                    Flexibility</Button>
                    <Button
                    variant="outlined">Type of
                    Place</Button>
                    <Button
                    variant="outlined">Price
                    </Button>
                    <Button
                    variant="outlined">Rooms and
                    beds</Button>
                    <Button
                    variant="outlined">More
                    filters</Button>
            </div>
            <SearchResult 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bthrooms . wifi . Kitchen . Free parking . Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"    
             />
             <SearchResult 
            img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
            location="private room in center of London"
            title="Independent luxury studio apartment"
            description="2 guest . 3 bedroom . 1 bed . 1.5 shared bthrooms . wifi . Kitchen . Free parking . Washing Machine"
            star={4.43}
            price="$35.8 / night"
            total="$157 total"    
             />
             <SearchResult 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bthrooms . wifi . Kitchen . Free parking . Washing Machine"
            star={4.53}
            price="$70 / night"
            total="$207 total"    
             />
             <SearchResult s
            img="https://ww.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
            location="private room in center of London"
            title="London Studio Apartments"
            description="4 guest . 4 bedrooms . 4 bed . 2 Bathrooms . wifi . Kitchen . Free parking . Washing Machine"
            star={4.33}
            price="$40 / night"
            total="$320 total"    
             />
        </div>
    )
}

export default SearchPage