//IIFE= Immidiately Invoked Function Expression   USe use it for immediate exicution and to remove pollution from the global variables
(function chai(){//named IIFE
    console.log(`DB Connector`);
}) ();

( (name)=>{
    console.log(`DB Connector ${name}`);
}) ("Trinath");