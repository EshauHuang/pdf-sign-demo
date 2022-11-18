import styled from "styled-components";

import Navbar from "@/components/navbar/navbar.component";
import UploadFile from "@/components/upload-file/upload-file.component";
import StepDetail from "@/components/step-detail/step-detail.component";
import Footer from "@/components/footer/footer.component";

const Container = styled.div`
  width: 100%;
`

const Main = styled.main`
  width: 100%;
  padding: 4rem 7.2rem 3.7rem;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <UploadFile />
        <StepDetail />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
