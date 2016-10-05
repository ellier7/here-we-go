import React, { Component } from 'react';
import { Link } from 'react-router';
import BudgetForm from './BudgetForm';
import HotelItin from './HotelItin'
import CarRental from './CarRental';

const Itinerary = React.createClass({

  handleBudgetForm: function(event) {
    event.preventDefault();
    // DISPLAY BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
  },

  render() {
    console.log("PROPS ITIN", this.props.data)
    console.log('hotel itin data', this.props.data.reducerHotelItin.hotelItinData)
    // if(this.props.data.reducerTripData.loggedIn){
      return (
        <div className="tile-itinerary">
          <h3>My Itinerary</h3>
          {this.props.data.reducerHotelItin.hotelItinData.map((itin) => 
            <HotelItin
              key={itin.sift_id}
              hotelItinInfo={itin}
              startDate={this.props.data.reducerTripData.startDate}
              endDate={this.props.data.reducerTripData.endDate}
            />
            )}

              {/* map over cars
              <CarItin
                key={hotel.sift_id}
                hotelInfo={hotel}
                email={this.props.reducerHotelItin.email}
              />
              */}

              {/* map over flights
              <FlightItin
                key={hotel.sift_id}
                hotelInfo={hotel}
                email={this.props.reducerHotelItin.email}
              />
              */}

              {/* map over activities
              <ActivityItin
                key={hotel.sift_id}
                hotelInfo={hotel}
                email={this.props.reducerHotelItin.email}
              />
              */}
            <p>Upcoming</p>
            <p>Previous</p>
            <p>Cancelled</p>
            <p><a onClick={this.handleBudgetForm}>Budget</a></p>
        
          <div id="light" className="lightbox-content">
            <BudgetForm />
          </div>
          <div id="fade" className="black_overlay"></div>
        </div>
      );
    // } else {
    //   return (
    //    <div className="tile-itinerary">
    //     <h3>My Itinerary</h3>
    //     <ul>
    //         <li>Saved</li>
    //         <li>Upcoming</li>
    //         <li>Previous</li>
    //         <li>Cancelled</li>
    //         <li><a onClick={this.handleBudgetForm}>Budget</a></li>
    //       </ul>
    //   </div>
    //     )
    // }
  } 
})

export default Itinerary;
