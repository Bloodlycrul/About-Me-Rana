import BlogDetails from "../Blogs/Details";
import BlogRender from "../Components/BlogRender";

function Blog(){
    return (
        <>
        <div className="margin-top">
        <h1>Blog</h1>
        {BlogDetails.map((e)=>{
            return <BlogRender
            title = {e.title}
            view = {e.view}
            />
        })}
        </div>
        </>

    )
}

export default Blog;