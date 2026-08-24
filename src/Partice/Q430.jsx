import { useState } from "react";
export default function Q430() {
  const [step, setStep] = useState(1);
  return <div><button disabled={step === 1} onClick={() => setStep(value => value - 1)}>Back</button><output>Wizard step {step}</output><button disabled={step === 3} onClick={() => setStep(value => value + 1)}>Next</button></div>;
}
