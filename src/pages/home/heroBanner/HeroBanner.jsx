import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';


import "./style.scss";
import useFetch from '../../../hooks/useFetch';



const HeroBanner = () => {
    const [background,setBackground]=useState("");
    const [query,setQuery]=useState("");
    const navigate=useNavigate();
    const {url} = useSelector((state) => state.home);
    const {data,loading} =useFetch("/movie/upcoming");

    useEffect(()=>{
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]
        ?.backdrop_path;
        setBackground(bg);
    },[data])

    const searchQueryHandle =(event) =>{
        if(event.key==="Enter" && query.length>0 ){
            navigate(`/search/${query}`)
        }
    }


  return (
    <div className="heroBanner">

        <div className="backdrop-img">
            
        </div>
        <div className='wrapper'>
            <div className='heroBannerContent'>
                <span className="title">Welcome</span>
                <span className="subtTitle">
                    Millions of movies, TV shows and people to discover.
                    Explore now.
                </span>
                <div className="searchInput">
                    <input 
                        type='text'
                        placeholder='Search for a movi or tv Show...'
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchQueryHandle}
                    />
                    <button>Search</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroBanner
