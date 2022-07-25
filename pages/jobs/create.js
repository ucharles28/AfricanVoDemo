import { useState } from "react";
import BudgetRange from "../../client-onboarding/BudgetRange";
import JobDetails from "../../client-onboarding/JobDetails";
import JobTitle from "../../client-onboarding/JobTitle";
import SelectServiceType from "../../client-onboarding/SelectServiceType";

export default function CreateJob()  {
    const [step, setstep] = useState(1);
    const [projectName, setProjectName] = useState('');
    const [talentType, setTalentType] = useState('');
    const [jobDetails, setJobDetails] = useState({});
    // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1); 
  };

    switch (step) {
        case 1: 
        return <JobTitle nextStep={nextStep} setProjectName={setProjectName} projectName={projectName} />
        case 2:
            return <SelectServiceType nextStep={nextStep} prevStep={prevStep} talentType={talentType} setTalentType={setTalentType}/>
        case 3:
            return <JobDetails nextStep={nextStep} prevStep={prevStep} setJobDetails={setJobDetails} />
        case 4:
            return <BudgetRange nextStep={nextStep} prevStep={prevStep} jobDetails={jobDetails} talentType={talentType} projectName={projectName}/>
    }
}