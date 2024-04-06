import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import  Feed from './components/Feed'
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';




function App() {
  console.log("hello")
  return (
    
  
  <>
  <BrowserRouter>
  <div className="flex flex-col h-full">
   <Header/>
   <Routes>
    <Route
    path="/"
    exact element={<Feed/>} />
    <Route
    path="/searchResult/:searchQuery" 
    exact
    element={<SearchResult/>} />
    <Route
     path="/video/:id"
     exact
    element={<VideoDetails/>}/>
   </Routes>

  </div>

  
  </BrowserRouter>
  </>
  );
}

export default App;
