const mongoose = require("mongoose");
/*
{
    "title":"Learn Angular",
    "description": "Reading Books",
    "completed": false

}
{
    title:"Learn Angular",
    description: "Reading Books",
    completed: false

}
*/
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: [3, "The name must be at least 3 characters long."],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("authors", AuthorSchema);

const AuthorModel = {
  createAuthor: function (newAuthor) {
    return Author.create(newAuthor);
  },
  getAuthors: function () {
    return Author.find();
  },
  getAuthor: function (id) {
    console.log("AuthorModel =>:", id);
    return Author.findOne({ _id: id.id });
  },
  updateAuthor: function (condition, fieldsToUpdate) {
    return Author.findOneAndUpdate(
      condition,
      { $set: fieldsToUpdate },
      { new: true }
    );
  },
  deleteAuthor: function (title) {
    return Author.remove(title);
  },
};

module.exports = AuthorModel;
