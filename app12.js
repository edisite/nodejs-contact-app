const yargs = require('yargs');

const contact = require('./contact');
// yargs.command('add','menambah contact baru',()=>{}, (argv)=>{
//    console.log(argv.nama); 
// })

// yargs.parse();


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
    .demandCommand(); // untuk warning like *not enough  non-option ... need at least 1 argument

    // menampilkan daftar contact

    yargs.command({
        command:'list',
        describe:'Menampilkan semua nama & no HP contact',
        handler(){
            contact.listContact();
        }
    }

    );

    // menampilkan detail sebuah contact
    yargs.command({
        command:'detail',
        describe:'menapilkan contact detail berdasarkan nama',
        builder:{
            nama:{
                describe:'Nama LEngkap',
                demandCommand:true,
                type:'string',
            },
        },
        handler(argv){
            contact.detailContact(argv.nama);
        }
    }

    );
    // menampilkan detail sebuah contact
    yargs.command({
        command:'delete',
        describe:'delete contact detail berdasarkan nama',
        builder:{
            nama:{
                describe:'Nama LEngkap',
                demandCommand:true,
                type:'string',
            },
        },
        handler(argv){
            contact.deleteContact(argv.nama);
        }
    }

    );

yargs.parse();
