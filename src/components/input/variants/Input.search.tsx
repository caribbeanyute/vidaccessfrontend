import React, { FC, useState } from 'react';

type InputSearchProps = {
  label: string,
  type: string,
  onChangeText: (text: string) => void
}

const InputSearch: FC<InputSearchProps> = ({ label, type = 'text', onChangeText }: InputSearchProps) => {
  const [value, setValue] = useState<string>("default");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeText(e.target.value)
    setValue(e.target.value);
  };


  return (
      <input className="font-face-rb bg-gray-500 text-red-500 text-xs px-6 my-2 rounded-full"
        type={type}
        value={value}
        onChange={handleInputChange}
        defaultValue={"default"}  >
      </input>
  );
};

export default InputSearch;