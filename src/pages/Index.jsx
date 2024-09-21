import React from 'react';
import BookingButton from '../components/BookingButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl text-gray-600">Start booking your appointments today!</p>
      </div>
      <BookingButton />
    </div>
  );
};

export default Index;
