import { StepIcon, CheckIcon } from "@/components/ui/steps/steps.component";

import { StyledStep, StepTitle, StepLine } from "./step.style";

const Step = ({ id, type, icon = {}, title, line }) => {
  return (
    <StyledStep>
      {type === "check" ? (
        <CheckIcon {...icon} />
      ) : (
        <StepIcon {...icon}>{id}</StepIcon>
      )}
      <StepTitle>{title}</StepTitle>
      {line && <StepLine />}
    </StyledStep>
  );
};

export default Step;
