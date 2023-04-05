import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { GrGallery } from "react-icons/gr";
import { MdCreate } from "react-icons/md";
import Divider from "../../../../component/Common/Divider/Divider";
import { theme } from "../../../../styles/theme";
import { TSideBarViewProps } from "../types";

const SidebarView = ({
  onNavigateGallery,
  onNavigateCreate,
  selectPage
}: TSideBarViewProps) => {
  return (
    <Container>
      <ProfileInfo>
        <ImageWrapper>
          <img src="/assets/images/admin_default.png" alt="profile" />
        </ImageWrapper>
        <button>이미지 변경</button>
        <div>
          <span>{"관리자"}님</span>
        </div>
      </ProfileInfo>
      <Divider />
      <AdminPages>
        <AdminItem>
          <p>관리 항목</p>
        </AdminItem>
      </AdminPages>
      <PagesContainer>
        <PagesItem onClick={onNavigateGallery} active={selectPage === "myArt"}>
          <GrGallery />
          <p>등록한 작품들</p>
        </PagesItem>
        <PagesItem
          onClick={onNavigateCreate}
          active={selectPage === "createArt"}
        >
          <MdCreate />
          <p>신규 작품 등록</p>
        </PagesItem>
      </PagesContainer>
    </Container>
  );
};

export default SidebarView;

const Container = styled.div`
  padding-top: 40px;

  width: 300px;
  ${theme.media.mobile} {
    display: none;
  }

  ${theme.media.tablet} {
    display: block;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    margin: 1rem 0;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: white;
    font-weight: 600;
    background: ${theme.colors.gray};
    &:hover {
      background-color: #ccc;
    }
  }
`;

const ImageWrapper = styled.div``;

const AdminPages = styled.div``;

const AdminItem = styled.div`
  p {
    color: gray;
    font-size: large;
    padding: 0 1rem;
  }
`;

const PagesContainer = styled.ul`
  padding: 1rem 0;

  li {
    font-size: 1.1rem;
    padding: 1rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    p {
      margin-left: 0.5rem;
      white-space: nowrap;
    }
    &:hover {
      background: #ccc;
    }
  }
`;

type TPagesItem = {
  active: boolean;
};

const PagesItem = styled.li<TPagesItem>`
  ${({ active }) =>
    active &&
    css`
      background-color: ${theme.colors.gray};
    `}
`;
