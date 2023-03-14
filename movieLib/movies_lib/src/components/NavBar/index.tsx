import { useState, ChangeEvent, FormEvent } from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

import "./index.css"
 
const index = () => { 

  const [search, setSearch] = useState(""); 

  const navigate = useNavigate(); 

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(!search) return;

    navigate(`/search?q=${search}`);

    setSearch("");
    
  } 


  return (
        <nav id="navbar">
             <h2>
                <Link to="/"><BiCameraMovie/>Movies Lib</Link>
             </h2>
        <form onSubmit={handleSubmit}> 
            <input 
              type="text" 
              placeholder="Busque um filme" 
              onChange={(e) => setSearch(e.target.value)} 
              value={search} 
            />
            <button type="submit"> 
                <BiSearchAlt2/>
            </button>
        </form>
      </nav> 
  )
}

export default index;