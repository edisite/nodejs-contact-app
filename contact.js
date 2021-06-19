const fs            = require('fs');
const readline      = require('readline');
const chalk         = require('chalk');

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

const loadContact = () => {
    const file      = fs.readFileSync('data/contact.json','utf8');
    const contacts  = JSON.parse(file);
    return contacts;
}

const simpanContact = (nama,email,noHP)=>{
    const contact   = {nama, email, noHP};

    const contacts = loadContact();
    contacts.push(contact);
    fs.writeFileSync('data/contact.json',JSON.stringify(contacts));
    rl.close();
};

const listContact = () => {
    const contacts = loadContact();
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    }
    );
};

const detailContact = (nama) => {
    const contacts = loadContact();
    // console.log(nama);
    const contact = contacts.find(
        (contact) => escape(contact.nama).toLowerCase() === escape(nama).toLowerCase()        
        );

    if(!contact){
        console.log(chalk.red.inverse.bold(`${nama} tidak di termukan`));
        return false
    }

    console.log(chalk.red.inverse.bold(`${contact.nama}`));
    console.log(chalk.blue.inverse.bold(`${contact.noHP}`));
    if(contact.email){
        console.log(chalk.green.inverse.bold(`${contact.email}`));

    }

};

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter(
        (contact) => escape(contact.nama).toLowerCase() !== nama.toLowerCase()
    )
    if(contacts.length === newContacts.length){
        console.log(chalk.red.inverse.bold`${nama} tidak di termukan`);
        return false;
    }
    fs.writeFileSync('data/contact.json',JSON.stringify(newContacts),'utf-8');
    console.log(`${nama} berhasil di hapus`);

};


module.exports = {tulisPertanyaan, simpanContact, listContact, detailContact, deleteContact};
