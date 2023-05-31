import { SATISFACTION_BAD } from "../constants/art/satisfaction";
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
    const tagName = tags[0] as string;
    const tagCount = tags[1] as number;

    SATISFACTION_BAD.includes(tagName)
      ? bads.push({ satisfaction: tagName, count: tagCount })
      : goods.push({ satisfaction: tagName, count: tagCount });
  });
  return { goods, bads };
};

export default getSortedSatisfaction;
