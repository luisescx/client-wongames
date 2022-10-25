import React, { InputHTMLAttributes, useCallback, useState } from "react";
import * as S from "./styles";

export type TextFieldProps = {
  initialValue?: string;
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,

  initialValue = "",
  onInput,
  icon,
  disabled = false,
  iconPosition = "left",
  error,
  name,
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
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        <S.Input
          type="text"
          disabled={disabled}
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
