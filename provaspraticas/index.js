//Princiapal: Liste o nome dos passageiros
//Bonus (a) - Liste o nome dos vegetarianos/veganos

//Bonus (b) - Organize os passageiros por ordem de conexões

const passengers = [{
    id: 1,
    passengerName: "Freddie Mercury",
    isVEgetarianOrVegan: false,
    connectedFlights: 2,


  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVergan: true,
    connectedFlights: 4,

  },
  {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlightS: 1,
  },

]

function listaNome2(list) {
	const nomes = []
  passengers.forEach(({passengerName}) => {
  	nome.push(passengerName)
  })
  return nomes
}

//function listaNome(list) {
//  return list.map((obj) => obj.passengerName)
//}

// outra maneira mais simples

const listaNome = (list) => list.map(({passengerName}) => passengerName)

//parei no minuto 24

const nomes = listaNome(passengers)
console.log(nomes)