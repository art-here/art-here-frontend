import { ColumnType } from "antd/es/table";
import { TArtForAdminReponses } from "../../../types/types";
import { TCreateArtProps } from "../CreateArt/types";
import { ChangeEvent } from "react";

export type TArtViewProps = {
  onSearch: (value: string) => void;
  currentPage: number;
  SIZE: number;
  total?: number;
  handlePageChange: (page: number) => void;
  dataSource?: TArtForAdminReponses[];
  columns: ColumnType<object>[];
  handleCancel: () => void;
  handleOk: () => void;
  isModalOpen: boolean;
  selectedRowData?: TArtForAdminReponses;
  sort: string;
  handleSort: (e: ChangeEvent<HTMLSelectElement>) => void;
} & TCreateArtProps;
