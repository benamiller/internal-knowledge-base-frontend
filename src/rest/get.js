const getFunctions = {
	async getArticlesByDepartment(department) {
		var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        const result = await (await fetch("http://localhost:8080/article/" + department, requestOptions)).text();
        const parsedResult = await JSON.parse(result);

        console.log(parsedResult);
        
        return parsedResult;
	},

	async getCommentsByArticleID(articleID) {
		var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        const result = await (await fetch("http://localhost:8080/comment/" + articleID, requestOptions)).text();
        const parsedResult = await JSON.parse(result);

        return parsedResult;          
	}
}

export default getFunctions;