
const path = require('path');
const filesystem = require('fs');
const root = __dirname;
const filePath = path.join(root, 'demo.json');

const request = require('request');
const parser = require('node-html-parser');

const specialCountryNames = [
    "C&ocirc;te d'Ivoire"
];

const translatedCountryNames = {
    id_0: 'Ivory Coast'
};

const url = 'https://www.worldometers.info/gdp/gdp-by-country/';

request(url, (error, response, body) => {

    const root = parser.parse(body);
    const table = root.querySelector('#example2');
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    for (let row of rows) {

        const cells = row.querySelectorAll('td');
        const information = {
            country: cells[1].childNodes[0].rawText.trim(),
            gdp: cells[3].childNodes[0].rawText,
            population: cells[5].childNodes[0].rawText,
        };

        let index = specialCountryNames.indexOf(information.country);

        if (index >= 0) {
            information.country = translatedCountryNames['id_' + index];
        }

        if (information.country.includes('&amp;')) {
            information.country = information.country.replace(/&amp;/g, 'and');
        }

        information.url = 'https://en.wikipedia.org/wiki/' + information.country.replace(/ /g, '_');
        
        data.push(information);
    }

    filesystem.writeFileSync(filePath, JSON.stringify(data, null, 4));
});