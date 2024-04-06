import { createContext,useState ,useEffect} from "react";
import { fetchDataFromApi } from "../utiles/api";
export const Context = createContext()
export const AppContext = ({children})=>{
    const [loading,setLoading] = useState(false)
    const [searchResults,setSearchResults] = useState([])
    const [selectCategories,setSelectCategories] = useState("New")
    const [mobileMenu,setMobileMenu] = useState(false)
    
const fetchSelectedCategories = (query)=>{
    setLoading(true)
    fetchDataFromApi(`search?q=${query}`).then(({contents})=>{
        console.log(contents)
        setSearchResults(contents)
        setLoading(false)

    })


}
    
    useEffect(()=>{
        fetchSelectedCategories(selectCategories)
    },[selectCategories])

   return(
       
       <Context.Provider
       value={
        {
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu

        }
       }>
        {children}
      
      </Context.Provider>
       )



}



