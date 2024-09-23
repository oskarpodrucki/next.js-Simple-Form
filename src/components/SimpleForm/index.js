"use client";

import { useState } from "react";
import styles from "@/styles/SimpleForm.module.css";

function SimpleForm({ label, placeholder }) {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Entered:", inputValue);
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<label className={styles.label}>{label}</label>
			<input
				type='text'
				placeholder={placeholder}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className={styles.input}
			/>
			<button type='submit' className={styles.button}>
				Submit
			</button>
		</form>
	);
}

export default SimpleForm;
