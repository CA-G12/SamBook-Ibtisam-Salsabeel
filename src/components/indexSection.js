import index from '../assets/index.png';

const IndexSection = () => {
    return ( 
        <div className="index-page">
        <div className="content">
          <h1 className="headline">
            discover more tips, ideas, book lists,and more for educators and families
          </h1>
          <p className="para-new">
            thoughtfully created with engaging stories and fun characters that you will love
          </p>
          <button className="btn">
            Start Now
          </button>
        </div>
        <img src={index} alt="here" />
      </div>
     );
}
 
export default IndexSection;