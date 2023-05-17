const upload= document.querySelector('#file')
const textHandle= document.querySelector('.content-code')
upload.addEventListener('change', (e) => {
    e.preventDefault()
    let fr = new FileReader()
    fr.readAsText(upload.files[0])
    fr.onload = function () {
        const text = fr.result;
       textHandle.innerHTML=text;
        console.log(text);
    }

})