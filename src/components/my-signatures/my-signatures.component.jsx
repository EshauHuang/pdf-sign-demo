import { Link } from "react-router-dom";

import Button from "@/components/button/button.component";

import { Title, StyleAddIcon, StyledButton } from "./my-signatures.style";

const MySignatures = () => {
  return (
    <div>
      <Title>我的簽名</Title>
      <Link to="add-sign">
        <StyledButton size="large" variant="secondary">
          <StyleAddIcon />
          創建簽名檔
        </StyledButton>
      </Link>
    </div>
  );
};

export default MySignatures;
