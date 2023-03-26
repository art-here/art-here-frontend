import styled from "@emotion/styled";
import { GrGallery } from "react-icons/gr";
import { MdCreate } from "react-icons/md";
import Divider from "../../component/Common/Divider/Divider";

type TProps = {
  page?: string;
};

const PageTitle = ({ page }: TProps) => {
  const isMyArt = page === "myArt"!;
  return (
    <Container>
      {isMyArt ? (
        <div>
          <GrGallery />
          <p>등록한 작품 게시글</p>
        </div>
      ) : (
        <div>
          <MdCreate />
          <p>신규 작품 게시글 등록</p>
        </div>
      )}
      <Divider />
    </Container>
  );
};

export default PageTitle;

const Container = styled.div`
  div {
    margin: 1rem 0;
    display: flex;
    font-size: 1.1rem;
    p {
      margin-left: 0.5rem;
    }
  }
`;
