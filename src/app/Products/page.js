import Header from "@/components/Header";
import ListWithObjects from "@/components/ListWithObjects";

export default function Products() {
	const products = [
		{ name: "Product A", value: "$10" },
		{ name: "Product B", value: "$20" },
	];

	return (
		<div>
			<Header />
			<h1>Products</h1>
			<ListWithObjects items={products} />
		</div>
	);
}
