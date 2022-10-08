import React, { InputHTMLAttributes, useCallback, useState } from "react";
import * as S from "./styles";

export type TextFieldProps = {
  labelFor?: string;
  initialValue?: string;
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = "",
  initialValue = "",
  onInput,
  icon,
  disabled = false,
  iconPosition = "left",
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
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        <S.Input
          id={labelFor}
          type="text"
          disabled={disabled}
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextField;
