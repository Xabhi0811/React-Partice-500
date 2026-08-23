import Bmi from "./bmi";
import Calculator from "./calculator";
import CharacterCounter from "./character-counter";
import Coin from "./coin";
import ColorPicker from "./color-picker";
import Counter from "./counter";
import Dice from "./dice";
import DigitalClock from "./digital-clock";
import Password from "./password";
import RandomNumber from "./random-number";
import ResetCounter from "./reset-counter";
import Temperature from "./temperature";
import ThemeToggle from "./theme-toggle";
import Tip from "./tip";
import Toggle from "./toggle";
import WordCounter from "./word-counter";

const Card = ({ title, children }) => (
	<article className="exercise-card">
		<h2>{title}</h2>
		{children}
	</article>
);

const exercises = [
	["Counter", Counter],
	["Reset counter", ResetCounter],
	["Toggle switch", Toggle],
	["Character counter", CharacterCounter],
	["Word counter", WordCounter],
	["Show password", Password],
	["Celsius to Fahrenheit", Temperature],
	["BMI calculator", Bmi],
	["Tip calculator", Tip],
	["Simple calculator", Calculator],
	["Color picker", ColorPicker],
	["Theme toggle", ThemeToggle],
	["Random number", RandomNumber],
	["Dice roller", Dice],
	["Coin flip", Coin],
	["Digital clock", DigitalClock],
];

const Exercises = () => (
	<section className="exercise-grid">
		{exercises.map(([title, Component]) => (
			<Card key={title} title={title}>
				<Component />
			</Card>
		))}
	</section>
);

export default Exercises;
