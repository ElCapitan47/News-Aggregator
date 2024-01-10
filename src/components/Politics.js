import React from 'react'
import LayoutComponent from './Layout'
import { useState } from 'react'
import { useEffect } from 'react'
import { MakeTopNewsRequest } from '../utils/serverHelpers'
import CardComponent from '../utils/Card'

const PoliticsComponent = () => {
    const [data, setData]= useState({})
    const [isLoading, setIsLoading]=useState(true)
    useEffect(()=>{
        
            const getData= async()=>{
                const response= await MakeTopNewsRequest({field: 'politics'})
                setData(response)
                setIsLoading(false)

            }
            getData();


        
    },[])

  return (
    <LayoutComponent curWindow={'politics'}>
        <div className='w-full h-full flex'>
        {!isLoading && (
            <div className="">
            <div className="w-full text-2xl bg-app-black text-white font-semibold flex items-center justify-center">
                Politics
            </div>
            <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
                {data.results.slice(0, data.num_results).map((result, index) => (
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
        )}
        </div>
       

    </LayoutComponent>
    
  )
}

export default PoliticsComponent
