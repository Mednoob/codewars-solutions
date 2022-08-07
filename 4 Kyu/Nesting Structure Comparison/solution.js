Array.prototype.sameStructureAs = function (other) {
    return this.length === other.length && this.every((x, i) => {
        if (!Array.isArray(x)) return true;
        if (!Array.isArray(other[i])) return false;

        return x.sameStructureAs(other[i])
    });
};
