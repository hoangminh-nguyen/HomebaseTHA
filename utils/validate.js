
function validateUserName(name) {
    if (!name || name.length == 0) {
        return false;
    }
    return true;
}

function validateUserAge(age) {
    return Number.isInteger(age) && age > 0;
}

module.exports = {
    validateUserName,
    validateUserAge
}