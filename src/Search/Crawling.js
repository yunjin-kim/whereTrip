import React from "react";
import axios from 'axios';
import request from 'request'
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

const Crawling = () => {

  // async function getHTML(){
  //   try{
  //     const response = await axios.get(
  //       "https://place.map.kakao.com/1376253571"
  //     )
  //     console.log(response.data);
  //   }
  //   catch(e){
  //     console.error(e);
  //   }
  // }

  // getHTML();

  // getHTML()
  // .then(html=>{
  //   let titleList = [];
  //   const $ = cheerio.load(html.data);
  //   const bodyList = $("span.bg_present");

  //   return bodyList;
  // })
  // .then(res => console.log(res));




  return(
    <>
      {/* <button onClick={Crawling}>크롤링</button> */}
    </>
  )
}

export default Crawling;