interface KnowledgeEntry {
  keywords: string[];
  answer: string;
}

export const localKnowledge: KnowledgeEntry[] = [
  {
    keywords: ["festival tổ chức ở đâu", "địa điểm chính", "chỗ tổ chức festival"],
    answer: "Dạ, Festival Hoa - Kiểng Sa Đéc lần thứ 2 năm 2025 được tổ chức chính tại Quảng trường thành phố Sa Đéc (cũ) và Làng hoa Sa Đéc, thuộc Phường Tân Quy Đông, Sa Đéc, Đồng Tháp đó ạ. Bạn có muốn Bé Sen chỉ đường không?"
  },
  {
    keywords: ["giá vé", "vé vào cổng", "có tốn tiền không", "mua vé"],
    answer: "Tin vui cho bạn là Festival Hoa - Kiểng Sa Đéc 2025 sẽ miễn phí vé vào cổng tham quan các khu vực công cộng. Tuy nhiên, một số khu du lịch tư nhân hoặc các hoạt động đặc biệt có thể sẽ có bán vé riêng nhé."
  },
  {
    keywords: ["đặc sản sa đéc", "ăn gì ở sa đéc", "món ngon sa đéc"],
    answer: "Đến Sa Đéc bạn nhất định phải thử hủ tiếu Sa Đéc chính gốc nha! Ngoài ra còn có nem Lai Vung, bánh phồng tôm Sa Giang, và các loại bánh dân gian như bánh bò, bánh da lợn. Bạn có muốn Bé Sen gợi ý một vài quán ăn ngon không?"
  },
  // --- BẠN CÓ THỂ THÊM CÁC THÔNG TIN KHÁC VÀO ĐÂY ---
  // Ví dụ:
  // {
  //   keywords: ["gửi xe ở đâu", "bãi giữ xe"],
  //   answer: "Ban tổ chức có bố trí nhiều bãi giữ xe tạm thời xung quanh khu vực lễ hội. Bạn có thể tìm thấy các bãi xe tại đường Hùng Vương và gần công viên Sa Đéc nhé."
  // },
];
