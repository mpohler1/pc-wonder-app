export function convertSpacesToHyphens(string) {
    return string.replace(/ /g, '-');
}

export function convertHyphensToSpaces(string) {
    return string.replace(/-/g, ' ');
}
