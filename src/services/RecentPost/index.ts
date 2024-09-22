import envConfig from "@/src/config/envConfig";

export const getRecentPost = async () => {
  const fetchOptions = {
    next: {
      tags: ["posts"],
    },
  };
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=createdAt&limit=8`,
    fetchOptions
  );

  return res.json();
};
