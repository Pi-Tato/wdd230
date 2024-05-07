const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const deleteButton = document.createElement("button");
const li = document.createElement("li");

button.addEventListener("click", () => {
    if (input.value != "") {
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        input.focus();
        input.value = "";
    }
})
        
deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
})