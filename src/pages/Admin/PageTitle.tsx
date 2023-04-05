import styled from "@emotion/styled";
import { GrGallery } from "react-icons/gr";
import { MdCreate } from "react-icons/md";
import Divider from "../../component/Common/Divider/Divider";

type TProps = {
  page?: string;
  edit?: boolean;
};

const PageTitle = ({ page, edit }: TProps) => {
  const isMyArt = page === "myArt"!;
  return (
    <Container>
      {isMyArt ? (
        <div>
          <GrGallery />
          <p>등록한 작품들</p>
        </div>
      ) : (
        <div>
          <MdCreate />
          <p>{edit ? "작품 수정" : "신규 작품 등록"}</p>
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
    align-items: center;
    font-size: 1.1rem;
    p {
      margin-left: 0.5rem;
    }
  }
`;
