import api from "../api";

// 이미지 get, update, delete
export async function getImageUrl(imageName: string) {
  return await api.get(`/image/share?image=image/${imageName}`).then((res) => {
    return res.data;
  });
}

export async function getImageAllUrl() {
  return await api.get("/image/share").then((res) => {
    return res.data;
  });
}

export default getImageAllUrl;
