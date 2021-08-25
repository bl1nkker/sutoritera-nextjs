import React from "react";

interface Props {
  labelName: string;
  inputValue: string;
  inputName: string;
  inputType?: string;
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputPlaceholder: string;
}

export const InputField: React.FC<Props> = ({
  labelName,
  inputValue,
  inputName,
  inputType,
  inputOnChange,
  inputPlaceholder,
}) => {
  return (
    <>
      <label>{labelName}</label>
      <input
        value={inputValue}
        name={inputName}
        type={inputType}
        onChange={(event) => inputOnChange(event)}
        placeholder={inputPlaceholder}
      />
      <br />
    </>
  );
};
