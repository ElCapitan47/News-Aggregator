

export const DateDeconstructor = ({dateString}) => {
   
    const dateObject = new Date(dateString);
    
    // Formatting date
    const formattedDate = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`;

    return formattedDate;
}


