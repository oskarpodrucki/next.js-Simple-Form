import Header from "@/components/Header";
import ConditionalDisplay from "@/components/ConditionalDisplay";

export default function About() {
	return (
		<div>
			<Header />
			<h1>About Us</h1>
			<ConditionalDisplay isVisible={false} />
		</div>
	);
}
