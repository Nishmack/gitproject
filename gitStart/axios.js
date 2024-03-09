const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
  .get("https://crudcrud.com/api/b38e65da24364bda8ddd1268c4205177/todo")
  .then((resolve)=>console.log(resolve.data))
  .catch((error)=>console.log(error));  

}


  


function postTodo() {
  // Write your code here
  axios
     .post("https://crudcrud.com/api/b38e65da24364bda8ddd1268c4205177/todo", {
        title: "Learn Axios",
        completed: false,
     })
     .then((resolve)=>console.log(resolve.data))
     .catch((error)=>console.log(error));  

}
function putTodo() {
  // Write your code here
  axios
  .put("https://crudcrud.com/api/b38e65da24364bda8ddd1268c4205177/todo/65eaf1eb1492af03e8f0cc23", {
     title: "Learn Axios",
     completed: true,
  })
  .then((resolve)=>console.log(resolve.data))
  .catch((error)=>console.log(error));

}

function deleteTodo() {
  // Write your code here
  axios
  .get("https://crudcrud.com/api/b38e65da24364bda8ddd1268c4205177/todo/65eaf1eb1492af03e8f0cc23")
  .then((resolve)=>console.log(resolve.data))
  .catch((error)=>console.log(error));  

}
