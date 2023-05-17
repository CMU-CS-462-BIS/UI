
upload.addEventListener('change', (e) => {
    e.preventDefault()
    let fr = new FileReader()
    fr.readAsText(upload.files[0])
    fr.onload = function () {
        const text = fr.result;
        output.innerHTML = text // render text in file
        calculateHandle(text)
    }

    console.log(text);
})