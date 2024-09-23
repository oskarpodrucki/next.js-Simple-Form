import Header from "@/components/Header";
import SimpleForm from "@/components/SimpleForm";
import ConditionalDisplay from "@/components/ConditionalDisplay";
import ListWithObjects from "@/components/ListWithObjects";

export default function Home() {
	const items = [
		{ name: "Item 1", value: "Value 1" },
		{ name: "Item 2", value: "Value 2" },
	];

	return (
		<div>
			<Header />
			<h1>Home Page</h1>
			<SimpleForm label='Your Name' placeholder='Enter your name' />
			<ConditionalDisplay isVisible={true} />
			<ListWithObjects items={items}/>
		</div>
	);
}
