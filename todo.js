var addbtn = document.querySelector('.todo_btn')
addbtn.addEventListener('click', add)

function add() {
  var task = document.getElementById("input").value.trim();

  if (task == "") {
    alert("please type sth")
    return
  }

  let html = `
  <li>
  <p>${task}</p>
  <button class="donebtn">Done</button>
  </li>
  `
  document.getElementById("demo").innerHTML += html

  let buttons = document.querySelectorAll(".donebtn")
  buttons.forEach(function(element){
    element.addEventListener("click",remove)
  })
  task ="";
}

function remove(){
  var complte = document.querySelector(".removeTask")
  let target = this.closest("li")
  let todo = this.previousElementSibling
  complte.innerHTML += `
  <del>${todo.textContent}</del><br>
  `
  target.remove()
}







