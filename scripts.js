const pies = [
    {
        name:'Dutch Apple Pie',
        ingredients: 'Apples, sugar, butter, cinnimon, nutmeg, dutch people',
        bakeTemp: 5000,
        drinkPairing: 'Earl Grey tea',
        imageURL: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        instructor: 'Zoe',
        iceCream:'Vanilla'
    },
    {
        name:'Pecan Pie',
        ingredients: 'Pecans, sugar, butter, flour',
        bakeTemp: 5000,
        drinkPairing: 'Milk',
        imageURL: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
        instructor: 'Saul',
        iceCream:'Vanilla'
    },
    {
        name:'Keylime Pie',
        ingredients: 'lemons, sugar, butter, flour',
        bakeTemp: 5000,
        drinkPairing: 'Water',
        imageURL: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0020/img38l.jpg',
        instructor: 'Saul',
        iceCream:'none'
    }
];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById (divId);
    selectedDiv.innerHTML = textToPrint;
}; 

const pieBuilder = () => {
    let domString = '';
    pies.forEach((pie) => {
        // console.log(pie);
        domString += `<h2>${pie.name}</h2>`;
        domString += `<h2>${pie.ingredients}</h2>`;
        domString += `<h2>${pie.bakeTemp}</h2>`;
        domString += `<img src=${pie.imageURL}></h2>`;
    })
    // console.log(domString);
    printToDom('pies', domString);
};

const init = () => {
    pieBuilder();
}
init();