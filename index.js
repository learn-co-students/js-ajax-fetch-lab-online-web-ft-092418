function getToken() {
  return '';
  //return token
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json))
  
}

function showResults(json) {
  const result = `<ul><li><a href=${json.html_url}>${json.html_url}</a></li></ul>`
  document.getElementById('results').innerHTML = result
}

function createIssue() {
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch('https://api.github.com/repos/lafesh/js-ajax-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(data) 
  }).then(res => res.json())
  .then(json => getIssues(json))
}

function getIssues() {
  fetch('https://api.github.com/repos/lafesh/js-ajax-fetch-lab/issues', {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showIssues(json))  
}

function showIssues(json) {
  console.log(json)
  const issue = json.map(a => `<ul><li><h3>${a.title}</h3>${a.body}</li></ul>`)
  document.getElementById('issues').innerHTML = issue
}



