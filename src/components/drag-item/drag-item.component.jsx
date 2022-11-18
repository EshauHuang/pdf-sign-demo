import styled from "styled-components";

import { SvgButton } from "@/components/button/button.component";
import { ReactComponent as DragIndicatorIcon } from "@/assets/icon/drag-indicator.svg";
import { ReactComponent as MoreVertIcon } from "@/assets/icon/more-vert.svg";
import signPhoto from "@/assets/sign-photo.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.selectedPrimary};
  margin: 0.8rem 0;
`;

const SignPhoto = styled.img`
  height: 100%;
`;

const StyledDragIndicatorIcon = styled(DragIndicatorIcon)`
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledMoreVertIcon = styled(MoreVertIcon)`
  path {
    fill: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const SignOwnerDetail = styled.div`
  margin-left: 0.8rem;
  flex-grow: 1;
`;

const SignOwnerName = styled.h5``;

const SignOwnerEmail = styled.h6`
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 6.2rem;
`;

const EditPart = styled.div``;

const DragItem = ({ name, email, photo }) => {
  return (
    <Container>
      <SvgButton
        size="small"
        variant="secondary"
        component={<StyledDragIndicatorIcon />}
      />
      <Body>
        {photo ? (
          <SignPhoto src={signPhoto} />
        ) : (
          <SignOwnerDetail>
            <SignOwnerName>{name}</SignOwnerName>
            <SignOwnerEmail>{email}</SignOwnerEmail>
          </SignOwnerDetail>
        )}
      </Body>
      <EditPart>
        <SvgButton
          size="small"
          variant="secondary"
          component={<StyledMoreVertIcon />}
        />
      </EditPart>
    </Container>
  );
};

export default DragItem;
