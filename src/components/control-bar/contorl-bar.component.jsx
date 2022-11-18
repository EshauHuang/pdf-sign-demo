import { SvgButton } from "@/components/button/button.component";

import { Container } from "./control-bar.style"

import { ReactComponent as FitScreenIcon } from "@/assets/icon/fit-screen.svg";
import { ReactComponent as FullScreenIcon } from "@/assets/icon/full-screen.svg";
import { ReactComponent as CloseFullScreenIcon } from "@/assets/icon/close-fullscreen.svg";
import { ReactComponent as OneByOneIcon } from "@/assets/icon/1_1.svg";
import { ReactComponent as AddIcon } from "@/assets/icon/add.svg";
import { ReactComponent as MinusIcon } from "@/assets/icon/remove.svg";
import { ReactComponent as RotateIcon } from "@/assets/icon/rotate.svg";

const ControlBar = () => {
  return (
    <Container>
      <div>
        <SvgButton component={<FitScreenIcon />} />
        <SvgButton component={<FullScreenIcon />} />
        <SvgButton component={<OneByOneIcon />} />
      </div>
      <div>
        <SvgButton component={<AddIcon />} />
        <SvgButton component={<MinusIcon />} />
      </div>
      <div>
        <SvgButton component={<RotateIcon />} />
      </div>
    </Container>
  );
}

export default ControlBar;