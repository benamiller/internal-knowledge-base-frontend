const getFunctions = {
	async getArticlesByDepartment(department) {
		var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        const result = await (await fetch("http://localhost:8080/article/" + department, requestOptions)).text();
            // .then(response => response.text())
            // .then(result => console.log(result))
            // .catch(error => console.log('error', error));

        return result;
	},

	getCommentsByArticleID(articleID) {
		console.log("hey");
	}
}

export default getFunctions;