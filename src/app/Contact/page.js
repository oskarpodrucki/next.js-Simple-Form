import Header from "@/components/Header";
import SimpleForm from "@/components/SimpleForm";

export default function Contact() {
	return (
		<div>
			<Header />
			<h1>Contact Page</h1>
			<SimpleForm label='Your Email' placeholder='Enter your email' />
		</div>
	);
}
