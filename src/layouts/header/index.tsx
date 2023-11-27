import { Link } from 'react-router-dom';
import { ROUTER } from '@/constants/path';
import dotIcon from '@/assets/img/dots-menu.png';
import searchIcon from '@/assets/img/search.png';
import notificationIc from '@/assets/img/bell.png';
import settingIc from '@/assets/img/setting.png';
import questionIc from '@/assets/img/question.png';
import avatar from '@/assets/img/avatar.jpg';
import logo from '@/assets/img/Logo.png';

import './style.scss';

const Header = () => {
  return (
    <>
      <header>
        <div className="left-header">
          <Link to="/">
            <img src={dotIcon} alt="icon menu" />
          </Link>
          <span>SharePoint</span>
        </div>
        <div className="search-input">
          <button type="submit">
            <img src={searchIcon} alt="search icon" />
          </button>
          <input type="text" placeholder="Search in SharePoint" />
        </div>
        <button type="submit" className="search-mb">
          <img src={searchIcon} alt="search icon" />
        </button>
        <ul className="right-header">
          <li>
            <Link to="/">
              <img src={notificationIc} alt="icon notificationIc" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={settingIc} alt="icon settingIc" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={questionIc} alt="icon questionIc" />
            </Link>
          </li>
          <li>
            <Link to="/" className="avatar">
              <img src={avatar} alt="icon avatar" />
            </Link>
          </li>
        </ul>
      </header>
      <div className="sub-header">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="link-to-page">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href={ROUTER.PRODUCT_PAGE}>Products</a>
            </li>
            <li>
              <a href="/">List</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
