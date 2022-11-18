import Button from "@/components/button/button.component";

import {
  Title,
  StyleAddIcon,
  buttonStyle,
} from "./my-signatures.style";

const MySignatures = () => {
  return (
    <div>
      <Title>我的簽名</Title>
      <Button style={buttonStyle} size="large" variant="secondary">
        <StyleAddIcon />
        創建簽名檔
      </Button>
    </div>
  );
};

export default MySignatures;
