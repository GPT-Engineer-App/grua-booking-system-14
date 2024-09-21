import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

const BookingButton = () => {
  const handleBooking = () => {
    // Add booking logic here
    console.log("Booking button clicked");
  };

  return (
    <Button onClick={handleBooking} className="flex items-center space-x-2">
      <CalendarPlus className="h-5 w-5" />
      <span>Book Now</span>
    </Button>
  );
};

export default BookingButton;