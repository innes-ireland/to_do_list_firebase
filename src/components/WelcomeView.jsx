import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import login from "../logos/login.png"


export default function WelcomeView() {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    return (
        <div className="welcome_view_wrapper">
            <div className="welcome_view-text">
                <h2> Welcome to Innes' to-do list app</h2>
                <h4> Sign in with your google account here</h4>
            </div>
            <div className="welcome_view-button">
                <button>
                    <img onClick={googleSignIn} src={login} alt="login here with your google account" type="button" />
                </button>
            </div>
        </div>
    )

}