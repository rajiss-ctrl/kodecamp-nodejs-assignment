function formatName(name) {
    return name.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage
console.log(formatName("victor red")); // Output: Victor Red
console.log(formatName("raji blue")); // Output: Raji Blue
