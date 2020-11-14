import React from 'react';
import { Button } from './Button';

/** svg imports */
import logo from '../assets/images/logo.svg';
import {ReactComponent as IconFB} from '../assets/images/icon-facebook.svg';
import {ReactComponent as IconYT} from '../assets/images/icon-youtube.svg';
import {ReactComponent as IconTW} from '../assets/images/icon-twitter.svg';
import {ReactComponent as IconPI} from '../assets/images/icon-pinterest.svg';
import {ReactComponent as IconIG} from '../assets/images/icon-instagram.svg';
import logoFooter from '../assets/images/logo-footer.svg';

/**
 * Website layout
 * @param children Main body
 */
export const Layout: React.FC = ({children}) => (
  <>
    <header>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='menu'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog </li>
                <li>Careers</li>
            </ul>
        </div>
        <div className='action'> <Button text='Request Invite' type='button' clicked={()=>false} /></div>
    </header>
    <main>{children}</main>
    <footer>
      <div className='logo'>
        <img src={logoFooter} alt="" />
        <div>
              <IconFB/>
              <IconYT/>
              <IconTW/>
              <IconPI/>
              <IconIG/>
            </div>
      </div>
      <div className='menu'>
        <ul>
          <li><a href="">About us</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Support</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>
      </div>
      <div className='action'> 
      <Button text='Request Invite' type='button' clicked={()=>false} />
      <p> &copy; Easybank. All rights Reserved </p>
      </div>
    </footer>
  </>
);
