// Task 1: Decode the reversed messages

let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";

let message2 = "!ecitcarp htiw retteb teg ll'uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";

let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";

let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";


// Split, reverse, and join each message
let decodedMessage1 = message1.split("").reverse().join("");
let decodedMessage2 = message2.split("").reverse().join("");
let decodedMessage3 = message3.split("").reverse().join("");
let decodedMessage4 = message4.split("").reverse().join("");


// Log decoded messages
console.log(decodedMessage1);
console.log(decodedMessage2);
console.log(decodedMessage3);
console.log(decodedMessage4);


// Task 2: Create your own inspirational messages

let inspiration1 = "Keep learning and never give up!";
let inspiration2 = "Small steps can lead to big progress!";
let inspiration3 = "Practice makes coding easier!";


// Reverse the messages
let reversedInspiration1 = inspiration1.split("").reverse().join("");
let reversedInspiration2 = inspiration2.split("").reverse().join("");
let reversedInspiration3 = inspiration3.split("").reverse().join("");


// Log reversed messages
console.log(reversedInspiration1);
console.log(reversedInspiration2);
console.log(reversedInspiration3);