export default function capitalize(str) {
    if (!str) {
        return '';
    }

    if (typeof str === 'number') {
        return 'Invalid input';
    }

    return str[0].toUpperCase() + str.substring(1);
}