export default function isNotWithinRange(value, range) {
    return !(value >= range.min && value <= range.max)
}
