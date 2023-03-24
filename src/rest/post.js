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

	async deleteArticleByID(articleID) {
		var requestOptions = {
			method: 'DELETE',
			redirect: 'follow'
		  };
		  
		  await fetch("http://localhost:8080/article/delete/" + articleID, requestOptions);
	},

	async setArticleUnread(articleID) {
		var requestOptions = {
			method: 'POST',
			redirect: 'follow'
		  };
		  
		  await fetch("http://localhost:8080/article/unread/" + articleID, requestOptions);
	},

	async setArticleRead(articleID) {
		var requestOptions = {
			method: 'POST',
			redirect: 'follow'
		  };
		  
		  await fetch("http://localhost:8080/article/read/" + articleID, requestOptions);
	},

	async createNewComment(articleID, commentBody) {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		"articleID": 1,
		"commentBody": "This is a comment on article 1"
		});

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
		};

		const result = await (await fetch("http://localhost:8080/comment/", requestOptions)).text();
		const parsedResult = await JSON.parse(result);

		return parsedResult;
		
	},

	deleteCommentByID(commentID) {

	},
}

export default postFunctions;