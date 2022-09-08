import "./App.css";
import CardBack from "./Components/Card/CardBack/CardBack";
import CardFront from "./Components/Card/CardFront/CardFront";
import Form from "./Components/Form/Form.jsx";

function App() {
	return (
		<div className="App">
			<div className="left-section">
				<div className="card-front">
					<CardFront />
				</div>
				<div className="card-back">
					<CardBack />
				</div>
			</div>
			<div className="formulario">
				<Form />
			</div>
		</div>
	);
}

export default App;
