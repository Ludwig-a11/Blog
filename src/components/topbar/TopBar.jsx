import React from 'react'
import "./topbar.css"

const TopBar = () => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <a href="https://www.linkedin.com/in/luis-zarza-471b06132/" target={'_blank'}><i className="topIcon fa-brands fa-linkedin"></i></a>
        <a href="https://www.facebook.com/lzarza3" target={'_blank'}><i className="topIcon fa-brands fa-facebook"></i></a>
        <a href="https://github.com/Ludwig-a11" target={'_blank'}><i className="topIcon fa-brands fa-github"></i></a>
        <a href="https://twitter.com/home" target={'_blank'} ><i className="topIcon fa-brands fa-twitter"></i></a>
        
      </div>

      <div className='topCenter'>
        <ul className="topList">
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOG OUT</li>
        </ul>
      </div>

      <div className='topRight'>
        <img className='topImage' src="https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-6/261666633_4708386995886598_5714569319814928976_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENO8ZyF7N7QfkdUN4750LaS4a3tjEmo_1Lhre2MSaj_cRZ-KIse_6FWWqDwzOdC5eCqqyCk-IMjxSuUkUlOqo9&_nc_ohc=q4OPH8Kw9jkAX-Y3hw1&_nc_ht=scontent.fmex16-1.fna&oh=00_AfAruV5oveaz62Vi74NehK5qsbVHIfDQcqoQpe-NmYugcA&oe=6406669B" alt="Profile Picture" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar