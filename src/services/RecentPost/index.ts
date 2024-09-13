import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPost = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=createdAt&limit=3`
  );

  return res.json();
};
