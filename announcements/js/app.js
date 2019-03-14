async function main () {
    const reText = /<.+=[\w#\d]+>(.+?)<\/.+>/g;
    const reSize = /size=(.+?)>/;

    let text = await readFileFromURL('http://us-clientupdate.zlongame.com/USMHMNZ/android/android_announcements.txt');
    let result;
    let lines = [];

    text = text.replace(/<color=#42241C00>口口+<\/color>/g, '');
    while ((result = reText.exec(text)) !== null) {
        let size = result[0].match(reSize);
        lines.push({
            text: result[1],
            size: size ? `${size[1] / 2}px` : '16px'
        });
    }
    print(lines);
}

function print (lines) {
    for (line of lines) {
        const div = document.createElement('div');
        div.innerText = line.text;
        div.style.fontSize = line.size
        document.getElementsByTagName('div')[0].appendChild(div);
    }
}

main();