import UserForm from "../components/userForm/userForm";
import { handleSignIn } from "./../../src/firebase";

const SignIn = () => {
    return(
        <>
            <UserForm formTitle='Sign In' handleAction={handleSignIn} buttonText="Sign In"></UserForm>
        </>

    );
}

export default SignIn