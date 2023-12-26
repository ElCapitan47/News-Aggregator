

export const DateDeconstructor = ({dateString}) => {
    // console.log(dateString);
    // console.log(dateString.pub_date);
    const dateObject = new Date(dateString);
    
    // Formatting date
    const formattedDate = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`;
  
    // Formatting time
    // const formattedTime = `${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}:${String(dateObject.getSeconds()).padStart(2, '0')}`;
    
    // console.log(formattedDate);
    return formattedDate;
}


