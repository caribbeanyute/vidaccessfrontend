import React, { useState } from 'react';

type InputProps = {
  label: string

}

const Input = ({ label }: InputProps) => {
  const [status, setStatus] = useState("");


  return (
    <>
    <div className='font-face-rb text-black text-xs pt-4'>{label}</div>
    <input className="text-gray-500 py-2 px-4 mt-4 rounded-full outline outline-offset-2 outline-1 outline-grey" value={"default"}>
    </input>
    </>
  );
};

export default Input;