import React from 'react';

export const DateConstructor = ({inputDate}) => {
  
    // Parse the input date string into a Date object
    // console.log(inputDate);
    const originalDate = new Date(inputDate);

    // Extract year, month, and day components
    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = originalDate.getDate().toString().padStart(2, '0');

    // Format the components into the desired format
    const formattedDateString = `${year}${month}${day}`;


  

  return formattedDateString;
};

