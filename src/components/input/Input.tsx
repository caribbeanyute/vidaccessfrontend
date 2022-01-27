import React, { FC, useState } from 'react';

type InputProps = {
  label: string,
  type: string,
  onChangeText: (text: string) => void
}

const Input: FC<InputProps> = ({ label, type = 'text', onChangeText }: InputProps) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeText(e.target.value)
    setValue(e.target.value);
  };


  return (
    <>
      <div className='font-face-rb text-black text-xs pt-4'>{label}</div>
      <input className="text-gray-500 py-2 px-4 mt-4 rounded-full outline outline-offset-2 outline-1 outline-grey"
        type={type}
        value={value}
        onChange={handleInputChange}  >
      </input>
      </>
  );
};

export default Input;