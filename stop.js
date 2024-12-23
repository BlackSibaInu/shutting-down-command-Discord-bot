
switch (commandName) {
    case 'command_name':
        const inputPassword = args.join(' ').slice(5); // Извлекаем пароль из команды

        if (inputPassword === shutdownPassword) {
            message.channel.send('Bot is shutting down...'); //логика при правильного ввода пароля
            console.log('BlackSibaInu - Channel'); //
            client.destroy();
        } else {
            message.channel.send('Invalid password.'); //логика при ошибочной ввода пароля
        }
        break;

    }

function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@/\|-*+~!#$%^&*()_={};]["'; //символы для генерацй пароли
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

let shutdownPassword = generateRandomPassword(128); //максимальная длина символов
console.log(`Shutdown password: ${shutdownPassword}`); //сгенерированный пароль отправляется в консоль