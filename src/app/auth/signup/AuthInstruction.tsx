import React from 'react';

const AuthInstruction = ({text}) => {
  return (
    <div className='flex items-center justify-start'>
      <span>
        <img src='/tick-circle.svg' alt="tick-circle" />
      </span>
      <p className='text-[.9rem] text-deepGrey ml-1'>
        {text}
      </p>
    </div>
  );
};

export default AuthInstruction;