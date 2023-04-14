import {
  RenderActions,
  RenderCategory
} from "../../pages/Admin/MyArt/TableColumns";

const AUTHOR_COLUMN = {
  title: "작가 이름",
  dataIndex: "authorName",
  key: "authorName",
  align: "center"
};

const ART_COLUMN = {
  title: "작품명",
  dataIndex: "artName",
  key: "artName",
  align: "center"
};

const CATEGORY_COLUMN = {
  title: "카테고리",
  dataIndex: "category",
  key: "category",
  align: "center",
  render: RenderCategory
};

const AGENCY_COLUMN = {
  title: "담당기관",
  dataIndex: "agency",
  key: "agency",
  align: "center"
};

const START_DATE_COLUMN = {
  title: "시작일",
  dataIndex: "startDate",
  key: "startDate",
  align: "center",
  responsive: ["lg"]
};

const LATITUDE_COLUMN = {
  title: "위도",
  dataIndex: "latitude",
  key: "latitude",
  align: "center",
  responsive: ["xl"]
};

const LONGITUDE_COLUMN = {
  title: "경도",
  dataIndex: "longitude",
  key: "longitude",
  align: "center",
  responsive: ["xl"]
};

const ROAD_ADDRESS_COLUMN = {
  title: "도로명 주소",
  dataIndex: "roadAddress",
  key: "roadAddress",
  responsive: ["xxl"]
};

const ACTIONS_COLUMN = {
  title: "수정/삭제",
  key: "action",
  align: "center",
  render: RenderActions
};

export const columns = [
  AUTHOR_COLUMN,
  ART_COLUMN,
  CATEGORY_COLUMN,
  AGENCY_COLUMN,
  START_DATE_COLUMN,
  LATITUDE_COLUMN,
  LONGITUDE_COLUMN,
  ROAD_ADDRESS_COLUMN,
  ACTIONS_COLUMN
];
