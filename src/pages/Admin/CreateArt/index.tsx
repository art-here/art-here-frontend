import React, { useState } from "react";
import CreateArtView from "./View";
import { FormEvent } from "react";
import { ART_DATA } from "../../../constants/admin/artData";
import { TArt } from "../../../types/types";
import { setErrorMessage } from "../../../utils/admin/setErrorMessage";
import useCreateAdminArt from "../../../hooks/Admin/useCreateAdminArt";
import useArtForm from "../../../hooks/Admin/useArtForm";
import useImageUploader from "../../../hooks/Admin/useImageUploader";

const CreateArt = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    validationErrors,
    onSubmit,
    image,
    onUploadImage
  } = useArtForm();

  const CreateArtProps = {
    onSubmit,
    startDate,
    endDate,
    image,
    setStartDate,
    setEndDate,
    onUploadImage,
    validationErrors
  };
  return <CreateArtView {...CreateArtProps} />;
};

export default CreateArt;
