import React, { Component }from 'react'
import { IndexLink, Link } from 'react-router'
import logoImg from '../assets/images/logo.png'
import './Header.scss'

class Header extends Component {
  showNavHandleClick() {
    let res = this.refs.xsToggleResponse
    res.style.height === "0px" ? res.style.height = "30px": res.style.height = "0px" 
  }
  componentDidmount() {
    
      
      
  
  }
  render() {
    const { isAuth, profile } = this.props
    let userAvatar = []
    if(isAuth){
      userAvatar  = [<li key="user" className="dropdown">
                        <Link to={profile.link}>
                          <img src={profile.img} alt={profile.userName}/>
                        </Link>

                        <ul className="dropdown-menu" role="menu">
                          <li><Link to="/">消息</Link></li>
                          <li><Link to="/">退出登录</Link></li>
                        </ul>
                     </li>]
    }else{
      userAvatar = [<li key="log"><Link to="/sign">登录</Link></li>,<li key="reg"><Link to="/sign">注册</Link></li>]
    }
    
    return (
      <div>
        <nav className="navbar">
          <div className="width-limit clearfix">
            <div className="logo absolute"><Link to="/" className="relative"><img src={logoImg}/></Link></div>
            <ul className="right list-inline hidden-lg xs-toggle">
              <li><Link to="/hall" className=""><span className="icon-xsnav icon-famous block"></span></Link></li>
              <li><button type="button" className="navbar-toggle block" onClick={this.showNavHandleClick.bind(this)}>
                <span className="icon-xsnav icon-menu block"></span>
              </button></li>
            </ul>
            
            <ul className="left list-inline hidden-xs nav-left" ref="userArea">
              <li><Link to="/">发现</Link></li>
              <li><Link to="/focus">关注</Link></li>
              <li><Link to="/hall">名人堂</Link></li>
            </ul>
            <ul className="right list-inline hidden-xs nav-right">
              {userAvatar}
              <li><Link to="/write">写文章</Link></li>
            </ul>
          </div>
        </nav>
        <ul className=" subnav list-inline text-center hidden-lg" id="navbar-collapse" ref="xsToggleResponse">
              <li><Link to="/focus"/>关注</li>
              <li><Link to="/sign"/>登录</li>
              <li><Link to="/sign"/>注册</li>
              <li><Link to="/write"/>写文章</li>
        </ul>
        <ul className="subnav list-inline text-center hidden-xs">
            <li><Link to="/"/>学习</li>
            <li><Link to="/"/>技术</li>
            <li><Link to="/"/>生活</li>
            <li><Link to="/"/>感想</li>
            <li><Link to="/"/>情感</li>
        </ul>
      </div>
    )
  }
}
  

export default Header
