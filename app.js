
// Q1
// var firstName = prompt("Enter your name")

// var a = firstName.toUpperCase();

// document.write(a)


// Q2

// var name1 = prompt("Enter your name");

// firstChar = name1.slice(0,1);
// otherchar = name1.slice(1);
// firstChar = firstChar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// console.log(firstChar+otherchar);


// strings:measuring length and extracting parts


// Q1

// var fmobile = prompt("Enter Your favorite mobile phone");

// fmobile = fmobile.length;

// document.write(fmobile);


// Q2

// var cities = prompt("Enter Your city");

// cities = cities.slice(-1);

// document.write(cities);



// strings: finding segments

// Q1

// var country = "pakistani";

// country = country.match("n");

// document.write(country)


// Q2

// var username = prompt("Enter username");
// for (i = 0; i < username.length; i++) {
//    if (username.charAt(i) === "@") {

//       alert("Enter a valid username")
//    } else if (username.charAt(i) === ".") {
//       alert("Enter a valid username")
//    } else if (username.charAt(i) === ",") {
//       alert("Enter a valid username")
//    } else if (username.charAt(i) === "!") {
//       alert("Enter a valid username")
//    }
   

// }



// Q3

// var str = "The quick brown fox jumps over the lazy dog"

// str1 = str.split(" ");

// str2 = str1.length;

// document.write(str2);



// strings:finding segments

// Q1

// var country = "pakistan";

// country  = country.charAt(3);

// document.write(country);



// strings:replacing characters

// Q1

// var city = "Hyderislam"

// city = city.replace("Hyderislam","Hyderabad");

// document.write(city);


// Q2


// var message = "Ali and sami are best friends. They play cricket and football together";

// newMessage = message.replace(/and/g ,"&");

// document.write(newMessage);



// Rounding numbers

// Q1

// b

// var num = prompt("Enter number");

// num1 = Math.round(num);

// document.write(num1);


// c

// var num2 = prompt("Enter Number");

// num2 = Math.floor(num2)

// document.write(num2);

// d

// var num3 = prompt("Enter the number");

// num3 = Math.ceil(num3);

// document.write(num3);




// Q2

// b

// var num = prompt("Enter number");

// num1 = Math.round(num);

// document.write(num1);


// c

// var num2 = prompt("Enter Number");

// num2 = Math.floor(num2)

// document.write(num2);

// d

// var num3 = prompt("Enter the number");

// num3 = Math.ceil(num3);

// document.write(num3);


// Generating random numbers

// Q1
// var dice = Math.random()*7

// dice = Math.floor(dice);

// document.write(dice);

// Q2

// var headuser = prompt("Enter heads username ");
// var tailuser = prompt("Enter tails username ");

// toss = Math.random()*2;
// toss = Math.floor(toss)


// if(toss === 0){
//     document.write( "Heads"+ " " + headuser + " " + "win the toss");
// }else{
//     document.write("Tails" + " " +tailuser +" " + "loss the toss");
// }

// Q3


// var guessnum = parseInt(prompt("Enter any number 1 and 10"));

// var randomnum = Math.floor(Math.random()*11)

// if(guessnum ===randomnum){
//   document.write("won the match")
// }else{
//    document.write("lost the match"+randomnum);
// }





// Q3

// converting strings to integers and decimals

// Q1
 
// var weight = prompt("Enter Your weight");

// weight = parseInt(weight);

// weight = parseFloat(weight)

// document.write(weight+5);



// converting strings to numbers, numbers to string

// Q1

// var num = "472";

// var num1 = Number(num)

// document.write(num + " " + typeof(num1))


// Q2

// var num2 = 35.36;

// num2 = num2.toString();

// num2 = num2.replace(".","" )

// document.write(num2)



// controlling the length of decimals

// Q1

// var a = 30;
// var b = 45;

// var percentage = a/b*100;

// percentage = percentage.toFixed();
// console.log(percentage);






