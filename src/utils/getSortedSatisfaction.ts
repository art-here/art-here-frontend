import { SATISFACTION_BAD } from "../constants/art/satisfaction";
import {
  T_SATISFACTION_BAD,
  T_SATISFACTION_GOOD,
  T_SATISFACTION_TAG
} from "../pages/Art/ArtSatisfaction/types";
import { TArtSatisfaction } from "../pages/Art/types";

const getSortedSatisfaction = (
  satisfactions: TArtSatisfaction[]
): {
  goods: TArtSatisfaction[];
  bads: TArtSatisfaction[];
} => {
  const bads: TArtSatisfaction[] = [];
  const goods: TArtSatisfaction[] = [];

  satisfactions.map((satisfaction) => {
    const tags = Object.values(satisfaction);
    const tagName = tags[0] as T_SATISFACTION_TAG;
    const tagCount = tags[1] as number;

    SATISFACTION_BAD.includes(tagName)
      ? bads.push({
          satisfaction: tagName as T_SATISFACTION_BAD,
          count: tagCount
        })
      : goods.push({
          satisfaction: tagName as T_SATISFACTION_GOOD,
          count: tagCount
        });
  });
  return { goods, bads };
};

export default getSortedSatisfaction;
