import { UserForm } from "../components";
import { handleSignUp } from "./../../src/firebase";

const SignUp = () => {
    return(
        <>
            <UserForm formTitle='Sign Up' handleAction={handleSignUp} buttonText="Sign Up"></UserForm>
        </>
    );
}

export default SignUp