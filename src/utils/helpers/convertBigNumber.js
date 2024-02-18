import { BigNumber } from "ethers";

export const convertBigNumber = (bigNumber) => {
  if (!bigNumber) return;
  return BigNumber.from(bigNumber).toString();
};
