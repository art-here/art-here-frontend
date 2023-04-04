const CACHE_KEYS = {
  images: ["images"],
  map: ["map"],
  art: ["art"],

  // FIXME: 검색어 있으면
  adminArt: (currentPage: number, search?: string) => [
    "adminArt",
    currentPage,
    search
  ]
};

export default CACHE_KEYS;
