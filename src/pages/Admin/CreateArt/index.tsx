import React, { useState } from "react";
import CreateArtView from "./View";
import { FormEvent } from "react";
import { ART_DATA } from "../../../constants/admin/artData";
import { TArt } from "../../../types/gallery";
import { setErrorMessage } from "../../../utils/admin/setErrorMessage";

const CreateArt = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [validationErrors, setValidationErrors] = useState<TArt>(ART_DATA);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("버튼 누름");
    console.log(e);
    const formData = new FormData(e.currentTarget);

    const {
      artName,
      category,
      latitude,
      longitude,
      authorName,
      agency,
      roadAddress,
      oldAddress,
      startDate,
      endDate,
      info
    } = Object.fromEntries(formData);

    const errors = setErrorMessage(formData);

    setValidationErrors((prev) => ({ ...prev, ...errors }));
    if (Object.values(errors).every((error) => error === "")) {
      // 에러가 없을 때 요청 보냄
    }
  };

  const CreateArtProps = {
    onSubmit,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    validationErrors
  };
  return <CreateArtView {...CreateArtProps} />;
};

export default CreateArt;
