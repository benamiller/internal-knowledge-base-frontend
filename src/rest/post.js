const postFunctions = {
	createNewArticle(articleSubject, articleBody, authorizedRole, readStatus) {

		console.log("POSTING new article");

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"articleSubject": articleSubject,
			"articleBody": articleBody,
			"authorizedRole": authorizedRole,
			"readStatus": readStatus
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch("http://localhost:8080/article", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

	},

	createNewComment(articleID, commentBody) {
		console.log("hey");
	}
}

export default postFunctions;