import { useState } from "react";
import TalentType from "../talents-onboarding/TalentType"

export default function Portfolio() {
    //state for steps
  const [step, setstep] = useState(1);
  const [talentType, setTalentType] = useState('');

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1); 
  };

    return ( 
        <di>
            {step === 1 && <TalentType nextStep={nextStep} setTalentType={setTalentType} />}

        </di>
    );
}