import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"

const TopBar = () => {

  const user = false;


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
          <li className='topListItem'>
            <Link className='link' to='/'>HOME</Link>
          </li>
          <li className='topListItem'><Link className='link' to='/about'>ABOUT</Link></li>
          <li className='topListItem'><Link className='link' to='/contact'>CONTACT</Link></li>
          <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
          <li className='topListItem'>{user && "LOG OUT"}</li>
        </ul>
      </div>

      <div className='topRight'>
        {
          user ? (
            <img 
              className='topImage' 
              src="https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-6/261666633_4708386995886598_5714569319814928976_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENO8ZyF7N7QfkdUN4750LaS4a3tjEmo_1Lhre2MSaj_cRZ-KIse_6FWWqDwzOdC5eCqqyCk-IMjxSuUkUlOqo9&_nc_ohc=q4OPH8Kw9jkAX-Y3hw1&_nc_ht=scontent.fmex16-1.fna&oh=00_AfAruV5oveaz62Vi74NehK5qsbVHIfDQcqoQpe-NmYugcA&oe=6406669B" 
              alt="Profile Picture" 
            />
          ) : (
            <ul className='topList'>
              <li className="topListItem">
                <Link className='link' to='/login'>LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className='link' to='/register'>REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar