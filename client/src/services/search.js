import axios from 'axios';

const API_URL = 'http://example.com/api'; // Đây là URL của API của bạn

export const searchService = async (query) => {
  try {
    // Gửi yêu cầu tìm kiếm thông qua Axios
    const response = await axios.get(`${API_URL}/search`, {
      params: { query },
    });

    // Trả về dữ liệu kết quả tìm kiếm từ server
    return {
      err: response.data ? 0 : 1,
      msg: response.data ? 'OK' : 'Failed to perform search.',
      response: response.data,
    };
  } catch (error) {
    throw new Error('Failed to perform search'); // Xử lý lỗi nếu có
  }
};