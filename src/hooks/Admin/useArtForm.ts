import { FormEvent, useEffect, useState } from "react";
import useCreateAdminArt from "./useCreateAdminArt";
import { TArt, TArtForAdminReponses } from "../../types/types";
import { ART_DATA } from "../../constants/admin/artData";
import { setErrorMessage } from "../../utils/admin/setErrorMessage";
import { RESET_ERRORS } from "../../constants/admin/inputFields";
import useEditAdminArt from "./useEditAdminArt";
import useImageUploader from "./useImageUploader";
import {
  deleteImage,
  deleteImageFromAWS,
  storeImageToAWS
} from "../../services/admin";
import { AxiosError } from "axios";

const useArtForm = (selectedRowData?: TArtForAdminReponses) => {
  const { image, onUploadImage, awsInfo } = useImageUploader();

  const path = awsInfo?.key;
  const awsUrl = awsInfo?.preSignedURL;
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [validationErrors, setValidationErrors] = useState<TArt>(ART_DATA);

  useEffect(() => {
    setValidationErrors(RESET_ERRORS);
  }, []);

  const { onCreateArt } = useCreateAdminArt();
  const { onEditArt } = useEditAdminArt();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const {
      artName,
      category,
      latitude,
      imageURL,
      longitude,
      authorName,
      agency,
      roadAddress,
      startDate,
      endDate,
      info
    } = Object.fromEntries(formData);

    if (imageURL ?? null) {
      // FIXME: Toast UI로 고치기
      alert("이미지를 입력해주세요!");
      return;
    }

    const formDataValues = {
      artName: artName.toString(),
      category: category.toString(),
      latitude: latitude.toString(),
      imageURL: path,
      longitude: longitude.toString(),
      authorName: authorName.toString(),
      agency: agency.toString(),
      roadAddress: roadAddress.toString(),
      startDate: startDate.toString() || "",
      endDate: endDate.toString() || "",
      info: info.toString()
    };

    const errors = setErrorMessage(formData);

    setValidationErrors((prev) => ({ ...prev, ...errors }));

    try {
      if (Object.values(errors).every((error) => error === "")) {
        // 에러가 없을 때 요청 보냄
        awsUrl && image && (await storeImageToAWS(awsUrl, image));

        return selectedRowData && selectedRowData.id
          ? onEditArt({
              newArt: formDataValues,
              id: selectedRowData.id
            })
          : onCreateArt(formDataValues);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: 이미지 삭제 요청
        const response = await deleteImage(path);
        const deleteAwsUrl = response.preSignedURL;
        deleteImageFromAWS(deleteAwsUrl);
        // TODO: 이미지 삭제 메세지 TOAST?
      }
    }
  };

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    validationErrors,
    setValidationErrors,
    onSubmit,
    image,
    onUploadImage
  };
};

export default useArtForm;
