import "./sidebar.css"


const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-6/261666633_4708386995886598_5714569319814928976_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENO8ZyF7N7QfkdUN4750LaS4a3tjEmo_1Lhre2MSaj_cRZ-KIse_6FWWqDwzOdC5eCqqyCk-IMjxSuUkUlOqo9&_nc_ohc=q4OPH8Kw9jkAX-Y3hw1&_nc_ht=scontent.fmex16-1.fna&oh=00_AfAruV5oveaz62Vi74NehK5qsbVHIfDQcqoQpe-NmYugcA&oe=6406669B" alt="profile pic" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aliquam reprehenderit exercitationem, tempora aspernatur dolorem itaque repudiandae laudantium sit.
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Code</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-github"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar