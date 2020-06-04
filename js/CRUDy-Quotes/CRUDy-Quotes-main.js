
const delete1Quote  = document.querySelector('#delete_quote')
const submitQuote   = document.querySelector('#submit_quote')
const update1Quote  = document.querySelector('#update_one_quote')
const listQuotesBtn = document.querySelector('#list_quotes_btn')

//Lists quotes on load
printQuotesFunc();

//lists quotes when button clicked
listQuotesBtn.addEventListener('click', () => {
  printQuotesFunc();
});

//updates the first quote by that name
update1Quote.addEventListener('click', _ => {
  fetch('https://crudy-quotes.herokuapp.com/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `${document.querySelector("#quote_name").value}`,
      quote: `${document.querySelector("#quote").value}`
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      printQuotesFunc();
    })
})

submitQuote.addEventListener('click', _ => {
  fetch('https://crudy-quotes.herokuapp.com/quotes', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `${document.querySelector("#quote_name").value}`,
      quote: `${document.querySelector("#quote").value}`
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      printQuotesFunc();
    })
})

//Deletes specific quote if both fields are entered correctly
  delete1Quote.addEventListener('click', _ => {
  fetch('https://crudy-quotes.herokuapp.com/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `${document.querySelector("#quote_name").value}`,
      quote: `${document.querySelector("#quote").value}`
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No quote to delete') {
        no_delete_message.textContent = '**No such quote to delete'
      } else {
        printQuotesFunc();
      }
    })
    .catch(console.error)
  })


  //List quotes helper function
   function listQuotes (array) {
    document.getElementById("list_quotes").innerHTML = '';
    for(var i = 0; i < array.length; i++) {
      document.getElementById("list_quotes").innerHTML += '\u2022' + array[i].name + ': ' + array[i].quote + '<br></br>';
    }
  }

  // Generates a full list of quotes available
    async function printQuotesFunc() {
    no_delete_message.textContent = '';
    try{
      const response =  await fetch('https://crudy-quotes.herokuapp.com/quotes');
      if(response.ok){
        let jsonResponse = await response.json();
          listQuotes(jsonResponse.quotes);
      }
    }
    catch(error){
      console.log(error);
    }
  }
