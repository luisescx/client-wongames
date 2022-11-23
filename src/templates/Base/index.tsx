import { Container } from "components/Container";
import Footer from "components/Footer";
import Menu from "components/Menu";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import * as S from "./styles";

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  const [session, setSession] = useState<Session | null>(null);

  const { status } = useSession();

  useEffect(() => {
    const getUserSession = async () => {
      const userSession = await getSession();
      setSession(userSession);
    };

    getUserSession();
  }, []);

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} loading={status === "loading"} />
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
