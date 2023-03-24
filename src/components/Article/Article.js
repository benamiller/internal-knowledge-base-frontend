import './Article.css';

const Article = (props) => {
    const articleID = props.articleID;
    const articleSubject = props.articleSubject;
    const articleBody = props.articleBody;
    const readStatus = props.readStatus;
    const handleDeletion = props.handleDeletion;
    const handleRead = props.handleRead;
    const handleUnread = props.handleUnread;
    const 


    return (
        <div 
        className={`ArticleItem ${readStatus == "T" ? "darkened" : ""}`} 
        onClick={() => handleArticleClick(articleID)}>
            <p>{readStatus}</p>
            <p>{articleSubject.length > 20 ? articleSubject.substring(0, 20) + "..." : articleSubject}</p>
            <p>{articleBody.length > 30 ? articleBody.substring(0, 30) + "..." : articleBody}</p>
            <p>{readStatus}</p>
            <button onClick={() => handleDeletion(articleID)}>Delete</button>
            <button onClick={() => handleRead(articleID)}>Mark Read</button>
            <button onClick={() => handleUnread(articleID)}>Mark Unread</button>
        </div>

    )
}

export default Article;