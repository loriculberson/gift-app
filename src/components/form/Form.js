import React from 'react';

const Form = props => {
  const { handleInput, nameValue, giftValue, submitGift } = props
  return (
   <form>
     <input 
      placeholder="name"
      name="name"
      value={nameValue}
      onChange={handleInput}
    />
     <input 
        placeholder="gift"
        name="gift"
        value={giftValue}
        onChange={handleInput}
      />
     <button onClick={submitGift}>Submit</button>
   </form>
  );
};

export default Form;