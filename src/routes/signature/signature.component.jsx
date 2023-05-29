import { useSelector } from "react-redux";
import { useState } from "react";
import { jsPDF } from "jspdf";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import generateTextImage from "../../utils/generateTextImage";

import { selectDocSignatures } from "@/store/docSignatures/selector";

import { ReactComponent as PersonAddIcon } from "@/assets/icon/person-add.svg";

import Spinner from "@/components/spinner/spinner.component";
import Menu from "@/components/menu/menu.component";
import StepList from "@/components/step-list/step-list.component";
import PersonalForm from "@/components/personal-form/person-form.component";
import DocumentShow from "@/components/document-show/document-show.component";
import MySignatures from "@/components/my-signatures/my-signatures.component";
import DragList from "@/components/drag-list/drag-list.component";
import Button, { SvgButton } from "@/components/button/button.component";
import { ToggleBarSection } from "@/components/ui/toggle-bar/toggle-bar.component";

const Body = styled.div`
  display: flex;
  height: calc(100% - 18rem);
  padding: 0 7.2rem;
  gap: 2.4rem;
`;

const SignatureSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30.6rem;
  padding: 2.4rem 0;
  justify-content: space-between;
`;

const SignatureSettingTop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 4rem;
  padding-right: 1.6rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Title = styled.h5`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const SvgButtonPos = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const InvitedSignatures = () => {
  const [isOrder, setIsOrder] = useState(false);
  const [isDeadLine, setIsDateLine] = useState(false);

  return (
    <Container>
      {/* <Title>邀請簽署人</Title>
      <Link to="invite">
        <SvgButtonPos>
          <SvgButton component={<PersonAddIcon />} />
        </SvgButtonPos>
      </Link>
      <ToggleBarSection
        toggle={isOrder}
        setToggle={setIsOrder}
        noActiveText="無簽署順序"
        activeText="排列簽署順序"
      />
      <ToggleBarSection
        toggle={isDeadLine}
        setToggle={setIsDateLine}
        noActiveText="無期限"
        activeText="指定簽署期限"
      /> */}
      <DragList />
    </Container>
  );
};

const StyledButton = styled(Button)`
  width: 100%;
`;

const SignatureSetting = ({ isDownloading, setIsDownloading }) => {
  const docSignatures = useSelector(selectDocSignatures);
  const haveDocSignatures = !!docSignatures.length;

  const pdfDownload = async (docSignatures) => {
    let doc;
    const max_width = 1080; // Set PDF width to 1080px

    for (const [i, signature] of docSignatures.entries()) {
      const { canvas, items: signatures } = signature;
      let scale = 1;

      if (canvas.width > max_width) {
        scale = max_width / canvas.width;
      }
      let scaledWidth = canvas.width * scale;
      let scaledHeight = canvas.height * scale;

      // Create jsPDF instance at first time
      if (i === 0) {
        doc =
          scaledWidth > scaledHeight
            ? new jsPDF("l", "px", [scaledWidth, scaledHeight])
            : new jsPDF("p", "px", [scaledHeight, scaledWidth]);
      } else {
        // Set the orientation of the PDF page according to its dimensions
        if (scaledWidth > scaledHeight) {
          // If width is greater than height, set the orientation to Landscape
          doc.addPage([scaledWidth, scaledHeight], "l");
        } else {
          // If height is equal or greater than width, set the orientation to Portrait
          doc.addPage([scaledHeight, scaledWidth], "p");
        }
      }
      const image = canvas.toDataURL("image/png");
      doc.addImage(
        image,
        "PNG",
        0,
        0,
        scaledWidth,
        scaledHeight,
        `page-${i + 1}`,
        "SLOW"
      );
      if (signatures.length) {
        const ratio = max_width / 720;
        for (const signature of signatures) {
          /*
              The width and height variables in the 'signature' code incorrectly include extra elements, resulting in dimensions larger than desired. The code needs to be adjusted to exclude these extra elements.
            */
          const { photo, text, x, y, width, height } = signature;

          // 40 = border width + padding + icon + flex center
          if (photo) {
            doc.addImage(
              photo,
              "JPEG",
              (x + 40) * ratio,
              (y + 9) * ratio,
              200 * ratio,
              62 * ratio
            );
          } else if (text) {
            const { color, font } = signature;
            const {
              dataUrl: photo,
              width: photoWidth,
              height: photoHeight,
            } = await generateTextImage({
              text,
              style: {
                fontSize: "4.2rem",
                fontFamily: font,
                color,
                fontWeight: "400",
              },
            });
            doc.addImage(
              photo,
              "PNG",
              x * ratio,
              y * ratio,
              photoWidth * ratio,
              photoHeight * ratio
            );
          }
        }
      }
    }
    return doc.save("test.pdf", { returnPromise: true });
  };

  const handleDownloadPdf = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setTimeout(() => {
      pdfDownload(docSignatures)
        .then(() => setIsDownloading(false))
        .catch(() => setIsDownloading(false));
    }, 0);
  };
  return (
    <SignatureSettingContainer>
      <SignatureSettingTop>
        {/* <PersonalForm /> */}
        <MySignatures />
        <InvitedSignatures />
      </SignatureSettingTop>
      <StyledButton
        onClick={handleDownloadPdf}
        size="large"
        variant="primary"
        disabled={!haveDocSignatures}
      >
        下一步
      </StyledButton>
    </SignatureSettingContainer>
  );
};

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Signature = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  return (
    <SignatureContainer>
      {isDownloading && <Spinner />}
      <Menu />
      <StepList />
      <Body>
        <DocumentShow />
        <SignatureSetting
          isDownloading={isDownloading}
          setIsDownloading={setIsDownloading}
        />
      </Body>
      <Outlet />
    </SignatureContainer>
  );
};

export default Signature;
