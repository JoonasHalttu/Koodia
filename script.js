// alert('täällä ollaan');//
/*
monta
riviä
kommenttia
*/

console.log('Täällä ollaan')

//muuttujat: var let tai const

let ika = 16;
ika = ika + 1;


console.log(ika);

const pii = 3.14;


console.log('piin likiarvo:' + pii);

const etunimi='Joonas';//string
const sukunimi='Halttu';//string
const syntymavuosi=2004;//number, eli kokonaisluku
const lahtelainen=true;//boolean
let maarittelematon; //undefined

console.log("syntymävuoden tyyppi: " + typeof syntymavuosi);
console.log("nimen tyyppi: " + typeof etunimi);
console.log("lahtelaisuuden tyyppi: " + typeof lahtelainen);

//template string
console.log('Nimeni on ' + etunimi + ' ' + sukunimi + '  ja syntymävuoteni on ' + syntymavuosi);

const henkilotieto = `nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`

console.log(henkilotieto);

console.log(`henkilotiedon pituus on: ${henkilotieto.lenght}
`);

console.log(henkilotieto.toUpperCase());


console.log(henkilotieto.substring(0, 9));

console.log(henkilotieto.substring(0,9).toUpperCase());

console.log(henkilotieto.split(' ')[2]);

console.log(henkilotieto.split(' '));

const autoja = ['Hyundai', 'Toyota', 'Volvo'];

autoja[3]='BMW';

autoja.push('Saab')

autoja.unshift('Mersu')

autoja.pop();

console.log(autoja);

const opiskelija = {
  id: 1,
  etunimi: 'Joonas',
  sukunimi: 'Halttu',
  syntymävuosi: 2004,
  koulutus: ['peruskoulu'],
  osoite: {
    katu:'Ståhlberginkatu 4A',
    postinumero:15500,
    kunta: 'Lahti'
  }
}

console.log(opiskelija.etunimi);

const laksyt = [
{
  id: 1,
  tehtava: 'Ohjelmointi, HTML',
  tehty: true
},
{
  id: 2,
  tehtava: 'Ohjelmointi, CSS',
  tehty: true
},
{
  id: 3,
  tehtava: 'Ohjelmointi, JavaScript',
  tehty: false
}
];

for(let i=0; i <=10; i++){
console.log(`For loopin iteraatioluku on: ${i}`);
}

let i = 0;
while(i<=10){
  console.log(`While iteraatioluku on: ${i}`);
  i++;
}

for(let i=0; i<laksyt.length; i++){
  console.log(laksyt[i].tehtava);
}

const laksyTehtava = laksyt.map(function(laksy){
  return laksy.tehtava;
});

console.log(laksyTehtava);