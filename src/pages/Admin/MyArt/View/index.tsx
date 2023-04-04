import styled from "@emotion/styled";

import PageTitle from "../../PageTitle";
import { Space, Table, Pagination, Tag, Input, Modal } from "antd";

import { useState } from "react";
import type { ColumnGroupType, ColumnType, ColumnsType } from "antd/es/table";

const { confirm } = Modal;
const handleEdit = () => {};

const showDeleteConfirm = () => {
  confirm({
    title: "정말로 삭제하시겠습니까?",
    okText: "네",
    okType: "danger",
    cancelText: "아니요",
    onOk() {
      // TODO: 삭제 뮤테이션
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
};

interface DataType {
  key: string;
  artName: string;
  category: string;
}

const dataSource: DataType[] = [
  {
    key: "1",
    artName: "#00321",
    category: "hi"
  },
  {
    key: "2",
    artName: "#00322",
    category: "hi"
  }
  // Add more data objects here as needed
];

const columns: ColumnGroupType<object> | ColumnType<object>[] = [
  {
    title: "작가 이름",
    dataIndex: "authorName",
    key: "authorName",
    align: "center"
  },
  {
    title: "작품명",
    dataIndex: "artName",
    key: "artName",
    align: "center"
  },
  {
    title: "카테고리",
    dataIndex: "category",
    key: "category",
    align: "center",
    render: (category: string) => {
      // 카테고리에 따라 색깔 다르게
      let color = category.length > 5 ? "geekblue" : "green";
      if (category === "loser") {
        color = "volcano";
      }
      return (
        <Tag color={color} key={category}>
          {category}
        </Tag>
      );
    }
  },
  {
    title: "담당기관",
    dataIndex: "agency",
    key: "agency",
    align: "center"
  },
  {
    title: "시작일",
    dataIndex: "startDate",
    key: "startDate",
    align: "center",
    responsive: ["lg"]
  },
  {
    title: "위도",
    dataIndex: "latitude",
    key: "latitude",
    align: "center",
    responsive: ["xl"]
  },
  {
    title: "경도",
    dataIndex: "longitude",
    key: "longitude",
    align: "center",
    responsive: ["xl"]
  },
  {
    title: "도로명 주소",
    dataIndex: "roadAddress",
    key: "roadAddress",
    responsive: ["xxl"]
  },

  {
    title: "수정/삭제",
    key: "action",
    align: "center",
    render: () => (
      <Space size="small">
        <Button onClick={handleEdit}>수정</Button>
        <Button onClick={showDeleteConfirm}>삭제</Button>
      </Space>
    )
  }
];
const { Search } = Input;
const ArtView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([...dataSource]); // some data array

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
    // fetch data for the new page and update the "data" state
  };

  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <PageTitle page={"myArt"} />
      <CustomSearch
        placeholder="작품명 검색"
        allowClear
        onSearch={onSearch}
        style={{
          width: 200
        }}
      />
      <CustomTable
        pagination={false}
        dataSource={data}
        columns={columns}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />
      <Pagination
        style={{ textAlign: "center", margin: "1rem 0" }}
        showQuickJumper={false}
        current={currentPage}
        pageSize={pageSize}
        total={20}
        onChange={handlePageChange}
        responsive={true}
      />
    </>
  );
};

export default ArtView;

const CustomTable = styled(Table)`
  width: 100%;
  overflow-x: auto;
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const CustomSearch = styled(Search)`
  margin-bottom: 0.5rem;
`;
