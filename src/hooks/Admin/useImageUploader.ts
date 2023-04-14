import { useState, ChangeEvent, useEffect } from "react";
import { uploadImage } from "../../services/admin";
import { TAwsInfo } from "../../types/types";

const useImageUploader = () => {
  const [image, setImage] = useState<ArrayBuffer | null>(null);
  const [awsInfo, setAwsInfo] = useState<TAwsInfo>();

  const onUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      // FIXME: TOAST 띄어주기
      console.log("No file selected.");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(selectedFile.type)) {
      // FIXME: TOAST 띄어주기
      console.log("Invalid file type. Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result as ArrayBuffer);
      }
    };

    reader.readAsDataURL(selectedFile);

    console.log("이미지", image);
    try {
      const response = await uploadImage();
      setAwsInfo(response);
    } catch (error) {
      // TODO: toast 띄어주기
      console.log(error);
    }
  };

  return { image, onUploadImage, setImage, awsInfo };
};

export default useImageUploader;
