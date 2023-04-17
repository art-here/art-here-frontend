export const getApiEndpoint = () => {
  // production or development
  return import.meta.env.VITE_SERVER_BASE_URL;
};
