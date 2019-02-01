const token = "a749bd99fa6b11c718be77a7c22e4970e27823ec"


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  // this was from an example of how to send data with your post request
  // keep in mind, this is still being sent as 'body' in our fetch 
  // in order to leave the example here in my files, as a note to myself
  // 
  // however, the body attr of this fetch is not doing anything in this case
  // 
  // const postData = {
  //   body: 'great stuff'
  // }

  const repo = 'js-ajax-fetch-lab';
  const url = "https://api.github.com/repos/learn-co-curriculum/" + repo + "/forks"
  fetch(url, {
    method: 'POST',
    //body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(resp => resp.json())
    .then(json => showResults(json))

}

function showResults(json) {
  //use this function to display the results from forking via the API


  console.log('results json: ', json)
  const repoLink = `<p><a href="${json.html_url}">Linkety</a></p>`
  document.getElementById("results").innerHTML = repoLink

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html


  const issueTitle = document.getElementById('title').value
  const issueText = document.getElementById('body').value

  const postData = {
    title: issueTitle,
    body: issueText
  }
  const url = "https://api.github.com/repos/peter-g-stone/js-ajax-fetch-lab/issues"

  fetch(url, 
    {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
    }
    ).then( (resp) => console.log('issues resp from createIssue', resp))
    .then( () => getIssues())

}

function getIssues() {
  
  const repo = 'js-ajax-fetch-lab';
  const url = "https://api.github.com/repos/peter-g-stone/" + repo + "/issues"

  fetch(url, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(resp => resp.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  console.log('issues json:', json)
  // const issuesList = `<p><a href="${json.html_url}">Linkety</a></p>`
  // document.getElementById("results").innerHTML = issuesList
}
