var firebaseConfig = {
  apiKey: "AIzaSyCdBc2dJXfu5q2oGkbEwcqr6zuHfuPtycU",
  authDomain: "todo-app-c8bda.firebaseapp.com",
  databaseURL: "https://todo-app-c8bda-default-rtdb.firebaseio.com",
  projectId: "todo-app-c8bda",
  storageBucket: "todo-app-c8bda.appspot.com",
  messagingSenderId: "561504699718",
  appId: "1:561504699718:web:0a35577526e2501543d147"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function createTask() {
  try {
    var todoInput = document.getElementById("todoInput").value.trim();

    if (todoInput === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a todo!",
      });
    } else {
      var todo = { todo: todoInput };
      firebase.database().ref("todo").push(todo);
      document.getElementById("todoInput").value = "";
    }
  } catch (error) {
    console.log(error);
  }
}


firebase.database().ref("todo").on("child_added", function (data) {
  var liElement = document.createElement("li");
  liElement.setAttribute("data-key", data.key);

  var liText = document.createTextNode(data.val().todo);
  liElement.appendChild(liText);

  var deletBtn = document.createElement("button");
  deletBtn.textContent = "Delete";
  deletBtn.setAttribute("onclick", "deleteSingleElement(this)");
  liElement.appendChild(deletBtn);

  var EditBtn = document.createElement("button");
  EditBtn.textContent = "Edit";
  EditBtn.setAttribute("onclick", "EditElement(this)");
  liElement.appendChild(EditBtn);

  var ulElement = document.getElementById("items-data");
  ulElement.appendChild(liElement);
});


function DeleteAll() {
  document.getElementById("items-data").innerHTML = "";
  firebase.database().ref("todo").remove(); 
}


function deleteSingleElement(e) {
  var key = e.parentNode.getAttribute("data-key");
  firebase.database().ref("todo").child(key).remove();
  e.parentNode.remove();
}


function EditElement(e) {
  var key = e.parentNode.getAttribute("data-key");
  Swal.fire({
    title: 'Update Todo',
    input: 'text',
    inputLabel: 'Enter updated value',
    inputPlaceholder: 'Type new todo here...',
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed && result.value.trim() !== "") {
      firebase.database().ref("todo").child(key).update({ todo: result.value });
      e.parentNode.firstChild.nodeValue = result.value;
    }
  });
}
