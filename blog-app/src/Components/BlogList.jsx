import BlogCard from "./BlogCard";
import posts from '../data/posts.json';


function BlogList(){
    return(
        <div className="container">
            {posts.map((post)=> (
                <BlogCard key={post.id} post={post}/>
            ))}
        </div>

    )
}
export default BlogList;