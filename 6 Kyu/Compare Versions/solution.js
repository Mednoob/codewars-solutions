function compareVersions (version1, version2) {
    const a = version1.split(".");
    const b = version2.split(".");

    for (let n = 0; n < Math.max(a.length, b.length); n++) {
        if (~~a[n] < ~~b[n]) return false;
        if (~~a[n] > ~~b[n]) break;
    }

    return true;
}
