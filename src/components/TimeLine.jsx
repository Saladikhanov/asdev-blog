import { useContext } from 'react'
import React from "react";
import Msg from "./Msg"
import AppContext from "../context/AppContext";


const TimeLine = () => {
    const appContext = useContext(AppContext);
    const msgArr = appContext.msg;
    
   
    return (
        
           <div className="timeline">
               {msgArr && Object.values(msgArr).map((item) => {
                   console.log(item);
                   
                   return (
                    
                    <Msg id={item.id} user={item.userName} date={item.date} content={item.content}>
                    </Msg>
                   )
               })}
           </div>
    )
}

export default TimeLine;