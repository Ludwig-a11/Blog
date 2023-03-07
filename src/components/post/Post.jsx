import "./post.css"

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="https://i.insider.com/601441dd6dfbe10018e00c25?width=1136&format=jpeg" alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Code</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet 
        </span>
        <hr />
        <span className="postDate">1 hr ago</span>

      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga repellendus saepe, voluptates impedit eum cupiditate quisquam autem consequatur architecto, ipsa ducimus doloribus perferendis? Ad pariatur voluptates eum numquam sed?
      </p>
    </div>
  )
}

export default Post