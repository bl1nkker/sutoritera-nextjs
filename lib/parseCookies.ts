// Source: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-171.php

export const parseCookie = (str: string) =>{
  if (str !== undefined){
    return str.split(";").map((v) => v.split("=")).reduce((acc: any, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});
  } else{
    return { uid: null }
  }

}