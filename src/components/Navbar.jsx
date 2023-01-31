import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import login from "../logos/login.png"
import logout from "../logos/logout.png"

export default function Navbar() {
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const signOut = () => {
        auth.signOut();
    }

    return (
        <div className="navBar_wrapper">
            <div className="blurb">
                <h2> Welcome to Innes' to do list App</h2>
                <h5> A react and firebase project</h5>
            </div>
            <div className="navbar_button">
                {user ? (
                    <button> <img src={logout} onClick={signOut} className="signOut_btn" alt="sign out from the app here" type="button" /> </button> // if the state shows a user logged in it will display the signout button
                ) : (
                    <button> <img src={login} onClick={googleSignIn} className="signIn_btn" alt="sign into the app with google here" type="button" /></button> // if state shows no user then sign in button will be displayed 
                )}
            </div>
        </div>
    )
}