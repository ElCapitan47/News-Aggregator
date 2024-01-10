import React from 'react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { MakeRequest } from './serverHelpers'
import { useEffect } from 'react'
import SearchCardComponent from './SearchCard'
import { useRef } from 'react'
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { DateConstructor } from './DateConstructor'




const SearchBarComponent = () => {
  
  
  const [isInitial, setIsInitial]=useState(true)
  const [isLoading, setIsLoading]= useState(true)
  const [searchItem, setSearchItem]= useState('')
  const [curPage, setCurPage]= useState(0)
  const [source, setSource]= useState("")
  const [newsDesk, setNewsDesk]= useState("")
  const [sort, setSort]= useState("")
  const [isInitialLoading, setIsInitialLoading]= useState(true)
 
  const [selectedDate] = useState(new Date());
  const defaultBeginDate= DateConstructor({inputDate: selectedDate})
  const defaultEndDate= DateConstructor({inputDate: selectedDate})
  
  const [beginDate, setBeginDate]= useState("")
  const [endDate, setEndDate]= useState("")
  
  const [parsedBeginDate, setParsedBeginDate]= useState(defaultBeginDate)
  const [parsedEndDate, setParsedEndDate]= useState(defaultEndDate);
  

  
  const [data, setData]= useState({})
  const isInitialRender = useRef(true)

  useEffect(()=>{
    SearchDefaultResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  useEffect(()=>{
    
    if(beginDate!=="")
    {
      const formattedbeginDate= DateConstructor({inputDate: beginDate})
      setParsedBeginDate(formattedbeginDate);
    }
   
  },[beginDate])
  useEffect(()=>{
    
    if(endDate!=="")
    {
      const formattedendDate= DateConstructor({inputDate: endDate})
      setParsedEndDate(formattedendDate);
    }
    
  },[endDate])
 
   
  

  useEffect(()=>{
    if(isInitialRender.current)
    {
      isInitialRender.current=false;
    }
    else
    {
      SearchResults();
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[curPage])

  const SearchDefaultResults= async()=>{
    setIsInitialLoading(true);
    try {
      const response = await MakeRequest({
        query: searchItem,
        page: curPage,
        source: source,
        newsDesk: newsDesk,
        sort: sort,
        beginDate: defaultBeginDate,
        endDate: defaultEndDate,
      });
      setData(response);
    } catch (error) {
      console.error('Error during request:', error.message);
      alert(`An error occurred: ${error.message}`);
      
    } finally {
      setIsInitialLoading(false);
    }
  }
  const SearchResults= async()=>{
    
    
    setIsInitial(false);
    setIsLoading(true);
    try {
      const response = await MakeRequest({
        query: searchItem,
        page: curPage,
        source: source,
        newsDesk: newsDesk,
        sort: sort,
        beginDate: parsedBeginDate,
        endDate: parsedEndDate,
      });
      setData(response);
    } catch (error) {
      console.error('Error during request:', error.message);
      alert(`An error occurred: ${error.message}`);
      
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <div className='space-y-10'>
      <div className=' w-1/2 flex items-center justify-around p-3 bg-black rounded-full'>
      <div className={`w-full items-center justify-center flex space-x-5`}>
         <Icon icon="ic:baseline-search" fontSize={25} color='white'/>
         <input type='text' placeholder='Search for news articles,posts,blogs' 
         className='w-full rounded-full p-2 bg-app-black text-white'
         value={searchItem}
         onChange={(e)=>{setSearchItem(e.target.value);}}
         onKeyDown={(e)=>{
           if(e.key==='Enter')
           {
            if(curPage===0)
            {
              SearchResults();
            }
            else
            {
              setCurPage(0);
            }
            
            
           }
         }} ></input>
      </div>
      
      </div>
      {/* Filter Form */}
      <div className='px-3'>
        <form>
          <div className='space-y-1'>
            <div className='space-y-1'>
              <FormLabel>Filter by:</FormLabel>
              <div className="flex items-center justify-between">
              
                <FormControl component="fieldset">
                  <FormLabel component="legend">Source:</FormLabel>
                  <div className="flex">
                    <FormControlLabel
                      value="The New York Times"
                      control={<Radio />}
                      label="The New York Times"
                      checked={source === "The New York Times"}
                      onChange={() => setSource("The New York Times")}
                    />
                    <FormControlLabel
                      value="AP"
                      control={<Radio />}
                      label="AP"
                      checked={source === "AP"}
                      onChange={() => setSource("AP")}
                    />
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="None"
                      checked={source === ""}
                      onChange={() => setSource("")}
                    />
                  </div>
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Section:</FormLabel>
                  <RadioGroup
                    row
                    aria-label="section"
                    name="section"
                    value={newsDesk}
                    onChange={(e) => setNewsDesk(e.target.value)}
                  >
                    <FormControlLabel value="Sports" control={<Radio />} label="Sports" />
                    <FormControlLabel value="Politics" control={<Radio />} label="Politics" />
                    <FormControlLabel value="Business" control={<Radio />} label="Business" />
                    <FormControlLabel value="Technology" control={<Radio />} label="Technology" />
                    <FormControlLabel value="" control={<Radio />} label="None" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          <div className='flex items-center justify-between'>
            <div>
              <FormLabel>Sort by:</FormLabel>
              <div className="space-y-2">
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="sort"
                    name="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <FormControlLabel value="newest" control={<Radio />} label="Newest" />
                    <FormControlLabel value="oldest" control={<Radio />} label="Oldest" />
                    <FormControlLabel value="" control={<Radio />} label="None" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className='space-y-2'>
              <FormLabel>Date Range:</FormLabel>
              <div className="flex items-center justify-start space-x-4">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Begin Date"
                    value={selectedDate}
                    onChange={(date) => setBeginDate(date)}
                    renderInput={(params) => <TextField {...params} variant="standard"/>}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="End Date"
                    value={selectedDate}
                    onChange={(date) => setEndDate(date)}
                    renderInput={(params) => <TextField {...params} variant="standard" />}
                  />
                </LocalizationProvider>
              </div>
            </div>

            </div>
            
            
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  if (curPage === 0) {
                    SearchResults();
                  } else {
                    setCurPage(0);
                  }
                }}
              >
                Apply
              </Button>
            </div>
          </div>
        </form>
      </div>
       
      {/* Search results to be shown below */}
      <div>
        {
            !isLoading ?
            (
              <div className='space-y-10'>
                  <div className='flex items-center justify-between'>
                      <div className='text-lg'>Showing {Math.min(data.meta.offset + 1, data.meta.hits)} -  {Math.min(data.meta.offset + 10, data.meta.hits)} of {data.meta.hits} results</div>
                  </div>
                  
                  <div>
                  {
                    !isLoading &&
                    <div className='space-y-5'>
                      {data.docs.slice(0, 10).map((doc, index) => (
                        <SearchCardComponent
                          key={index}
                          title={doc.headline.main}
                          byline={doc.byline.original}
                          abstract={doc.abstract}
                          url={doc.web_url}
                          source={doc.source}
                          pub_date={doc.pub_date}
                          lead_para={doc.lead_paragraph}
                          imgUrl={doc.multimedia?.[0]?.url ?
                            `https://nytimes.com/${doc.multimedia[0].url}` : 
                            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'}
                        />
                      ))}
                    </div>

                    
                 
                    
                  }
                </div>

                <div className='flex space-x-2 items-center justify-center'>
                <Icon icon="ooui:previous-ltr" fontSize={30} onClick={()=>{ curPage===0 ? setCurPage(0):setCurPage(curPage -1)}} />
                <div className='text-lg'>Page {curPage+1}</div>
                <Icon icon="ooui:next-ltr" fontSize={30} onClick={()=>{setCurPage(curPage +1)}}/>

                </div>
              </div>
            ) : 
            <div className='text-3xl flex items-center justify-center'>{isInitial ? (!isInitialLoading ? <div className='space-y-10'>
              <div className='flex items-center justify-between'>
                      <div className='text-lg'>Top News Today</div>
              </div>
              <div className='space-y-5'>
                      {data.docs.slice(0, 10).map((doc, index) => (
                        <SearchCardComponent
                          key={index}
                          title={doc.headline.main}
                          byline={doc.byline.original}
                          abstract={doc.abstract}
                          url={doc.web_url}
                          source={doc.source}
                          pub_date={doc.pub_date}
                          lead_para={doc.lead_paragraph}
                          imgUrl={doc.multimedia?.[0]?.url ?
                            `https://nytimes.com/${doc.multimedia[0].url}` : 
                            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'}
                        />
                      ))}
                    </div>
            </div>: <CircularProgress color="inherit" />): <CircularProgress color="inherit" />}  </div>
        }

      </div>

    </div>
   
  )
}

export default SearchBarComponent
