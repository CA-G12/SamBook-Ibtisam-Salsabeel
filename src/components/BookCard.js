import BookInfo from "./BookInfo";

const BookCard = ({ data }) => {
  console.log(data.volumeInfo.imageLinks);
  return data.volumeInfo.imageLinks ? (
    <div className="image-card">
      <img src={data.volumeInfo.imageLinks.smallThumbnail} alt="image" />
    </div>
  ) : null;
};

export default BookCard;
