import React, { InputHTMLAttributes, useCallback, useState } from "react";
import * as S from "./styles";

export type TextFieldProps = {
  labelFor?: string;
  initialValue?: string;
  label?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = "",
  initialValue = "",
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value;
      setValue(newValue);

      !!onInput && onInput(newValue);
    },
    [onInput]
  );

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        <S.Input
          id={labelFor}
          type="text"
          onChange={onChange}
          value={value}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextField;
