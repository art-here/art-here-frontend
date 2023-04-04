import { TArt } from "../../../types/types";
import { Dispatch, FormEvent } from "react";

export type TCreateArtProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onUploadImage: () => void;
  startDate: Date;
  endDate: Date;
  setStartDate: Dispatch<React.SetStateAction<Date>>;
  setEndDate: Dispatch<React.SetStateAction<Date>>;
  validationErrors: TArt;
};
