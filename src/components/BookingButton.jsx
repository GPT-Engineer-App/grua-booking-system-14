import React from 'react';
import { Button } from "@chakra-ui/react";
import { FaCalendarPlus } from "react-icons/fa";

const BookingButton = () => {
  const handleBooking = () => {
    // Add booking logic here
    console.log("Booking button clicked");
  };

  return (
    <Button onClick={handleBooking} leftIcon={<FaCalendarPlus />} colorScheme="blue">
      Book Now
    </Button>
  );
};

export default BookingButton;
