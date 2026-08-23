import ArrayTask from "./ArrayTask";
import BatchTask from "./BatchTask";
import CounterTask from "./CounterTask";
import EffectData from "./EffectData";
import FormTask from "./FormTask";
import ObjectTask from "./ObjectTask";
import PreviousTask from "./PreviousTask";
import ReducerCount from "./ReducerCount";
import RefInput from "./RefInput";
import SearchTask from "./SearchTask";
import TitleTask from "./TitleTask";
import TodoReducer from "./TodoReducer";
import ToggleTask from "./TogTask";

const Task = ({ title, children }) => (
  <article className="hook-task">
    <h2>{title}</h2>
    <div className="hook-demo">{children}</div>
  </article>
);

const HookTasks = () => (
  <section className="hook-tasks">
    <header>
      <h1>Hook Practice</h1>
      <p>Each exercise is independent and arranged vertically for focused practice.</p>
    </header>
    <Task title="Create a counter using useState">
      <CounterTask />
    </Task>
    <Task title="Create a toggle button using useState">
      <ToggleTask />
    </Task>
    <Task title="Store an object and update one field">
      <ObjectTask />
    </Task>
    <Task title="Store an array and add or remove items">
      <ArrayTask />
    </Task>
    <Task title="Manage multiple form fields with one state object">
      <FormTask />
    </Task>
    <Task title="Update state from the previous state">
      <BatchTask />
    </Task>
    <Task title="Fetch-style effect with cleanup">
      <EffectData />
    </Task>
    <Task title="Sync document title with state">
      <TitleTask />
    </Task>
    <Task title="Build a debounced search input">
      <SearchTask />
    </Task>
    <Task title="Focus an input with useRef">
      <RefInput />
    </Task>
    <Task title="Store the previous render value">
      <PreviousTask />
    </Task>
    <Task title="Build a reducer for a counter">
      <ReducerCount />
    </Task>
    <Task title="Build a reducer for a todo list">
      <TodoReducer />
    </Task>
  </section>
);

export default HookTasks;
