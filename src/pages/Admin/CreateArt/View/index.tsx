import styled from "@emotion/styled";

import PageTitle from "../../PageTitle";
import { TCreateArtProps } from "../types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Category from "../Category";
import InputField from "../InputField";
import { INPUT_FIELDS } from "../../../../constants/admin/inputFields";

const CreateArtView = ({
  onSubmit,
  onUploadImage,
  image,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  validationErrors,
  editArt
}: TCreateArtProps) => {
  const srcImage = image ? new TextDecoder().decode(image) : "";
  return (
    <>
      <PageTitle edit={!!editArt} />
      <Container>
        <CreateArtForm onSubmit={onSubmit}>
          <ImageContainer>
            <ImageWrapper>
              {editArt?.imageURL ? (
                <img src={image ? srcImage : editArt?.imageURL} alt="image" />
              ) : (
                <img
                  src={image ? srcImage : "/assets/images/art_default.jpeg"}
                  alt="Selected image"
                />
              )}
            </ImageWrapper>
            <label htmlFor="file">
              <div className="btn-upload">파일 업로드하기</div>
            </label>
            <input
              type="file"
              name="imageURL"
              id="file"
              onChange={onUploadImage}
            />
          </ImageContainer>
          <CreateArtContainer>
            <div className="two_columns">
              <InputField
                defaultValue={editArt?.artName}
                label={INPUT_FIELDS.artName.label}
                name={INPUT_FIELDS.artName.name}
                validationError={validationErrors.artName}
              />
              <InputField
                defaultValue={editArt?.authorName}
                label={INPUT_FIELDS.authorName.label}
                name={INPUT_FIELDS.authorName.name}
                validationError={validationErrors.authorName}
              />
            </div>
            <div className="two_columns">
              <InputField
                defaultValue={editArt?.roadAddress}
                label={INPUT_FIELDS.roadAddress.label}
                name={INPUT_FIELDS.roadAddress.name}
                validationError={validationErrors.roadAddress}
              />
              <InputField
                defaultValue={editArt?.agency}
                label={INPUT_FIELDS.agency.label}
                name={INPUT_FIELDS.agency.name}
                validationError={validationErrors.agency}
              />
            </div>
            <div className="two_columns">
              <InputField
                defaultValue={editArt?.latitude}
                label={INPUT_FIELDS.latitude.label}
                name={INPUT_FIELDS.latitude.name}
                validationError={validationErrors.latitude}
              />
              <InputField
                defaultValue={editArt?.longitude}
                label={INPUT_FIELDS.longitude.label}
                name={INPUT_FIELDS.longitude.name}
                validationError={validationErrors.longitude}
              />
            </div>
            <div className="two_columns">
              <Category
                validationError={validationErrors.category}
                editArtValue={editArt?.category}
              />
              <DatePickerContainer>
                <DatePickerWrapper>
                  <label>작품 시작일</label>
                  <CustomDatePicker
                    dateFormat="yyyy-MM-dd"
                    value={editArt?.startDate}
                    popperPlacement="top-start"
                    name="startDate"
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    disabledKeyboardNavigation
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    locale={ko}
                  />
                  {validationErrors.startDate && (
                    <ErrorMessage>{validationErrors.startDate}</ErrorMessage>
                  )}
                </DatePickerWrapper>
                <DatePickerWrapper>
                  <label>작품 종료일</label>
                  <CustomDatePicker
                    dateFormat="yyyy-MM-dd"
                    value={editArt?.endDate}
                    popperPlacement="top-start"
                    name="endDate"
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    disabledKeyboardNavigation
                    selectsEnd
                    endDate={endDate}
                    minDate={startDate}
                    locale={ko}
                  />
                </DatePickerWrapper>
              </DatePickerContainer>
            </div>
            <div className="art_info">
              <label>작품 소개 글</label>
              <textarea
                name="info"
                maxLength={255}
                rows={5}
                wrap="on"
                value={editArt?.info}
              />
              {validationErrors.info && (
                <ErrorMessage>{validationErrors.info}</ErrorMessage>
              )}
            </div>
            <ButtonWrapper>
              <button type="submit">
                작품 <span>{editArt ? "수정" : "등록"}</span>하기
              </button>
            </ButtonWrapper>
          </CreateArtContainer>
        </CreateArtForm>
      </Container>
    </>
  );
};

export default CreateArtView;

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 14px;
  padding: 1rem 1.5rem;
`;

const CreateArtForm = styled.form`
  display: flex;
  gap: 2rem;
  flex-basis: 50%;
  label {
    margin: 0.2rem 0;
  }
  input {
    padding: 0.5rem 0.8rem;
    background-color: #ececec;
    border-radius: 8px;
  }
  textarea {
    padding: 1rem;
    background-color: #ececec;
    border-radius: 8px;
    white-space: pre-wrap;
  }

  div.art_info {
    display: flex;
    flex-direction: column;
  }
  .two_columns {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    gap: 10px;

    ${({ theme }) => theme.media.desktop} {
      display: flex;
    }
  }
`;
const CreateArtContainer = styled.div``;

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 300px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn-upload {
    width: 300px;
    margin: 1rem 0;
    font-size: 1.1rem;
    padding: 1rem;
    background: #fff;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }

  #file {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;

  button {
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 1rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    background-color: black;
    color: white;

    &:hover {
      background-color: darkgray;

      color: black;
    }
  }
`;

const DatePickerContainer = styled.div`
  gap: 10px;
  flex: 1;
  display: flex;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;

  ${({ theme }) => theme.media.desktop} {
    display: flex;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  padding: 0;
  color: red;
  margin-top: 0.5rem;
`;
