import React from "react";
import "./BookingSummery.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";

function BookingSummery() {
  return (
    <div className="BookingSummery_ParentDiv">
      <SecondaryNav2 />
      <div className="BookingSummeryChild">
        <div className="BookingSummeryChild_dataDiv">
          <div className="BookingSummeryChild_dataDiv_Bookings">
            <div className="BookingSummeryChild_dataDiv_Bookings_imgDiv">
              <img
                className="BookingSummeryChild_dataDiv_Bookings_img"
                src="https://imgak.mmtcdn.com/mima/images/Desktop/mytripSprite.png"
              />
            </div>
            <h4>Bookings</h4>
          </div>
          <div className="BookingSummeryChild_dataDiv_NoBookings">
            <img src="https://imgak.mmtcdn.com/mima/images/Desktop/upcoming-empty.png" />
            <div>
              <h3>Looks empty, you've no upcoming bookings.</h3>
              <small>
                When you book a trip, you will see your itinerary here.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSummery;
