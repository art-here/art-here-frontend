import { ART_DATA } from "../../constants/admin/artData";
import { TArt } from "../../types/gallery";

const isFieldEmpty = (value: FormDataEntryValue | null) => {
  return !value?.toString().length;
};

export const setErrorMessage = (formData: FormData) => {
  const errors: TArt = ART_DATA;

  const requiredFields = [
    { field: "artName", message: "작품명을 입력해주세요" },
    { field: "category", message: "카테고리를 입력해주세요" },
    { field: "latitude", message: "위도를 입력해주세요" },
    { field: "longitude", message: "경도를 입력해주세요" },
    { field: "authorName", message: "작가명을 입력해주세요" },
    { field: "agency", message: "담당 기관을 입력해주세요" },
    { field: "roadAddress", message: "도로명 주소를 입력해주세요" },
    { field: "oldAddress", message: "옛 주소를 입력해주세요" },
    { field: "startDate", message: "작품 시작일을 입력해주세요" },
    { field: "info", message: "작품 소개를 입력해주세요" }
  ];

  requiredFields.forEach(({ field, message }) => {
    errors[field] = isFieldEmpty(formData.get(field)) ? message : "";
  });

  return errors;
};
