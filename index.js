
const fork = `larryvsdata/js-ajax-fetch-lab`
const initialApi = "https://api.github.com"
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
//  return token;

    return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(initialApi+'/repos/'+repo + '/forks' , {
    method: 'POST' ,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function showResults(json) {
  const result = ` <ol><a href=${json.html_url} > ${json.html_url} </a> <ol>`
  document.getElementById('results').innerHTML = result ;
}

function createIssue() {
  const data = { title: document.getElementById('title').value , body: document.getElementById('body').value};

  fetch(initialApi+'/repos/'+fork + '/issues' , {
    method: 'POST' ,
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json()).then(json => getIssues(json))

}
function showIssues(json) {
  const issue = json.map(item => `<li> ${item.title}-${item.body} </li>`) ;
  document.getElementById('issues').innerHTML = issue ;
}


function getIssues() {


  fetch(initialApi+'/repos/'+fork + '/issues' , {
    method: 'POST' ,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))

}
