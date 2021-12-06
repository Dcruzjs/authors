const URL = `http://localhost:8181/new`;
const setting = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    task: {
      title: "Learn Angular",
      description: "Reading Books",
      completed: false,
    },
  }),
};

fetch(URL, setting).then((result) => console.log(result));
