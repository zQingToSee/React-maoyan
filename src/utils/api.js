import http from "./http";

// 受欢迎接口
export const ratedListApi = (params) => http.get("/rated/list", params);
