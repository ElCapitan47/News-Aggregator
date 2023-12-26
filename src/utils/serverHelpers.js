
import { api_key } from './config'

export const MakeRequest = async({query,page, newsDesk, source,sort, beginDate, endDate}) => {
   
  try {
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${api_key}`;

    // Add newsdesk to the URL if it's not an empty string
    url += `&fq=news_desk:("${newsDesk}")`;

    // Add source to the URL if it's not an empty string
    if (source && source.trim() !== "") {
      url += `AND source:(${source})`;
    }

    // Add sort if it's not an empty string
    if (sort && sort.trim() !== "") {
      url += `&sort=${sort}`;
    }

    // Add beginDate to the URL if it's not an empty string
    if (beginDate && beginDate.trim() !== "") {
      url += `&begin_date=${beginDate}`;
    }

    // Add endDate to the URL if it's not an empty string
    if (endDate && endDate.trim() !== "") {
      url += `&end_date=${endDate}`;
    }

    console.log(url);

    const response = await fetch(url);
    
    if (response.status === 400) {
      console.error('Error during request: Bad Request');
      throw new Error('Bad Request');
    }

    if (response.status === 401) {
      console.error('Error during request: Unauthorized request');
      throw new Error('Unauthorized Request');
    }

    if (response.status === 429) {
      console.error('Error during request: Too many requests');
      throw new Error('Too many requests! Rate-limit exceeded. Try again after some time');
    }


    const formattedResponse = await response.json();
    return formattedResponse.response;
  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    console.error('Error during request:', error.message);
    throw error; 
    
    
    // throw error; // Rethrow the error to propagate it to the caller
  }

    //     let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${api_key}`;
        
    //     // Add newsdesk to the URL if it's not an empty string
    //     // if (newsDesk && newsDesk.trim() !== "") {
    //     // url += `&fq=news_desk:(${newsDesk})`;
    //     // }
    //     url += `&fq=news_desk:("${newsDesk}")`; 
    
    //     // Add location to the URL if it's not an empty string
    //     // if (location && location.trim() !== "") {
    //     // url += `AND glocation:(${location})`;
    //     // }
    
    //     // Add source to the URL if it's not an empty string
    //     if (source && source.trim() !== "") {
    //     url += `AND source:(${source})`;
    //     }

    //     //Add sort if its not an empty string
    //     if (sort && sort.trim() !== "") {
    //       url += `&sort=${sort}`;
    //     }

    //     // Add beginDate to the URL if it's not an empty string
    //     if (beginDate && beginDate.trim() !== "") {
    //       url += `&begin_date=${beginDate}`;
    //     }

    //       // Add endDate to the URL if it's not an empty string
    //     if (endDate && endDate.trim() !== "") {
    //       url += `&end_date=${endDate}`;
    //     }
    
       
    
    // // const response= await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${api_key}`)
    // // const formattedResponse= await response.json();
    // // return formattedResponse.response
    //     console.log(url);

    //     const response = await fetch(url);
    //     const formattedResponse = await response.json();
    //     return formattedResponse.response;
   

        
}
export const MakeTopNewsRequest = async ({ field }) => {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${field}.json?api-key=${api_key}`);
    const topNewsResponse = await response.json();
    // console.log(topNewsResponse)
    return topNewsResponse;
  };
  




//   export const MakeRequest = async ({ query, page, location, source, pubYear }) => {
//     // Build the base URL
//     let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${api_key}`;
  
//     // Add location to the URL if it's not an empty string
//     if (location && location.trim() !== "") {
//       url += `&fq=glocation:(${location})`;
//     }
  
//     // Add source to the URL if it's not an empty string
//     if (source && source.trim() !== "") {
//       url += `&fq=source:(${source})`;
//     }
  
//     // Add newsdesk to the URL if it's not an empty string
//     if (newsDesk && newsDesk.trim() !== "") {
//       url += `&fq=news_desk:(${newsDesk})`;
//     }
  
//     const response = await fetch(url);
//     const formattedResponse = await response.json();
//     return formattedResponse.response;
//   };
  