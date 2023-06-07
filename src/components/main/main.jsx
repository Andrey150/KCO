import React from 'react';
import CashboxInfo from '../cashboxInfo/cashbox-info';
import Check from '../check/check';
import Arrow from '../../img/Arrow.svg'

import './main.scss'

const Main = () => {

  return (
    <div className="background">
      <div className='main'>
        <div className="wrapper">
          <CashboxInfo/>
          <Check/>
          <figure className='arrow'>
            <img src={Arrow} alt="arrow"/>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Main;