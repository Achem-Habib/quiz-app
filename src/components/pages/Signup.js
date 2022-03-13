
import signup_image from "../../assets/images/signup.svg";
import SignupForm from "../SignupForm";


export default function Signup() {
	return (
		<div>
			<h1 className="text-4xl font-bold mx-6 mt-6">Create an account</h1>

		    <div className="lg:grid grid-cols-2 mb-20">
		        <div className="hidden lg:block max-w-sm w-auto mt-16 ml-24">
		            <img src={signup_image} alt="signup" />
		        </div>
		        <SignupForm />
		     </div>
		</div>
		);
}