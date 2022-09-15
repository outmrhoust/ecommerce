import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
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
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};
export default SignIn;
