const apiURL = "https://api.quotable.io/random";
const quote = document.querySelector(".quote-box blockquote");
const author = document.querySelector(".quote-box span");

async function getquote(url){
    const response = await fetch(url);
    var data= await response.json();
    
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML,"Tweet Window","width:300","height:600")
}