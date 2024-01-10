export default function reverseString(str) {
    if (!str) {
        return '';
    }

    const strArr = str.split('');
    strArr.reverse();
    return strArr.join('');
}