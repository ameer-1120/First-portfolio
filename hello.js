function generate_random_number(num)
{
    return Math.floor(Math.random()* num);
}

const messageMaker ={
    greet: ['good morning' , 'how are you', 'good noon'],
    advice :['eat healthy food' , 'exercise daily','go for a walk'],
    messages:['good luck' , 'have a great day', 'nice']
}
let message = [];
for (let  i in messageMaker)
{
    let optionIndex = generate_random_number(messageMaker[i].length)

    switch(i) {
        case 'greet':
          message.push(`hello "${messageMaker[i][optionIndex]}".`)
          break
        case 'advice':
          message.push(`You should: "${messageMaker[i][optionIndex]}".`)
          break
        case 'messages':
            message.push(`You are having: "${messageMaker[i][optionIndex]}".`)
            break
        default:
          message.push('There is no message for you.')
}
}

 function generateMessage(i)
 {
    const j = message.join('\n');
    console.log(j);
 }

 generateMessage(message)