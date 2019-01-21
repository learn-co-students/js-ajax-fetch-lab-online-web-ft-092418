function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const token = getToken();
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json()).then(json => showResults(json))
}

function showResults(myJson) {
  //use this function to display the results from forking via the API
  document.querySelector("#results").innerHTML = `<a href="${myJson.html_url}"> View Fork </a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'dfitzgerald7/js-ajax-fetch-lab'
  const token = getToken();
  fetch(
    `https://api.github.com/repos/${repo}/issues`,
    {
      method: "POST",
      "body": JSON.stringify({title: document.querySelector("#title").value, body: document.querySelector("#body").value}),
      headers: {
        Authorization: `auth ${token}`
      }
    }
  ).then(res => getIssues())
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  // debugger;
  const repo = 'dfitzgerald7/js-ajax-fetch-lab'
  const token = getToken();
  fetch(`https://api.github.com/repos/${repo}/issues`).then(res => res.json()).then(json => listIssues(json))
}

function listIssues(myJson){
  // debugger;
  // document.querySelector("#issues").innerHTML =
}
