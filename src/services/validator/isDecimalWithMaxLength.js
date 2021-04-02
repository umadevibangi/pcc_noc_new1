export default function (value, limit) {
    return (value.search(new RegExp(`^[0-9]{0,${limit}}(\\.[0-9]{0,2})?$`)) === 0)
    ? true
    : false
}
