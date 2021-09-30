import React from "react";
// import axios from 'axios';
// import cheerio from 'cheerio';

// let html = "";

// async function getHtml(){
//   try{
//     return await axios.get(
//       "https://place.map.kakao.com/8199114"
//     )
//   }
//   catch(e){
//     console.error(e);
//   }
// }

// async function getImg(){
//   const html = await getHtml();
//   console.log(html)
//   if(!html){
//     html = await getHtml();
//   }

//   const $ = cheerio.load(html.data);
//   let smp = {};
//   $("#kakoWrap #kakoContext #mArticle .cont_photo .photo_area ul")
//     .first("li")
// }

// getImg();

  

const Crawling = () => {




  return(
    <>
      <button>크롤링</button>
    </>
  )
}

export default Crawling;