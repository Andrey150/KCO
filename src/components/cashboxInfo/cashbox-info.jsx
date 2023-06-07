import React from 'react';

import './cashbox-info.scss';

const CashboxInfo = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  const getMonth = date.getMonth() + 1;
  const getDate = date.getDate();
  const getHour = date.getHours();
  const getMinutes = date.getMinutes();

  const formattedDate = `${getDate < 10 ? `0${getDate}` : getDate}.${getMonth < 10 ? `0${getMonth}` : getMonth}.${getYear}`;
  const formattedHours = `${getHour < 10 ? `0${getHour}` : getHour}:${getMinutes < 10 ? `0${getMinutes}` : getMinutes}`;

  return (
    <div className='cashbox-info'>
      <span>{formattedDate}</span> <span>{formattedHours}</span> <span>Касса #1</span>
    </div>
  );
};

export default CashboxInfo;