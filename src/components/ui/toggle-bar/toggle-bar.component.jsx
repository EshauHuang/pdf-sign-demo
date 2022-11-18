import {
  StyledToggleBar,
  CircleWrap,
  Circle,
  Container,
  ToggleText,
} from "./toggle-bar.style";

export const ToggleBar = ({ toggle, setToggle }) => {
  return (
    <StyledToggleBar toggle={toggle} onClick={() => setToggle(!toggle)}>
      <CircleWrap>
        <Circle />
      </CircleWrap>
    </StyledToggleBar>
  );
};

export const ToggleBarSection = ({
  noActiveText,
  activeText,
  toggle,
  setToggle,
}) => {

  return (
    <Container toggle={toggle}>
      <ToggleText>{noActiveText}</ToggleText>
      <ToggleBar toggle={toggle} setToggle={setToggle} />
      <ToggleText>{activeText}</ToggleText>
    </Container>
  );
};
