
import { api_key } from './config'

export const MakeRequest = async({query,page, newsDesk, source,sort, beginDate, endDate}) => {
   
  try {
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${api_key}`;

    // Add newsdesk to the URL if it's not an empty string
    if (newsDesk && newsDesk.trim() !== "") {
      url += `&fq=news_desk:(${newsDesk})`;
    }

    // Add source to the URL if it's not an empty string
    if (source && source.trim() !== "") {
      if(newsDesk && newsDesk.trim() !== "")
      {
        url += `AND source:(${source})`;
      }
      else
      {
        url += `&fq=source:(${source})`;
      }
      
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

    // console.log(url);

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
   
    console.error('Error during request:', error.message);
    throw error; 
  
  }

}

export const MakeTopNewsRequest = async ({ field }) => {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${field}.json?api-key=${api_key}`);
    const topNewsResponse = await response.json();
    // console.log(topNewsResponse)
    return topNewsResponse;
  };
  