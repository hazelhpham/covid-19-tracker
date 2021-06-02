//a page cant be manipulated safely until the document
//is ready
//Jquery detects the state of readiness for you
//code inside the function $document.ready() will only run
//once the page DOM is ready for JS code to execute.

// init();
var data = "";

//part where you define the functions and variables?

function init() {
  const api_url = "https://api.covid19api.com/summary";
  $.get(api_url, function (data) {
    data = `<td> ${data.Global.TotalConfirmed}</td>
            <td> ${data.Global.TotalDeaths} </td>
            <td> ${data.Global.TotalRecovered} </td>`;
    //the ${} used to write javascript code.

    //bind data to id data
    $("#data").html(data);

    //#data => refer to the id data
    // let totalCases = data.Global.TotalConfirmed;
    // let totalDeaths = data.Global.TotalDeaths;
    // let totalRecovered = data.Global.TotalRecovered;
    //get the data
  });
}
function refreshData() {
  clearData();
  init();
}
function clearData() {
  $("data").empty();
}
