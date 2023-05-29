import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addSignature } from "@/store/signatures/action";
import { selectCurrentSignaturesBox } from "@/store/signatures/selector";

import FontList from "@/components/font-list/font-list.component";
import { SvgButton } from "@/components/button/button.component";
import { ReactComponent as CloseIcon } from "@/assets/icon/close.svg";

const PaintCanvas = styled.canvas`
  border: 1px solid ${({ theme }) => theme.colors.uiGrey};
  width: 100%;
  height: 16rem;
  margin-top: 0.8rem;
`;

const UploadSignature = styled.div``;

const UploadButton = styled.label`
  border: 1px solid black;
  padding: 1.5rem 3.2rem;
  color: ${({ theme }) => theme.colors.dark};
  display: inline-block;
  margin-bottom: 1.6rem;
  cursor: pointer;

  span {
    font-family: Noto Sans TC;
    font-weight: 700;
    font-size: 1.4rem;
  }
`;

const UploadFile = styled.input`
  display: none;
`;

const InputSignatureWrap = styled.div`
  position: relative;
  width: 100%;
`;

const InputSignature = styled.input`
  position: relative;
  text-align: center;
  width: 100%;
  padding: 1.2rem 9rem;
  font-size: 2.2rem;
  transition: border-bottom 0.2s ease-out;
  color: ${({ fColor }) => fColor};
  font-family: ${({ font }) => font};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  line-height: 2.4rem;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.grey};
    font-family: Noto Sans TC;
    line-height: 2.4rem;
  }

  &:-ms-input-placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.grey};
    font-family: Noto Sans TC;
    line-height: 2.4rem;
  }

  &::-ms-input-placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.grey};
    font-family: Noto Sans TC;
    line-height: 2.4rem;
  }
`;

const CircleList = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  z-index: 1;
`;

const Circle = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  cursor: ${({ isTarget }) => (isTarget ? "auto" : "pointer")};
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background-color: ${({ theme, isTarget }) =>
      isTarget ? theme.colors.grey : "transparent"};
    z-index: -1;
  }
`;

const MiddlePart = styled.div`
  height: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import {
  Container,
  SvgButtonPos,
  TitleList,
  TitleWrap,
  Title,
  Body,
  ButtonWrap,
  PopupMask,
  StyledButton,
} from "./add-sign.style";

const colors = {
  black: "black",
  blue: "#0073EA",
  red: "#D83A52",
};

const fonts = {
  0: "Noto Sans TC",
  1: "Noto Serif TC",
  2: "Chenyuluoyan-Monospaced",
};

const PopupBox = () => {
  const currentSignatureBox = useSelector(selectCurrentSignaturesBox);

  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const [signature, setSignature] = useState("");
  const [addSignatureState, setAddSignatureState] = useState({
    action: "input",
    color: "blue",
    fontIndex: "0",
  });

  const { action, color, fontIndex } = addSignatureState;

  const handleSubmitSignature = (e) => {
    e.preventDefault();

    if (signature) {
      console.log(
        addSignature(currentSignatureBox, {
          text: signature,
          color: colors[color],
          font: fonts[fontIndex],
        })
      );
    }
  };

  const handleChangeSignatureByText = (e) => {
    const { value } = e.target;

    setSignature(value);
  };

  // Reset signature when switch to different type of input
  useEffect(() => {
    setSignature("");
  }, [action]);

  const handleChangeFontIndex = (fontIndex) => {
    setAddSignatureState((prev) => ({
      ...prev,
      fontIndex,
    }));
  };

  return (
    <Container onSubmit={(e) => handleSubmitSignature(e)}>
      <SvgButtonPos>
        <Link to="/signature">
          <SvgButton variant="secondary" component={<CloseIcon />} />
        </Link>
      </SvgButtonPos>
      <TitleList>
        <TitleWrap
          isTarget={action === "input"}
          onClick={() => {
            setAddSignatureState((prev) => ({
              ...prev,
              action: "input",
            }));
          }}
        >
          <Title>輸入</Title>
        </TitleWrap>
        {/* <TitleWrap>
          <Title>手寫</Title>
        </TitleWrap> */}
        <TitleWrap
          isTarget={action === "upload"}
          onClick={() =>
            setAddSignatureState((prev) => ({
              ...prev,
              action: "upload",
            }))
          }
        >
          <Title>上傳</Title>
        </TitleWrap>
      </TitleList>
      <Body>
        {action === "input" && (
          <FontList
            fontIndex={fontIndex}
            handleChangeFontIndex={handleChangeFontIndex}
          />
        )}
        {/* <PaintCanvas ref={canvasRef} /> */}

        <MiddlePart>
          {action === "input" && (
            <InputSignatureWrap>
              <InputSignature
                type="text"
                placeholder="請在這裡輸入你的名字"
                fColor={colors[color]}
                font={fonts[fontIndex]}
                onChange={(e) => handleChangeSignatureByText(e)}
                value={signature}
              />
              <CircleList>
                <Circle
                  onClick={() =>
                    setAddSignatureState((prev) => ({
                      ...prev,
                      color: "black",
                    }))
                  }
                  isTarget={color === "black"}
                  bgColor="black"
                ></Circle>
                <Circle
                  onClick={() =>
                    setAddSignatureState((prev) => ({
                      ...prev,
                      color: "blue",
                    }))
                  }
                  isTarget={color === "blue"}
                  bgColor="#0073EA"
                ></Circle>
                <Circle
                  onClick={() =>
                    setAddSignatureState((prev) => ({
                      ...prev,
                      color: "red",
                    }))
                  }
                  isTarget={color === "red"}
                  bgColor="#D83A52"
                ></Circle>
              </CircleList>
            </InputSignatureWrap>
          )}
          {action === "upload" && (
            <UploadSignature>
              <UploadButton>
                <span>上傳圖檔</span>
                <UploadFile type="file" />
              </UploadButton>
              <p>檔案大小 10 MB以內</p>
              <p>檔案格式 jpg, pmg</p>
            </UploadSignature>
          )}
        </MiddlePart>
        <ButtonWrap>
          <StyledButton size="large" variant="primary" disabled={!signature}>
            儲存
          </StyledButton>
        </ButtonWrap>
      </Body>
    </Container>
  );
};

const AddSignPopup = () => {
  return (
    <PopupMask>
      <PopupBox />
    </PopupMask>
  );
};

export default AddSignPopup;
