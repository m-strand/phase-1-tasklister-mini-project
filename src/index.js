document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    manageToDo(e.target.tasks.value)
    form.reset()
  });
});
function manageToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  p.textContent = todo + " ";
  btn.textContent = 'x';
  btn.addEventListener("click", deleteToDo)
  p.appendChild(btn);
  document.getElementById('tasks').appendChild(p);
}

function deleteToDo(e) {
  e.target.parentNode.remove();
}
