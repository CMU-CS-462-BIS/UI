const input = document.querySelector('#file-upload');
const list = document.querySelector('.list-file');
const importFile = document.getElementById('upload'),
file = document.getElementById('file')

importFile.addEventListener('click', () => {
  file.click();
})

input.addEventListener('change', () => {
  const file = input.files[0];
  if (file) {
    const listItem = document.createElement('p');
    listItem.textContent = file.name;
    list.appendChild(listItem);
  }
});

//handle progress
let bar = document.querySelector("#progress");
window.addEventListener("scroll", () => {
let max = document.body.scrollHeight - innerHeight;
bar.style.width = `${(pageYOffset / max) * 100}%`;
});