const getFunctions = {
	getArticlesByDepartment(department) {
		var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8080/article/" + department, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
	},

	getCommentsByArticleID(articleID) {
		console.log("hey");
	}
}

export default getFunctions;