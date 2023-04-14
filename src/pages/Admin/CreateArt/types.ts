import { TArt, TArtForAdminReponses } from "../../../types/types";
import { FormEvent } from "react";

export type TCreateArtProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onUploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  image: ArrayBuffer | null;
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  validationErrors: TArt;
  editArt?: TArtForAdminReponses;
};
