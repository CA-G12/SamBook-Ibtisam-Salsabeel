import { useState } from "react";
import BookInfo from "./BookInfo";


const BookCard = ({ data:{volumeInfo} }) => {
  const [showPop,setShow]=useState({display:'none'});
  const handleClose= ()=>{
    setShow({display:'none'})
  }

const obj={
    thumbnail :volumeInfo.imageLinks.thumbnail,
    previewLink:volumeInfo.previewLink,
    pageCount:volumeInfo.pageCount,
    publishedDate:volumeInfo.publishedDate,
    title:volumeInfo.title,
    authors:volumeInfo.authors,
    publisher:volumeInfo.publisher,
    description:volumeInfo.description,
   }

  return volumeInfo.imageLinks ? (
    <div className="image-card" >
      <img src={volumeInfo.imageLinks.smallThumbnail} alt="api pgo" onClick={()=>{
       setShow({display:'block'})
      }}  />
      <p className="title-card">{data.volumeInfo.title.slice(0,20)}</p>
      <div style={showPop}>
      <BookInfo  handleClose={handleClose} obj={obj} showPop={showPop}/>
      </div>
    </div>
  ) : null;
};

export default BookCard;
