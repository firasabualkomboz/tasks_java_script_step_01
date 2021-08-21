
let a = "Elzero Web School";

let inc = a.charAt(2).toUpperCase();

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); 

console.log(a.charAt(13).toUpperCase().repeat(8));

console.log(a.split(" ", 1 ))

console.log(a.substr(0, 6) + " " + a.substr(-6));

console.log(a.charAt().toLowerCase() + a.slice(1,a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase());

console.log("########################## -> END STRING METHODS <- ##########################");

console.log(typeof"feras" === typeof"sammer");

console.log("########################## -> END typeof <- ##########################");

let sal = 300;

if (sal === 450){
   
    sal += 10;
    console.log(sal);
}else if (sal == 300){

    sal += 50;
    console.log(sal);
}

console.log("########################## -> END IF  <- ##########################");
