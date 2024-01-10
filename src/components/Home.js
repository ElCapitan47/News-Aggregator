import React from "react";
import LayoutComponent from "./Layout";
import CardComponent from "../utils/Card";
import { MakeTopNewsRequest } from "../utils/serverHelpers";
import { useState, useEffect } from "react";


const HomeComponent =()=>{

    // const fields= ['politics','science','sports','technology','movies','business']
    //Politics
    const [poldata, setPolData]= useState({})
    const [ispolLoading, setIsPolLoading]=useState(true)
    useEffect(()=>{
       
            const getData= async()=>{
                const response= await MakeTopNewsRequest({field: 'politics'})
                setPolData(response)
                setIsPolLoading(false)
    
            }
            getData();


        
    },[])



    //Business
    const [busdata, setBusData]= useState({})
    const [isbusLoading, setIsBusLoading]=useState(true)
    useEffect(()=>{
       
            const getData= async()=>{
                const response= await MakeTopNewsRequest({field: 'business'})
                setBusData(response)
                setIsBusLoading(false)
    
            }
            getData();


        
    },[])

    //tech
    const [techdata, setTechData]= useState({})
    const [istechLoading, setIsTechLoading]=useState(true)
    useEffect(()=>{
       
            const getData= async()=>{
                const response= await MakeTopNewsRequest({field: 'technology'})
                setTechData(response)
                setIsTechLoading(false)
    
            }
            getData();


        
    },[])
    
    //movies
    const [moviedata, setMovieData]= useState({})
    const [ismovieLoading, setIsMovieLoading]=useState(true)
    useEffect(()=>{
       
            const getData= async()=>{
                const response= await MakeTopNewsRequest({field: 'movies'})
                setMovieData(response)
                setIsMovieLoading(false)
    
            }
            getData();


        
    },[])
   
    return(
        <LayoutComponent curWindow={'home'}>
            {
               
                <div className="h-full w-full space-y-24">
                  {!ispolLoading &&  <div className="space-y-5">
                    <div className=" w-full text-2xl bg-app-black text-white font-semibold flex items-center justify-center ">Politics</div>
                    <div className="flex w-full space-x-5">
                    <CardComponent title={poldata.results[0].title} img={poldata.results[0].multimedia[1].url} abstract={poldata.results[0].abstract} byline={poldata.results[0].byline} url={poldata.results[0].url}></CardComponent>
                    <CardComponent title={poldata.results[1].title} img={poldata.results[1].multimedia[1].url} abstract={poldata.results[1].abstract} byline={poldata.results[1].byline} url={poldata.results[1].url}></CardComponent>
                    <CardComponent title={poldata.results[2].title} img={poldata.results[2].multimedia[1].url} abstract={poldata.results[2].abstract} byline={poldata.results[2].byline} url={poldata.results[2].url}></CardComponent>
                    <CardComponent title={poldata.results[3].title} img={poldata.results[3].multimedia[1].url} abstract={poldata.results[3].abstract} byline={poldata.results[3].byline} url={poldata.results[3].url}></CardComponent>
                    </div>
                    
                   </div>
                  }
                  {!isbusLoading && (
                    <div className="space-y-5">
                        <div className="w-full text-2xl bg-app-black text-white font-semibold flex items-center justify-center">
                        Business
                        </div>
                        <div className="flex w-full space-x-5">
                        {busdata.results.slice(0, 4).map((result, index) => (
                            <CardComponent
                            key={index}
                            title={result.title}
                            img={result.multimedia[1].url}
                            abstract={result.abstract}
                            byline={result.byline}
                            url={result.url}
                            />
                        ))}
                        </div>
                    </div>
                    )

                  }
                   {!istechLoading && (
                    <div className="space-y-5">
                        <div className="w-full text-2xl bg-app-black text-white font-semibold flex items-center justify-center">
                        Technology
                        </div>
                        <div className="flex w-full space-x-5">
                        {techdata.results.slice(0, 4).map((result, index) => (
                            <CardComponent
                            key={index}
                            title={result.title}
                            img={result.multimedia[1].url}
                            abstract={result.abstract}
                            byline={result.byline}
                            url={result.url}
                            />
                        ))}
                        </div>
                    </div>
                    )

                  }
                   {!ismovieLoading && (
                    <div className="space-y-5">
                        <div className="w-full text-2xl bg-app-black text-white font-semibold flex items-center justify-center">
                        Movies & Entertainment
                        </div>
                        <div className="flex w-full space-x-5">
                        {moviedata.results.slice(0, 4).map((result, index) => (
                            <CardComponent
                            key={index}
                            title={result.title}
                            img={result.multimedia[1].url}
                            abstract={result.abstract}
                            byline={result.byline}
                            url={result.url}
                            />
                        ))}
                        </div>
                    </div>
                    )

                  }

                
 
                </div>
              

            }
            
            
           
        </LayoutComponent>
    )


}

export default HomeComponent;



