import React from "react";
import "./Form.css";

export default function Form() {
	return (
		<form className="form-container">
			<div>
				<label for="Name">
					<h3>CARDHOLDER NAME</h3>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Example: Jane Appleseed"
					/>
				</label>
			</div>

			<div>
				<label for="CardNumber">
					<h3>CARD NUMBER</h3>
					<input
						type="number"
						id="cardNumber"
						name="cardNumber"
						placeholder="Example: 1234 5678 9123 0000"
					/>
				</label>
			</div>

			<div className="date-cvc">
				<div>
					<label for="expDate">
						<h3>EXP. DATE (MM/YY)</h3>
						<div className="expire">
							<input
								type="text"
								id="expDateMM"
								name="expDate"
								placeholder="MM"
							/>
							<input
								type="number"
								id="expDateYY"
								name="expDate"
								placeholder="YY"
							/>
						</div>
					</label>
				</div>

				<div>
					<label for="CVC">
						<h3>CVC</h3>
						<input
							type="number"
							id="CVC"
							name="CVC"
							placeholder="e.g. 123"
						/>
					</label>
				</div>
			</div>

			<button class="button-form" type="submit">
				CONFIRM
			</button>
		</form>
	);
}
