const tS = n => n > 9 ? `${n}` : `0${n}`

function humanReadable(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;

    return `${tS(h)}:${tS(m)}:${tS(s)}`;
}
