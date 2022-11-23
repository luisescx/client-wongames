import FormProfile, { FormProfileProps } from "components/FormProfile";
import Profile from "templates/Profile";
import { GetServerSidePropsContext } from "next";
import protectedRoutes from "utils/protected-routes";
import { initializeApollo, UserSession } from "utils/apollo";
import { QueryProfileMe } from "graphql/generated/QueryProfileMe";
import { QUERY_PROFILE_ME } from "graphql/queries/profile";

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const newSession = session as UserSession;
  const apolloClient = initializeApollo(null, newSession);

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  });

  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email
    }
  };
}
