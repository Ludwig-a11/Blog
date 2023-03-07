import "./singlepost.css"

const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet. 
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor"> Author: <b>Ludwig</b></span>
          <span className="singlePostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a natus ut dicta quasi at error quae pariatur. Veritatis similique, reiciendis sapiente reprehenderit sit sequi. Culpa sit quam consectetur voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a natus ut dicta quasi at error quae pariatur. Veritatis similique, reiciendis sapiente reprehenderit sit sequi. Culpa sit quam consectetur voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a natus ut dicta quasi at error quae pariatur. Veritatis similique, reiciendis sapiente reprehenderit sit sequi. Culpa sit quam consectetur voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a natus ut dicta quasi at error quae pariatur. Veritatis similique, reiciendis sapiente reprehenderit sit sequi. Culpa sit quam consectetur voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a natus ut dicta quasi at error quae pariatur. Veritatis similique, reiciendis sapiente reprehenderit sit sequi. Culpa sit quam consectetur voluptatum.
        </p>
      </div>
      
    </div>
  )
}

export default SinglePost