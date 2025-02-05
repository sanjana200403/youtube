import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/contextapi'
import { fetchDataFromApi } from '../utiles/api'
import  LeftNav from './LeftNav'
import SearchResultVideoCard from './SearchResultVideoCard'
function SearchResult() {
  const [result,setResult] = useState()
  const {searchQuery} = useParams()
  const {setLoading} = useContext(Context)
  console.log(searchQuery)
  
  
    const fetchSearchResults = ()=>{
      setLoading(true)
      fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
        console.log(res)
        setResult(res?.contents)
        setLoading(false)
      })
    }

 
    
  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h')
      fetchSearchResults() 
  },[searchQuery])

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
    <LeftNav />
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
            {result?.map((item) => {
                if (item?.type !== "video") return false;
                let video = item.video;
                return (
                    <SearchResultVideoCard
                        key={video.videoId}
                        video={video}
                    />
                );
            })}
        </div>
    </div>
</div>
  )
}

export default SearchResult
