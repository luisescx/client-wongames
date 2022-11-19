import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Email, Lock } from "@styled-icons/material-outlined";
import Button from "components/Button";
import TextField from "components/TextField";
import Link from "next/link";
import * as S from "./styles";
import { FormWrapper, FormLink } from "components/Form";

const FormSignIn = () => {
  const [values, setValues] = useState({});
  const { push } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: "/"
    });

    if (result?.url) {
      return push(result?.url);
    }

    console.error("email ou senha inválida");
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput("email", v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput("password", v)}
          icon={<Lock />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" fullWidth size="large">
          Sign in now
        </Button>

        <FormLink>
          Don’t have an account?{" "}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
