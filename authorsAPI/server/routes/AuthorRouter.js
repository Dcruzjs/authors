const express = require("express");
const AuthorController = require("../controllers/AuthorController");
const AuthorRouter = express.Router();

AuthorRouter.get("/", AuthorController.getAuthors);
AuthorRouter.get("/:id", AuthorController.getAuthor);
AuthorRouter.post("/new", AuthorController.createAuthor);
AuthorRouter.put("/:id", AuthorController.updateAuthor);
AuthorRouter.delete("/remove/:id", AuthorController.deleteAuthor);

module.exports = AuthorRouter;
