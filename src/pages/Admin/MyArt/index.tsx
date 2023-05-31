import { ChangeEvent, useState } from "react";
import ArtView from "./View";
import { TArtForAdminReponses } from "../../../types/types";

import useArtForm from "../../../hooks/Admin/useArtForm";
import useImageUploader from "../../../hooks/Admin/useImageUploader";
import useGetAdminArt from "../../../hooks/Admin/useGetAdminArt";

import useModal from "./hooks/useModal";
import TableColumns from "./TableColumns";

const Art = () => {
  const [selectedRowData, setSelectedRowData] =
    useState<TArtForAdminReponses>();

  const { data, currentPage, setCurrentPage, SIZE, setSort, sort, setName } =
    useGetAdminArt();

  const adminArt = data?.artForAdminResponses;
  const total = data?.totalElements;
  const dataSource = adminArt;

  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,

    validationErrors,
    onSubmit
  } = useArtForm(selectedRowData);
  const { image, onUploadImage, setImage } = useImageUploader();
  const {
    isModalOpen,
    setIsModalOpen,
    onDeleteConfirm,
    handleOk,
    handleCancel
  } = useModal(setImage);

  const onEdit = (record: TArtForAdminReponses) => {
    setSelectedRowData(record);
    setIsModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSearch = (value: string) => setName(value);

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const columns = TableColumns({ onEdit, onDeleteConfirm });

  const ArtViewProps = {
    onSubmit,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    image,
    onUploadImage,
    validationErrors,
    selectedRowData,
    onSearch,
    currentPage,
    SIZE,
    total,
    columns,
    handlePageChange,
    dataSource,
    handleCancel,
    handleOk,
    isModalOpen,
    sort,
    handleSort
  };

  return <ArtView {...ArtViewProps} />;
};

export default Art;
