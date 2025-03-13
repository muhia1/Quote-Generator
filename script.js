function generate(){
    var quotes = {
        "- Mahatma Gandhi" : '“Be the change that you wish to see in the world.”',
        "- Ralph Waldo Emerson" : '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        "- M.J. Kanja" : '“If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.”',
        "- M. Robert M." : '“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”',
        "- Garrison Keillor" : '“Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.”',
        "- Elizabeth N." : '“We do not see things as they are, we see them as we are.”',
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() *authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;


}
    // Like this Repository
