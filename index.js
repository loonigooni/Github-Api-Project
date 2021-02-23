function getGitUser(githubHandle) {
    fetch(`  https://api.github.com/users/${githubHandle}/repos`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong :('));
      console.log(githubHandle);
}

function displayResults(responseJson) {
    console.log(responseJson);
    let results = [];
    for (let i = 0; i < responseJson.length; i++) {
        results.push(`<h3>${responseJson[i].name}</h3>`)
        results.push(`<a src="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`)
    }
    $('.js-results').html(results);
    $('.js-results').removeClass('hidden');
}

function gitForm() {
    $('#js-form').submit(event => {
      event.preventDefault();
      let githubHandle = $('input[type="text"]').val()
      getGitUser(githubHandle);
    });
}

$(gitForm)