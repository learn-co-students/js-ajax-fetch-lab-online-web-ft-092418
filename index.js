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
      Authorization: `token ${getToken()}`
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
  const url = "https://api.github.com/repos/Peter-G-Stone/js-ajax-fetch-lab/issues"

  fetch(url, 
    {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
    }
    ).then( (resp) => console.log('issues resp from createIssue', resp))
    .then( () => getIssues())

}

function getIssues() {
  
  const repo = 'js-ajax-fetch-lab';
  // const repo = 'Spoon-Knife';

  const url = "https://api.github.com/repos/octocat/" + repo + "/issues"

  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then( json => showIssues(json))
}




function showIssues(json) {  
  const issuesList = `<ul>${json.map( 
    issue => 
      '<li><p>this is my title: <strong>' +
      issue.title +
      '</strong></p><p> this is my id: ' +
      issue.id +
      '</p>'
    )
    .join('')}</ul>`

  document.getElementById("issues").innerHTML = issuesList

// this part isn't working but apparently githubs api is not working either, as per call with coach just now who confirmed my 'create issue' should be workin'
}
