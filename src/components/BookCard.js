import BookInfo from './BookInfo';

const BookCard = ({data}) => {
            return (
   
                <div className="image-card" >
                    <img src={data.volumeInfo.imageLinks.smallThumbnail} alt='image'/>
                </div>
            )
  
            }
 
export default BookCard;