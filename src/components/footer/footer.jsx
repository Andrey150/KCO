import React from 'react';
import Back from '../../img/back.svg';
import Worker from '../../img/worker.svg';

import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="wrapper">
        <div className="footer__btns">
          <button className='btn'><img src={Back} alt="back"/></button>
          <button className='btn'>
            <img src={Worker} alt="worker"/>
            <span>Вызов сотрудника</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;