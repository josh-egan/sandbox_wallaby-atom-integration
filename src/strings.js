export default {
  startsWith: function(str, pattern) {
    if (!str || !pattern) return false
    if (pattern.length > str.length) return false
    return str.substr(0, pattern.length) === pattern
  }
}
