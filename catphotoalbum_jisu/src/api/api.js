const API_BASE_URL =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (nodeId) => {
  try {
    const res = await fetch(`${API_BASE_URL}/${nodeId ? nodeId : ""}`);
    if (!res.ok) {
      throw new Error("error");
    }
    return await res.json();
  } catch (e) {
    throw new Error(e.message);
  }
};
