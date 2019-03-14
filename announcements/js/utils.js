async function readFileFromURL (url) {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;
            resolve(xhr.response);
        }
        xhr.open('GET', `https://cors-anywhere.herokuapp.com/${url}`, true);
        xhr.send();
    })
}

function hideLoading () {
    let div = document.getElementById('status');
    div.style.display = 'none';
}