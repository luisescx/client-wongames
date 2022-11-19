import { Container } from "components/Container";
import Footer from "components/Footer";
import Menu from "components/Menu";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

import * as S from "./styles";

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getUserSession = async () => {
      const userSession = await getSession();
      setSession(userSession);
    };

    getUserSession();
  }, []);

  console.log("session", session);

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
};

export default Base;
