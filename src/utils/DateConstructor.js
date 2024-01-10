

export const DateConstructor = ({inputDate}) => {
  
    
    const originalDate = new Date(inputDate);

   
    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); 
    const day = originalDate.getDate().toString().padStart(2, '0');

    
    const formattedDateString = `${year}${month}${day}`;


  

  return formattedDateString;
};

