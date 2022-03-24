class Cities {
    constructor(cityName, country) {
        this.cityName = cityName;
        this.country = country;
    }
}
const city = new Cities('Salvador', 'br')

const weatherData = getWeather().then(weatherP =>{ 
    writeWeather(weatherP)
  })
  .catch(err => console.error(err));

function writeWeather(data) {
    
    const dados = document.querySelector('.teste')
    let tempAtual = data.main.temp
    let sensacaoT = data.main.feels_like
    dados.innerText += `A temperatura atual em Salvador é de ${tempAtual.toLocaleString('pt-BR')} A sensação térmica é de ${sensacaoT.toLocaleString('pt-BR')}`
    console.log(tempAtual)
  }
 