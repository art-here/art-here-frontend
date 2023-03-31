import React, { useState } from "react";
import CreateArtView from "./View";
import { FormEvent } from "react";
import { ART_DATA } from "../../../constants/admin/artData";
import { TArt } from "../../../types/gallery";
import { setErrorMessage } from "../../../utils/admin/setErrorMessage";
import useCreateArt from "../../../hooks/Admin/useCreateArt";

const CreateArt = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [validationErrors, setValidationErrors] = useState<TArt>(ART_DATA);

  const { onCreateArt } = useCreateArt();

  const onUploadImage = () => {};

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
      oldAddress,
      startDate,
      endDate,
      info
    } = Object.fromEntries(formData);

    const formDataValues = {
      artName: artName.toString(),
      category: category.toString(),
      latitude: latitude.toString(),
      imageURL: imageURL.toString(),
      longitude: longitude.toString(),
      authorName: authorName.toString(),
      agency: agency.toString(),
      roadAddress: roadAddress.toString(),
      oldAddress: oldAddress.toString(),
      startDate: startDate.toString(),
      endDate: endDate.toString(),
      info: info.toString()
    };

    const errors = setErrorMessage(formData);

    setValidationErrors((prev) => ({ ...prev, ...errors }));
    if (Object.values(errors).every((error) => error === "")) {
      // 에러가 없을 때 요청 보냄
      onCreateArt(formDataValues);
    }
  };

  const CreateArtProps = {
    onSubmit,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    onUploadImage,
    validationErrors
  };
  return <CreateArtView {...CreateArtProps} />;
};

export default CreateArt;
