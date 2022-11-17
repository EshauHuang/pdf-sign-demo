import { StepIcon } from "@/components/ui/steps/steps.component";

import {
  StyledStepCard,
  StepIndex,
  StepCardTitle,
  StepCardCaptions,
  StepCardPhoto,
  Container,
  Title,
  Body,
} from "./step-detail.style";

import fileUpload from "@/assets/illustration/file-upload.png";
import signing from "@/assets/illustration/signing.png";
import sending from "@/assets/illustration/sending.png";

const StepCard = (props) => {
  const { id, icon, title, captions, imageUrl } = props;
  return (
    <StyledStepCard>
      <StepIndex>
        <StepIcon {...icon}>{id}</StepIcon>
      </StepIndex>
      <StepCardTitle>{title}</StepCardTitle>
      <StepCardCaptions>{captions}</StepCardCaptions>
      <div>
        <StepCardPhoto src={imageUrl} />
      </div>
    </StyledStepCard>
  );
};

const StepDetail = () => {
  const cardsArray = [
    {
      id: 1,
      icon: {
        outSideColor: "primary",
        insideColor: "transparent",
        fColor: "primary",
        type: "regular",
      },
      title: "上傳檔案",
      captions: "選擇PDF檔或是IMG檔",
      imageUrl: fileUpload,
    },
    {
      id: 2,
      icon: {
        outSideColor: "primary",
        insideColor: "transparent",
        fColor: "primary",
        type: "regular",
      },
      title: "加入簽名檔",
      captions: "手寫、輸入或是上傳簽名檔",
      imageUrl: signing,
    },
    {
      id: 3,
      icon: {
        outSideColor: "primary",
        insideColor: "transparent",
        fColor: "primary",
        type: "regular",
      },
      title: "上傳檔案",
      captions: "選擇PDF檔或是IMG檔",
      imageUrl: sending,
    },
  ];

  return (
    <Container>
      <Title>輕鬆幾步驟，完成您的簽署</Title>
      <Body>
        {cardsArray.map((card) => (
          <StepCard key={card.id} {...card} />
        ))}
      </Body>
    </Container>
  );
};

export default StepDetail;
