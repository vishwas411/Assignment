const xml_parser = require('xml-parser')
const fs = require('fs')

const xml_parser_helper = function (location) {
    try {
        var data = fs.readFileSync(location, 'utf8');
        const parsedXml = xml_parser(data);
        return parsedXml;
    } catch (e) {
        console.log('Error:', e.stack);
    }
}

const parsedXml = xml_parser_helper(process.argv[2])
console.log(parsedXml);


