import loginImage from "../../assets/images/login.svg";
import LoginForm from "../LoginForm";

export default function Login() {
	return (
		<div>
			<h1 className="text-4xl font-bold mx-6 mt-6">Login to your account</h1>

		    <div className="lg:grid grid-cols-2 mb-20">
		        <div className="hidden lg:block max-w-sm w-auto mt-16 ml-24">
		            <img src={loginImage} alt="signup" />
		        </div>
		        <LoginForm />
		    </div>
		</div>
		);
}