import HomeComponent from "./components/Home";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import FormComponent from "./components/Form";
import SearchComponent from "./components/Search";
import NotFoundComponent from "./components/NotFound";
import TechComponent from "./components/Tech";
import PoliticsComponent from "./components/Politics";
import BusinessComponent from "./components/Business";
import MoviesComponent from "./components/Movies";



function App() {
  
 
  return (
    <div className="App">
      <div className="w-screen h-screen">
        <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<HomeComponent/>}></Route>
          <Route path='/form' element={<FormComponent/>}></Route>
          <Route path='/search' element={<SearchComponent/>}></Route>
          <Route path='/tech' element={<TechComponent/>}></Route>
          <Route path='/politics' element={<PoliticsComponent/>}></Route>
          <Route path='/business' element={<BusinessComponent/>}></Route>
          <Route path='/movies' element={<MoviesComponent/>}></Route>
          <Route path='/*' element={<NotFoundComponent/>}></Route>
          
        </Routes>
       
        </BrowserRouter>

      </div>
      
          
    </div>
  );
}

export default App;
