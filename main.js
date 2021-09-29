var repo_name = document.getElementById('repo_name');
var dev_name = document.getElementById('dev_name');
var button_download = document.getElementById('btn_download');

button_download.onclick = function (){
  GitClone(dev_name.value, repo_name.value);
}

function GitClone(dev, repo){
  if(dev_name.value == ""){
    alert("developer name cannot be null")
  } else {
    if(repo_name.value == ""){
    alert("repository name cannot be null")
  } else {
  const url = GetResponse("https://api.github.com/repos/" + dev + "/" + repo);
  const obj = JSON.parse(url);
  startDownloadRequest(obj.default_branch, obj.owner.login, repo);
  }
 }
}
function GetResponse(url){
  const xmlResponse = new XMLHttpRequest();
  xmlResponse.open("GET", url, false);
  xmlResponse.send(null);
  return xmlResponse.responseText;
}

function startDownloadRequest(branch, developer_name, repository_name){
  const url = "https://github.com/" + developer_name + "/" + repository_name + "/archive/refs/heads/" + branch + ".zip";
  window.location.href = url;
}