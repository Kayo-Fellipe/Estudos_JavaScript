

// Comentário - O 'const' serve para armazenar uma váriavel não alterável
const firstName = 'Kayo';
console.log(firstName);


// Comentário - O 'let' serve para armazenar uma váriavel que, futuramente pode ser alterada.
let lastName = 'Fellipe'
console.log(lastName)

// Comentário - Váriaveis primitivas
let itemName = 'Pen' //String
let itemPrice = 3 //Number
let itemAvailable = true //Boolean (true,false)
let itemColor //Underfined - Valor não foi definido ainda, então ele não é string,number...
console.log(itemColor)
let itemTeste = null
console.log(itemTeste) //Null - Caso você queira apagar um dado de uma váriavel use null, é usado para reutilização.

// Comentário - typeof usado para idenficiar o tipo de váriavel
let myCar = 'Golf'
console.log(typeof myCar)

// Comentário - Váriaveis referência (objects, array, fuctions)
// Váriavel Objeto - É um grupo, então podemos criar uma váriavel e dentro dessa váriavel incluir outras váriaveis, se transformando então em uma propriedade.
let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}
console.log(pen)
//Caso eu queira trocar o nome do que está dentro da váriavel, basta seguir o exemplo abaixo.
pen.itemColor = 'Blue'
console.log(pen)
console.log(pen.itemColor) //Selecionar a váriavel que você quer 'imprimir'.

//Váriavel Array - É para criar um lista, e podemos criar uma lista de objetos também.
        //index - 0         1        2
let friends = ['Marcos', 'Silva', 'Elisa']
console.log(friends)
//Dessa forma você seleciona qual você quer 'imprimir'.
console.log(friends[0])
//Substituir
friends[0] = 'Kayo'
console.log(friends)

//Váriavel Functions - É um grupo de instruções, taferas ou calculos que você pode criar.
function saleStatus(status, total) { //(status, total) <--Parametros
    console.log('Transaction ' + status + '! Total amount: $' + total)
}
saleStatus('Approved', 30) //('approved', 30) <--argumentos
//Function com calculo matemático
function percentage10(price){
    return price - (price * 10 / 100)
}
//1°Forma de imprimir o valor
let total = percentage10(20)
console.log(total)
//2°Forma de imprimir o valor
console.log(percentage10(20))

// Operadores Aritméticos
let num1 = 3
let num2 = 2
console.log(num1 + num2) //SOMA
console.log(num1 - num2) //SUBTRAÇÃO
console.log(num1 * num2) //MULTIPLICAÇÃO
console.log(num1 / num2) //DIVISÃO
console.log(num1 % num2) //RESTO DA DIVISÃO
console.log(num1 ** num2) //EXPONENCIAL
//Operador de incremento ++
//operador de redução ou decremento --
let valor = num1 + num2
console.log(++valor) // O sinal de soma duplicado incrementa 1 número
let valor1 = num1 + num2
console.log(--valor1) // O sinal de subtração duplicado descrementa 1 número

//Operador de atribuição - Serve para reduzir o tamanho do meu código.
let num3 = 3
num3 += 20
console.log(num3) //Isso serve para qualuquer calculo num3 -= 20, num3 /= 20... 

//Operadores de comparação
let num4 = 3
console.log(num4 > 0)
console.log(num4 < 0)
console.log(num4 >= 0)
console.log(num4 <= 0)
console.log(num4 === 0) //O === verifica se são iguais
console.log(num4 !== 0) //O !== é não igual a...

//Operadores de igualdade 
let num5 = '1' //string
let num6 = 1 //Number
console.log(num5 === num6) //Strict - comparada tipo e valor.
console.log(num5 == num6) //Lose - compara somente o valor, independente do tipo.

//Operadores ternarios
let driver = 90 //90km/h     //Acima   //Abaixo
let speed = driver > 110 ? 'Above' : 'Below'
console.log(speed)

//Operadores lógicos - And = e - &&, Or = ou - || e Not = não - !
let idadeMinima = true
let tituloEleitor = true
let podevotar = idadeMinima && tituloEleitor
console.log('Pode votar: ' + podevotar)
let podeviajar = !podevotar //POde viajar é = a não pode voltar(!podevotar)
console.log('Pode viajar: ' + podeviajar)

//Operadores logicos com Strings
let corCliente = 'White' //Cor que o cliente quer, se eu escrever um underfinde, a lógica seria, o cliente não escolheu, então eu escolho por ele.
let corEstoque = 'Black' //Cor do carro disponível 
let corVendida = corCliente || corEstoque
console.log(corVendida)

//Precedencia dos operadores - Qualculo matemático, qual será calculado primeiro?
let num7 = 3 + 4 * 2 // Aqui ele fez primeiro a multiplicação e depois a soma,
console.log(num7)
let num8 = (3 + 4) * 2 // Aqui ele fez primeiro a soma e depois a multiplicação.
console.log(num8)

//If e Else 
let driverSpeed = 80
if (driverSpeed > 110) {
    console.log('Driving too fast')
}
else if (driverSpeed > 40 && driverSpeed <= 110) {
    console.log('OK')
}
else
    console.log('Driving too slow')

//Switch e case - Switch é como se fosse uma troca, e ela se baseia na variável declarada, e dentro do switchvocê tem vários cases.
let airport = 'MCO'
switch (airport) {
    case 'MCO':
        console.log('Orlando')
        break // <-- O break serve para parar quando o switch indentificar o valor que está na variável
    case 'JFK':
        console.log('John F. Kennedy')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default: //<-- Se o valor não existir, ele vai exibir essa mensagem.
        console.log('Unknown')
}

//For loop - Exemplo de como funciona - for( variável, condição, incremento)
for (i = 1; i <= 10; i++) {
    console.log('Número ', i)
}
//Explicando a lógica: O i=1, ele é por acaso <=10, se sim,
//então pega o i+1 (i++ é = a i + 1) que é = 2, ai começa o loop de novo, só que agora i=2, e assim por adiante

//While Loop - A vantagem é que você pode reutilizar variáveis setadas anteriormente no seu programa, porque agora a variável é externa.
x = 1 //<-- Variável
while (x <= 10) {
    console.log('Número ', x)
    x++ //<-- Se eu não colocar o incremento ele gera um loop infinito
}

//Do while loop - Ele primeiro executa para depois verificar, difenrete do While loop que verifica e depois executa.
a = 1
do {
    console.log('Número ', a)
    a++
} while (a <= 10)

//For in loop
const mycar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}
for (let car in mycar)
    console.log(car, mycar[car])

//For of loop
const Friends = ['Marcos', 'Ana', 'Jose']
for (let listname of Friends)
    console.log(listname)

//Adicionando o break
let y = 1
while (y <= 10) {
    if (y === 8) break
        console.log('Número ', y)
    y++
}

//OOP - Object Oriented Programming - É uma forma de agrupar, reunitilziar, organizar e etc.
// Temos as propriedas, que são os items dentro do seu objeto. Exemplo, tenho um livro, dentro desse livro tenhos as propriedades que seriam o autor, paginas, titulos e valor do livro
//Temos os métodos, que seria, o que eu posso fazer com esse livro? Ler, comprar, vender e etc.
//Propriedades
let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306
//Abaixo um exemplo de objeto e dentro dele está as propriedades
const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    //Abaixo está um uma propriedade e estou dando múltiplos valores a essa propriedade
    bookChapters: {
        chap1: 'The Fundamentals',
        chap2: 'First Law'
    }
}
console.log(book)

//Funções dentro de um objeto
const book1 = {
    book1Title: 'John Habits',
    book1Author: 'Smith Clear',
    book1Pages: 600,
    book1Chapters: {
        chap3: 'The Funny',
        chap4: 'First Up'
    },
    printBook: function() {
        console.log('Printing...')
    }
}
book1.printBook()

//Factory - É uma fábrica de objetos, ele facilita a criação e organização do seu objeto.
function createBook(title, author, pages) { //Isso é uma factory está criando o objeto abaixo.
    const book2 = {
        book2Title: title,
        book2Author: author,
        book2Pages: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book2
}
const book3 = createBook('Car Funny', 'Joshe', 290)
const book4 = createBook('Think', 'Napolean', 120)
console.log(book3)
console.log(book4)

//Adicionando propriedades dentro de um objeto
function create1Book(title, author, pages) { //Isso é uma factory está criando o objeto abaixo.
    const book5 = {
        book2Title: title,
        book2Author: author,
        book2Pages: pages,
        print1Book: function() {
            console.log('Printing...')
        }
    }
    return book5
}
const book6 = create1Book('Breand', 'Carlos', 900)
const book7 = create1Book('Her Funny', 'Kayo', 800)

book6.color = 'White' //Aqui eu adicionei a cor branca somente ao livro 6, sem que fosse incluido no livro 7.

console.log(book6)
console.log(book7)

//Constructor - É um construtor de objetos, ele tem o mesmo resultado da factory mas com menos código.
class Create2Book {
    constructor(title, author, pages) {
        this.book2Title = title //Quando eu utilizo o 'this.' ele ta falando que está variável é igual a...Por isso eu não preciso mais do return.
        this.book2Author = author
        this.book2Pages = pages
    }
}
const book9 = new create1Book('The Hospital', 'Arthur', 140)
console.log(book9)

//Objetos Built in - Podem simplificar processos, é como se fosse um objeto construido dentro do JavaScript
console.log(Math.max(1, 2, 3))
console.log(Math.min(1, 2, 3))

//String - Serve para manipular caracteres, é outro tipo de built in.
let message = 'Hey, my name is Kayo'
console.log(message.startsWith('Hey')) //startswith serve para verificar se dentro da variável existe uma palavra.
console.log(message.length) //length serve para informar a quantidade de caracteres.

//Template Literals - Ajuda a mostrar uma mensagem na tela ou organizar a escrita de um email.
const email = 'Hi Joe, \nthe meeting is confirmed! \nKayo.' //Forma medieval 
const email2 = `Hi Joe, 
the meeting is confirmed! 
Kayo.` //Forma mais bonita
console.log(email)
console.log(email2)

//O que são Arrays - É um objeto que você pode adicionar multiplos valores.
const friends2 = ['Marcos', 'Ana', 'Marcela']
const num = [1, 2, 3, 4, true]
console.log(friends2)
console.log(num)

//Adicionando valores a uma Array
const listNum = [7, 8, 9]
listNum.push(10, 11, 12) //Adiciona elementos no final da sua Array
listNum.unshift(1, 2, 3) //Adiciona elementos no começo da Array
listNum.splice(3, 0, 4, 5, 6,) //Adiciona um elemento a partir de um index(indice), então o index 3 de início, o 0 é porque eu não vou pagar nada, e o restante dos números é o que eu vou inserir.
console.log(listNum)

//Localizando itens em uma Array primitiva
const listNum1 = [6, 7, 8, 9]
console.log(listNum1.indexOf(7)) //O indexof me mostra a posição do elemento em index(indice)
console.log(listNum1.includes(7)) //O includes mostra se o valor é true ou false, se for true significa que ele está na lista, e false significa que ele o não está na lista. 

//Localizando itens em uma Array de referencia
 const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
 ]

 console.log(movies.find(function(movie){ 
    return movie.movieName == 'The Matrix'
 })) //A find só funciona usando uma função,é usada somente em Arrays de referencia, e não nas primitivas. Então temos que criar uma função para procurar alguma coisa lá dentro, e retorna o valor da procura para o método .find

// Utilizando a Arrow Function
const movies2 = [
    {id: 1, movieName1: 'Dejavu'},
    {id: 2, movieName1: 'Back to the Future'},
    {id: 3, movieName1: 'The Matrix'}
 ]

 console.log(movies2.find(movie1 => movie1.movieName1 == 'The Matrix')) //Quando usamos =>, eu estou dizendo que ele vale uma fuction e o return está incluso

 //Removendo itens da Array
 const num9 = [5, 6, 7, 8]
 const final = num9.pop() //O .pop é para remover o ultimo item da minha lista
 console.log(num9)
 console.log(final) //Ele mostra o item que foi removido 

const num10 = [5, 6, 7, 8]
const final1 = num10.shift() //O .shift remove o primeiro item da lista
console.log(num10)
console.log(final1) 

const num11 = [5, 6, 7, 8]
const final2 = num11.splice(2, 1) //No .splice você indica o index, então fica do index 2, remova 1 item
console.log(num11)
console.log(final2)  

//Esvaziando uma Array
let num12 = [5, 6, 7, 8]
num12.length = 0 //Usando o length a gente zera a lista, se ao invés de colocar 0 e eu coloque 1, então só vai imprimir o número 5
console.log(num12)

let num13 = [5, 6, 7, 8]
num13.splice(0, num13.length) //Usando o splice, eu aponto um index, e o .length meio que representa a lista inteira
console.log(num13)

//concatenando uma Array - Os exemplos abaixo vão mostrar como podemos juntar uma Array com a outra, ou dividir ela
let numbers1 = [5, 6, 7, 8]
let letters1 = ['a', 'b', 'c']
all = numbers1.concat(letters1)
half = all.slice(3, 5) //Usando a .splice podemos criar um Array a partir de outra
console.log(all)
console.log(half)

//Utilizando o Join Array - O .join serve para adicionar qualquer coisa que você queira a uma array
let clients = ['Andre', 'Marcela', 'Jose']
console.log(clients)
let clientsJoin = clients.join(', ')
console.log(clientsJoin)
//Revertendo a sua Array
clients.sort() //O .sort organizar em ordem alfabetica ou númerica
console.log(clients)
clients.reverse() //O .reverse pega o primeiro e passa pra ultimo
console.log(clients)

//Verificando elementos na Array
const tempLondon = [18, 13, -5, 2] 
const tempPositive = tempLondon.every(function(value) { //A every chega todos os valores dentro de uma Array  
    return value >= 0
})
// Ele foi na variável tempLondon, onde existe uma Array, ele verificou cada número, depois ele chamaou a função value.
console.log(tempPositive)
const tempJapan = [18,]

// function declaration - Eu chammo a função ao invés da variável
function movie3 () {
    console.log('The matrix')
}
movie3()
// Function Expression - É uma função sem nome, eu chamo a variável ao invés da função
const car = function() {
    console.log('Tesla')
}
car()

// Utilizando os argumentos em funções

function price () { 
    let  total = 0
    for (let value of arguments) // O value seria o que está dentro da função, o of é em, e o arguments passa pelos valores 10,20...
        total+= value
    return total
}
console.log(price(10, 20, 40, 50))

//Configurando parametros default
// Calculando o valor de um financiamento
function carLoan(loan, rate = 2.5, years = 5) {
    return(loan * rate / 100 * years) + loan
}
console.log(carLoan(20000))
console.log(carLoan(20000, 2.5, 5)) //Da para fazer dessa forma se já definirmos os valores na função

// Calculadora de zit - De gorjeta 


