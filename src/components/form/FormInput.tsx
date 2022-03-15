import React, { ChangeEvent, FC, useState } from 'react';

type InputProps = {
  label: string,
  type: string,
  htmlFor?: string,
  className?: string,
  onChangeText: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ className, label, type = 'text', onChangeText, htmlFor }: InputProps) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeText(e.target.value)
    setValue(e.target.value);
  };


  return (
    <>
      <div className={className ? className : "mb-4"}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={htmlFor}>
          {label}
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
           id="username" type="text" placeholder={label} onChange={onChangeText} >
          </input>
      </div>
    </>
  );
};

export default Input;