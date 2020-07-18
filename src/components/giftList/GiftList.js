import React from 'react';
import Gift from './Gift'

const GiftList = ({list}) => {
  const gifts = list.map((gift, index) => {
    return <Gift gift={gift} key={index}/>
  })

  return (
    <div>
      {gifts}
    </div>
  )
};

export default GiftList;