import React  from "react";

export   const formatTitle= (str:string):string =>{
    return str.replace(/ /g, '-');
}