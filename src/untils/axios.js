import axios from "axios";

const instance = axios.create({
  // baseURL: "https://quanlithuvien.onrender.com/api/",
  baseURL: "http://localhost:8000/api/"
});

// Thêm một bộ đón chặn request
instance.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request được gửi đi
    const accessToken = localStorage.getItem("token");
    if (accessToken && typeof accessToken === "string") {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      return config;
    } else return config;
  },
  function (error) {
    // Làm gì đó khi lỗi
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
instance.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return error.response.data;
  }
);

export default instance;
