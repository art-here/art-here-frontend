import styled from "@emotion/styled";

import PageTitle from "../../PageTitle";
import { Table, Pagination, Input, Modal } from "antd";
import CreateArtView from "../../CreateArt/View";
import { TArtViewProps } from "../types";

const { Search } = Input;

const ArtView = ({
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
  handlePageChange,
  dataSource,
  columns,
  handleCancel,
  handleOk,
  isModalOpen
}: TArtViewProps) => {
  const CreateArtProps = {
    onSubmit,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    image,
    onUploadImage,
    validationErrors,
    editArt: selectedRowData
  };

  const modalFooter = <></>;

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
        dataSource={dataSource}
        columns={columns}
      />
      <Pagination
        style={{ textAlign: "center", margin: "1rem 0" }}
        showQuickJumper={false}
        current={currentPage}
        pageSize={SIZE}
        total={total}
        onChange={handlePageChange}
        responsive={true}
      />
      <Modal
        width={1000}
        open={isModalOpen}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={modalFooter}
      >
        <CreateArtView {...CreateArtProps} />
      </Modal>
    </>
  );
};

export default ArtView;

const CustomTable = styled(Table)`
  width: 100%;
  overflow-x: auto;
`;

const CustomSearch = styled(Search)`
  margin-bottom: 0.5rem;
`;
