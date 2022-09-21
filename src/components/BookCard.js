import BookInfo from './BookInfo';

const BookCard = ({data}) => {
    return (  
        data.map((book, i) => {
            return (
                <div className="image-card" key={i}>
                    <img src={book.volumeInfo.canonicalVolumeLink}></img>
                </div>
            )
        })
        // <>
        //     <BookInfo />
        // </>
        
    );
}
 
export default BookCard;