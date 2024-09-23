"use client";

import styles from "@/styles/ListWithObjects.module.css"

export default function ListWithObjects({ items }) {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<li key={index}>
					{item.name}: {item.value}
				</li>
			))}
		</ul>
	);
}
