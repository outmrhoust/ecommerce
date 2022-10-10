// import { Fragment, useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from './authentication.styles'
const Authentication = () => {
  /* Checking if the user is already logged in. If the user is logged in, it will create a user
  document in the firestore database. */
  //   useEffect(() => {
  //     async function getResult(){
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     getResult();
  //   }, []);

  return (
    <AuthenticationContainer>
      <SignInForm />

      <SignUpForm />
    </AuthenticationContainer>

    // {/* <button onClick={signInWithGoogleRedirect}>
    //   sign in with google redirect
    // </button> */}
  );
};
export default Authentication;
