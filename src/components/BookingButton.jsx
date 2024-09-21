import React from 'react';
import { Button } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

const BookingButton = () => {
  const handleBooking = () => {
    // Add booking logic here
    console.log("Booking button clicked");
  };

  return (
    <Button onClick={handleBooking} leftIcon={<CalendarIcon />} colorScheme="blue">
      Book Now
    </Button>
  );
};

export default BookingButton;
