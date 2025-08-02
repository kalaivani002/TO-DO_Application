function addToDo() {
    var toinput = document.getElementById("todo");
    var text = toinput.value.trim();

    if (text !== "") {
        var li = document.createElement("li");
        li.textContent = text;

        var deletebutton = document.createElement("button");
        deletebutton.textContent = "Delete";
        deletebutton.classList.add("delete-button");
        deletebutton.onclick = function() {
            li.remove();
        };

        li.appendChild(deletebutton);
        document.getElementById("todo-list").appendChild(li);

        toinput.value = ""; // Clear the input field
    }
}
