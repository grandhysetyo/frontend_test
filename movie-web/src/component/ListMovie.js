import React, {useState,  useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux";
import slugify from 'react-slugify';
import API from '../api/request'
import Modal from './Modal';



const ListMovie = () => {    
    const [show, setShow] = useState(false);
    const [source, setSource] = useState('');

    const search = useSelector((state) => state.search);
    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    const fetchData = (bySearch) => {
        API.getListMovie(bySearch).then((result) => {                    
            if(result.Response === 'True'){                                         
                dispatch({ 
                    type: 'getMovieData', 
                    data: result.Search.map((el) => { 
                        return(
                            {
                                ...el, 
                                slug:slugify(el.Title)
                            }
                        )
                    })
                })                
            } else{
                console.log(result.Error)
            }
        })        
    }
    useEffect(() => {          
        fetchData(search);   
        // eslint-disable-next-line                              
    },[search])   

        
    const handleModal = (src) => {
        setShow(true)
        setSource(src) 
    }
   
    return (       
        <div className="list">            
            {movies.map((data, index)=> 
                <div className="card-movie" key={index}>
                    <img onClick={() => handleModal(data.Poster)} src={data.Poster} alt=""/>
                    <h4>{data.Title}</h4>
                    <span>{data.Type.toUpperCase()} | {data.Year}</span>
                    <Link to={`detail/${data.slug}`} className="detail">Detail</Link>
                </div>
            )}            
            <Modal onClose={()=> setShow(false)} show={show} img={source} />                           
        </div>
    )
}

export default (ListMovie)
