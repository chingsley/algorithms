export default function indent(count) {
    let str = '';
    while (count-- > 0)
        str += ' ';
    return str;
}
