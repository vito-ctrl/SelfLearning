const convertTemperature = (tem, unit) => {
    if(unit == 'C'){
        let F = (tem * 9/5) + 32;
        console.log(`${tem}°F is equivalent to ${F}°C.`);
    } else if (unit == 'F'){
        let C = (tem - 32) * 5/9;
        console.log(`${tem}°C is equivalent to ${C}°F`);
    } 
}

convertTemperature(30, 'C');