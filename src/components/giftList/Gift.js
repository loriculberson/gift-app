import React from 'react';

const Gift = ({gift}) => {
  return (
    <div>
      {gift.name} | {gift.gift}
    </div>
  );
};

export default Gift;