function generateRandomPassword(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    while (password.length < length) {
        password += chars[parseInt(Math.random() * chars.length)];
    }
    return password;
}

console.log(generateRandomPassword(9));