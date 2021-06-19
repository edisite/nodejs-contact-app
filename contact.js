const fs            = require('fs');
const readline      = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    console.log('The path not exists.');
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contact.json';

if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan,(nama) =>{
            resolve(nama);
        });
    });
};

const simpanContact = (nama,email,noHP)=>{
    const contact   = {nama, email, noHP};
    const file      = fs.readFileSync('data/contact.json','utf8');
    const contacts  = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('data/contact.json',JSON.stringify(contacts));
    rl.close();
};

module.exports = {tulisPertanyaan, simpanContact};
