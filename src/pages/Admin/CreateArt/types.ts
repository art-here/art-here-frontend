import { TArt, TArtForAdminReponses } from "../../../types/types";
import { Dispatch, FormEvent } from "react";

export type TCreateArtProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onUploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  image: string | null;
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  validationErrors: TArt;
  editArt?: TArtForAdminReponses;
};
