import './Article.css';

const Article = (props) => {
    const articleID = props.articleID;
    const articleSubject = props.articleSubject;
    const articleBody = props.articleBody;
    const readStatus = props.readStatus;
    const handleDeletion = props.handleDeletion;
    const handleRead = props.handleRead;
    const handleUnread = props.handleUnread;
    const handleArticleClick = props.handleArticleClick;
    const selectedArticleForComments = props.selectedArticleForComments;

    return (
        <div 
        className={`ArticleItem ${readStatus == "T" ? "darkened" : ""} ${selectedArticleForComments == articleID ? "selected" : ""}`} 
        onClick={() => handleArticleClick(articleID)}>
            <p>{articleSubject.length > 20 && selectedArticleForComments != articleID ? articleSubject.substring(0, 20) + "..." : articleSubject}</p>
            <p>{articleBody.length > 30 && selectedArticleForComments != articleID ? articleBody.substring(0, 30) + "..." : articleBody}</p>
            <button onClick={() => handleDeletion(articleID)}>Delete</button>
            <button onClick={() => handleRead(articleID)}>Mark Read</button>
            <button onClick={() => handleUnread(articleID)}>Mark Unread</button>
        </div>

    )
}

export default Article;