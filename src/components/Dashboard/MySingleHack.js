import React, { useEffect, useState } from "react";
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams,useHistory} from "react-router-dom";
import MyHacksCard from "./MyHacksCard";


export default function MySingleHack() {
    const [singleHack,setSingleHack]=useState({});
    const params = useParams();
    const{push}= useHistory();
    useEffect(()=>{
      axiosWithAuth()
      .get(`/howTo/${params.id}`)
      .then(res=>setSingleHack(res.data))
      .catch(err=>console.log('singlehack err',err))
   },[])
   const updateHandler = ()=>{
    push(`/edithack/${params.id}`);
  } 
    return (
        <div>
           <MyHacksCard /> 
           <button>EDIT</button>
        </div>
    )
}

