import { useState, ChangeEvent, useEffect } from "react";

const useImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);

  const onUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
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
        setImage(reader.result as string);
      }
    };

    reader.readAsDataURL(selectedFile);
  };

  return { image, onUploadImage, setImage };
};

export default useImageUploader;
