   /* var quotes = [
   { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
       { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
       { text: "So many books, so little time.", author: "Frank Zappa" },
       { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
       { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
       { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
       { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" }
   ];

   function showRandomQuote() {
       var randomIndex = Math.floor(Math.random() * quotes.length);
       var randomQuote = quotes[randomIndex];

       document.getElementById("quote").innerHTML = randomQuote.text;
       document.getElementById("author").innerHTML = randomQuote.author;
   }
 */

   /******************BOUNS***********************/

   let quotesCopy = [];

function showRandomQuote() {
    var quotes = [
        { text: "Be yourself; everyone else is already taken.", author: "― Oscar Wilde" },
        { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "― Marilyn Monroe" },
        { text: "So many books, so little time.", author: "― Frank Zappa" },
        { text: "Two things are infinite: the universe and human stupidity...", author: "― Albert Einstein" },
        { text: "A room without books is like a body without a soul.", author: "― Marcus Tullius Cicero" },
        { text: "You know you're in love when you can't fall asleep...", author: "― Dr. Seuss" },
        { text: "Be the change that you wish to see in the world.", author: "― Mahatma Gandhi" },
        { text: "A friend is someone who knows all about you and still loves you.", author: "― Elbert Hubbard" },
        { text: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself...'", author: "― C.S. Lewis, The Four Loves" }
    ];

    if (quotesCopy.length === 0) {
        quotesCopy = [...quotes];
    }

    var randomIndex = Math.floor(Math.random() * quotesCopy.length);
    var randomQuote = quotesCopy.splice(randomIndex, 1)[0];

    document.getElementById("quote").innerHTML = randomQuote.text;
    document.getElementById("author").innerHTML = randomQuote.author;
}