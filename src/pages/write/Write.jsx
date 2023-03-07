import "./write.css"

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=400" alt="write image" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder="Tell your story..." 
            type="text" className="writeInput writeText" >
          </textarea>
        </div>
        <butt className="writeSubmit">Publish</butt>
      </form>
    </div>
  )
}

export default Write