const genPass = (config) => {
    const characters = {
        numbers: '0 1 2 3 4 5 6 7 8 9',
        symbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
        uppercase: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    let finalChar = '';
    let password = '';

    for(let prop in config){
        if(config[prop] === true){
            finalChar += characters[prop] + ' ';
        }
    }

    finalChar = finalChar.trim();

    finalChar = finalChar.split(' ');

    for(let i = 0; i < config.charNum; i++){
        password += 
        finalChar[Math.floor(Math.random() * finalChar.length)];
    }

    return password;
}

export default genPass;