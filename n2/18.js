function isValidIPv4(ip) {
    let parts = ip.split(".");

    if (parts.length !== 4) {
        return false;
    }

    for (let i = 0; i < parts.length; i++) {
        let num = Number(parts[i]);

        if (parts[i] === "" || num < 0 || num > 255) {
            return false;
        }
    }

    return true;
}

console.log('"192.168.0.1" is a valid IPv4 address:', isValidIPv4("192.168.0.1"));