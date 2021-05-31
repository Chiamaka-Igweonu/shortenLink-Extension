const token = "fe8c0ef1da32dc2d3597d7afa61d2e9b5d69358f";
const api = "https://api-ssl.bitly.com/v4/shorten";
// function to obtain output from API
const makeShort = () => {
  const longUrl = document.getElementById("input").value;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);
  const body = `{ "long_url": "${longUrl}", "domain": "bit.ly"}`;

  const options = {
    method: "POST",
    headers,
    body
  };
  let result;
  fetch(api, options)
    .then((response) => response.json())
    .then((data) => {
      result = { data };
      console.log(result);
      document.getElementById("my-result").innerHTML = data.link;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

//If you want to copyText from Element
function copy() {
  let element = document.getElementById("my-result"); //select the element
  let elementText = element.textContent; //get the text content from the element
  copyText(elementText); //use the copyText function below
}

//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
function copyText(elementText) {
  navigator.clipboard.writeText(elementText);
  /* Alert the copied text */
  alert("Copied!");
}
