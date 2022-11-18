import Step from "@/components/step/step.component";

import { Container } from "./step-list.style";

const StepList = () => {
  const stepsArray = [
    {
      id: 1,
      type: "check",
      title: "成功上傳檔案",
      line: true,
    },
    {
      id: 2,
      title: "加入簽名檔",
      line: true,
    },
    {
      id: 3,
      title: "確認檔案",
      icon: {
        type: "regular",
      },
      line: true,
    },
    {
      id: 4,
      title: "下載檔案",
      icon: {
        type: "regular",
      },
    },
  ];

  return (
    <Container>
      {stepsArray.map((step) => (
        <Step key={step.id} {...step} />
      ))}
    </Container>
  );
};

export default StepList;
