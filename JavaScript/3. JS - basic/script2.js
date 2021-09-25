const button = document.querySelector('.js.translate');

const handleButtonTranslateClick = async () => {
    const text = document.querySelector('.js-text')[0].value;
    const response = await fetch('https://api.funtranslations.com/translate/yoda.json',
    {
        method: 'POST',
        body: JSON.stringify({text: text}),
        headers: {
            'Content-Type:': 'application/json'
        }
    });

    const data = await response.json();
    console.log(data);
}

button[0].addEventListener('click', handleButtonTranslateClick);