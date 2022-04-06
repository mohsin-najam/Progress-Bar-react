import "./index.css";
import React,{useEffect, useState,} from "react";

import ProgressBar from "./Progress"


export default function App() {
    const [value, setValue] =useState(0);

    useEffect(()=>{
      const interval = setInterval(()=>{
        setValue((oldValue)=>{
          const newValue = oldValue + 10;

          if(newValue === 100){
            clearInterval(interval);
          }
          return newValue;
        })
      },400)
    },[]);
      return <ProgressBar value={value} max={100} />
}
