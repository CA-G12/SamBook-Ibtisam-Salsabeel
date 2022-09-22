import BookInfo from "./BookInfo";

const BookCard = ({ data }) => {
  return data.volumeInfo.imageLinks ? (
      <div className="image-card">
          <img src={data.volumeInfo.imageLinks.smallThumbnail} alt="image" />
          <p className="title-card">{data.volumeInfo.title.slice(0,20)}</p>
      </div>
  ) : null;
};

export default BookCard;
