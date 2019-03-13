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

const pieBuilder = (monkeybutts) => {
    let domString = '';
    monkeybutts.forEach((pie) => {
        // console.log(pie);
        domString += `<div class="">`
        domString += `<h2>${pie.name}</h2>`;
        domString += `<img src=${pie.imageURL}>`;
        domString += `</div>`
    })
    // console.log(domString);
    printToDom('pies', domString);
};
    const buttonClick = (e) =>{
    const buttonId = e.target.id;
    const selectedPies = [];

    pies.forEach((pie) => {
        if (buttonId === pie.instructor) {
            selectedPies.push(pie);
        }
    });
    if (buttonId === 'All'){
        pieBuilder(pies);
    
    } else {
        pieBuilder(selectedPies);
    }
    // pieBuilder(selectedPies);

};
const buttonEvents = ()=> {
    document.getElementById('Zoe').addEventListener('click', buttonClick);
    document.getElementById('Saul').addEventListener('click', buttonClick);
    document.getElementById('Michael').addEventListener('click', buttonClick);
    document.getElementById('All').addEventListener('click', buttonClick);
}

const init = () => {
    buttonEvents();
    pieBuilder(pies);
}
init();