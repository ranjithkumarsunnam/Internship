import './Blog.css';
function BlogCard({post}){
    return(
    <div className="card">
        <img src={post.image} alt={post.title}/>
        <div className="card-content">

            <h2 className="info">{post.title}</h2>
            <p>{post.author} | {post.date}</p>
            <p>{post.description}</p>
            <button>Read Me</button>

        </div>
        
    </div>
    )

}
export default BlogCard;