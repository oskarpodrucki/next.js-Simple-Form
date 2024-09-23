"use client";

import styles from "@/styles/ConditionalDisplay.module.css"

export default function ConditionalDisplay({ isVisible }) {
	return (
		<div>
			{isVisible ? (
				<p className={styles.content}>
					Content is visible because isVisible is true
				</p>
			) : (
				<p className={styles.noData}>No data available</p>
			)}
		</div>
	);
}
