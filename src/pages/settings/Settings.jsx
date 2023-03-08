import "./settings.css"
import Sidebar from "../../components/sidebar/SideBar"

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img src="https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-6/261666633_4708386995886598_5714569319814928976_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENO8ZyF7N7QfkdUN4750LaS4a3tjEmo_1Lhre2MSaj_cRZ-KIse_6FWWqDwzOdC5eCqqyCk-IMjxSuUkUlOqo9&_nc_ohc=q4OPH8Kw9jkAX-Y3hw1&_nc_ht=scontent.fmex16-1.fna&oh=00_AfAruV5oveaz62Vi74NehK5qsbVHIfDQcqoQpe-NmYugcA&oe=6406669B" alt="Profile Picture" />
            <label htmlFor="fileInput">
              <i className="settingsProfilePicIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Ludwig"/>
          <label>Email</label>
          <input type="email" placeholder="Ludwig@gmail.com"/>
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings