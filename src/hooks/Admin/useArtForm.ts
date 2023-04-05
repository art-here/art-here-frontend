import { FormEvent, useEffect, useState } from "react";
import useCreateAdminArt from "./useCreateAdminArt";
import { TArt, TArtForAdminReponses } from "../../types/types";
import { ART_DATA } from "../../constants/admin/artData";
import { setErrorMessage } from "../../utils/admin/setErrorMessage";
import { RESET_ERRORS } from "../../constants/admin/inputFields";
import useEditAdminArt from "./useEditAdminArt";

const useArtForm = (selectedRowData?: TArtForAdminReponses) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [validationErrors, setValidationErrors] = useState<TArt>(ART_DATA);

  useEffect(() => {
    setValidationErrors(RESET_ERRORS);
  }, []);

  const { onCreateArt } = useCreateAdminArt();
  const { onEditArt } = useEditAdminArt();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    // TODO: 이미지?
    const image = imageURL as File;

    const formDataValues = {
      artName: artName.toString(),
      category: category.toString(),
      latitude: latitude.toString(),
      imageURL: imageURL.toString(),
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

    if (Object.values(errors).every((error) => error === "")) {
      // 에러가 없을 때 요청 보냄

      return selectedRowData && selectedRowData.id
        ? onEditArt({
            newArt: formDataValues,
            id: selectedRowData.id
          })
        : onCreateArt(formDataValues);
    }
  };

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    validationErrors,
    setValidationErrors,
    onSubmit
  };
};

export default useArtForm;
