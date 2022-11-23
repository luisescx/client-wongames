import FormResetPassword from "components/FormResetPassword";
import Auth from "templates/Auth";

export default function ResetPassword() {
  return (
    <Auth title="Request new password">
      <FormResetPassword />
    </Auth>
  );
}
