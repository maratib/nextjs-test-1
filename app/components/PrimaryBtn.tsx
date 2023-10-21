import React from 'react';

type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const PrimaryBtn: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <>
      <button className='outline-none focus:outline-none py-3 px-[30px] rounded-2xl text-white font-semibold text-lg bg-primary disabled:bg-disabled' disabled={disabled} onClick={onClick}>{children}</button>
    </>
  )
}

export default PrimaryBtn
