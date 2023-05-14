const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema({
  _id: { type: mongoose.Schema.Types.String, require: true },
  name: { type: String, require: true }, // Tên danh mục  
  status: { type: String, require: true, default: "Hoạt động" }, // Trạng thái
});
const categorymodel = mongoose.model("Category", Category);
// categorymodel.create(
//     {
//       name: "Sách văn học",
//     },
//     {
//       name: "Sách kinh tế",
//     },
//     {
//       name: "Sách thiếu nhi",
//     },
//     {
//       name: "Sách kỹ năng sống",    
//     },
//     {
//       name: "Sách khoa học - kỹ thuật",
//     }
// );

module.exports = categorymodel
