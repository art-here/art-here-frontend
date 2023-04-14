import { Tag, Space } from "antd";
import React from "react";
import { ColumnGroupType, ColumnType } from "antd/es/table";
import { TArtForAdminReponses } from "../../../types/types";
import styled from "@emotion/styled";

type TTableColumnsProps = {
  onEdit: (record: TArtForAdminReponses) => void;
  onDeleteConfirm: (id: string) => void;
};

const getCategoryColor = (category: string) => {
  let color = category.length > 5 ? "geekblue" : "green";
  if (category === "loser") {
    color = "volcano";
  }
  return color;
};

const TableColumns = ({ onEdit, onDeleteConfirm }: TTableColumnsProps) => {
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
      render: (category: string) => (
        <Tag color={getCategoryColor(category)} key={category}>
          {category}
        </Tag>
      )
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
      render: (record) => (
        <Space size="small">
          <Button onClick={() => onEdit(record)}>수정</Button>
          <Button onClick={() => onDeleteConfirm(record.id)}>삭제</Button>
        </Space>
      )
    }
  ];

  return columns;
};

export default TableColumns;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
