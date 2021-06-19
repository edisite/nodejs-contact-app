const yargs = require('yargs');

const contact = require('./contact');
// yargs.command('add','menambah contact baru',()=>{}, (argv)=>{
//    console.log(argv.nama); 
// })

// yargs.parse();


// builder - about the options that your command accepts: buat terima parameter


yargs.command({
   command:'add',
   describe:'menambahkan contact',
   builder:{ 
      nama:{
         describe:'masukan nama lengkap',
         demandOption:true, // wwajib di isi atau tidak
         type:'string',
      },
      email:{
         describe:'masukan email',
         demandOption:false,
         type:'string',
      },      
      noHP:{
         describe:'masukan no HP',
         demandOption:true,
         type:'string',
      },
   },
   handler(argv) {
      // const contact = {
      //    nama: argv.nama,
      //    email: argv.email,
      //    noHP: argv.noHP
      // };
      // console.log(contact);
      contact.simpanContact(argv.nama,argv.email,argv.noHP);
   },
})

yargs.parse();
