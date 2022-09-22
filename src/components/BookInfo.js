const BookInfo = ({ obj, handleClose, showPop }) => {
  const {
    thumbnail,
    previewLink,
    pageCount,
    publishedDate,
    title,
    authors,
    publisher,
    description,
  } = obj;
  return (
    < >
      <div className="pop-container">
        <img src={thumbnail} alt="book" className="book-img" />
      </div>
      <div className="pop-content">
        <button onClick={() => handleClose()}>close</button>
        <h1 className="book-title">{title}</h1>
        <p className="book-author"> {authors}</p>
        <ul className="stars">
          <li className="star">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
        </ul>
        <p className="book-desc">{description}</p>
        <a href={previewLink}> Book Link</a>
        <p> publisher : {publisher} </p>
        <span>Page Count : {pageCount} </span>
        <span>Published Date : {publishedDate} </span>
      </div>
    </>
  );
};

export default BookInfo;
