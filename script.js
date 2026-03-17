let message = 'Welcome';

function greetMessage(){
  const inputMessage = document.getElementById('userInput').value;

  if(inputMessage === ''){
    document.getElementById('greetMessage').innerText = 'Please enter your name';
    return
  }

  document.getElementById('greetMessage').innerText = `${message} ${inputMessage}`
}



