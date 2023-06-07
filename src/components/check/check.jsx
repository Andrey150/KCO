import React, {useEffect, useState} from 'react';
import check from '../../img/Check.png'

import './check.scss';

const Check = () => {

  const [ruble, setRuble] = useState(0);
  const [penny, setPenny] = useState(0);

  const getRandom = (number) => {
    return (Math.floor(Math.random() * number) + 1);
  }

  useEffect(() => {
    setRuble(getRandom(10000))
    setPenny(getRandom(100))
  }, [])

  return (
    <div className='check'>
      <img className='check__img' src={check} alt="check"/>
      <div className="payment">
        <div className="payment__title">
          Стоимость покупок
        </div>
        <div className='payment__price'>{ruble}<span className='payment__price_penny'>,{penny < 10 ? `0${penny}` : penny}</span>&#8381;</div>
        <div className="payment__method">
          Приложите или&nbsp;прокатайте&nbsp;карту
        </div>
      </div>
    </div>
  );
};

export default Check;