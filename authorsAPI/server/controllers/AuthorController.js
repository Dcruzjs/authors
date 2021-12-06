const AuthorModel = require("../models/AuthorModel");

const AuthorController = {
  createAuthor: function (request, response) {
    console.log(request.body);
    // console.log(request.body.author);
    AuthorModel.createAuthor(request.body)
      .then((author) => {
        response.statusMessage = "success";
        response.status(201).json(author);
      })
      .catch((error) => response.json(error));
  },
  getAuthors: function (request, response) {
    AuthorModel.getAuthors().then((authors) => {
      response.statusMessage = "success";
      response.status(200).json({ authors });
    });
  },
  getAuthor: function (request, response) {
    console.log("request =>", request.params);
    AuthorModel.getAuthor(request.params)
      .then((author) => {
        if (author === null) throw new Error("That author doesn't exist");
        console.log("response => ", author);
        response.statusMessage = "success";
        response.status(200).json({ author });
      })
      .catch((error) => {
        console.log(error);
        response.status(404).json(error);
      });
  },
  updateAuthor: function (request, response) {
    console.log("request.params: ", request.params);
    console.log("request.body: ", request.body);

    if (Object.keys(request.body).length === 0) {
      response.statusMessage =
        "You need to provide at least one of the following fields to update the author ('name')";
      response.status(406).end();
    } else {
      AuthorModel.getAuthor(request.params)
        .then((result) => {
          if (result === null) {
            throw new Error("That author doesn't exist");
          } else {
            AuthorModel.updateAuthor(
              { _id: request.params.id },
              {
                name: request.body.name,
              }
            ).then((result) => {
              response.status(202).json(result);
            });
          }
        })
        .catch((error) => {
          response.statusMessage = error.message;
          response.status(404).end();
        });
    }
  },
  deleteAuthor: function (request, response) {
    console.log(request.params.id);
    AuthorModel.getAuthor(request.params)
      .then((author) => {
        if (author === null) {
          throw new Error("That author doesn't exist");
        } else {
          console.log("DELETING:", author.name);
          AuthorModel.deleteAuthor({ _id: author._id }).then((result) => {
            response.status(204).end();
          });
        }
      })
      .catch((error) => {
        response.statusMessage = error.message;
        response.status(404).end();
      });
  },
};

module.exports = AuthorController;
