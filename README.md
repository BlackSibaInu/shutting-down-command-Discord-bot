### shutting-down-command-Discord-bot

Этот проект представляет собой бот для автоматизации процесса остановки бота в Discord с помощью рандомной генераций пароли.


```javascript

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
```

---

#### Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/blacksibainu/shutting-down-command-Discord-bot.git
cd shutting-down-command-Discord-bot
```

1. Запуск проекта
```bash
node index.js
```

2. Команда
```bash
prefis/slash stop pass:ваш_пароль

пример:
 /stop pass:ABC123
 /!stop pass:ABC123
```

