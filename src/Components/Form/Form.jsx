import React from "react";
import { useDispatch } from "react-redux";
import "./Form.css";
import { changeCVCTo, changeNameTo, changeMMTo, changeYYTo, changeNumberTo } from "../../Redux/actions";

export default function Form() {
	const dispatch = useDispatch();

	let nameChange = (value) => {
		dispatch(changeNameTo(value));
	}

	let numberChange = (value) => {
		dispatch(changeNumberTo(value));
	}

	let mmChange = (value) => {
		dispatch(changeMMTo(value));
	}

	let yyChange = (value) => {
		dispatch(changeYYTo(value));
	}

	let cvcChange = (value) => {
		dispatch(changeCVCTo(value));
	}

	return (
		<form className="form-container">
			<div>
				<label for="Name">
					<h3>CARDHOLDER NAME</h3>
					<input
						onChange={(e) => nameChange(e.target.value)}
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
						onChange={(e) => numberChange(e.target.value)}
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
								onChange={(e) => mmChange(e.target.value)}
								type="text"
								id="expDateMM"
								name="expDate"
								placeholder="MM"
							/>
							<input
								onChange={(e) => yyChange(e.target.value)}
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
							onChange={(e) => cvcChange(e.target.value)}
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
