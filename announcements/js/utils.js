async function readFile (file) {
    return new Promise((resolve) => {
        let reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsText(file);
    });
}

async function readFileFromURL (url) {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;
            hide();
            resolve(xhr.response);
        }
        xhr.open('GET', `https://cors-anywhere.herokuapp.com/${url}`, true);
        xhr.send();
    })
}

function show () {
    let div = document.getElementById('status')
    div.style.display = 'block';
}

function hide () {
    let div = document.getElementById('status')
    div.style.display = 'none';
}