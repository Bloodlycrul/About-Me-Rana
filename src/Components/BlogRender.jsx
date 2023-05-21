
function BlogRender(props){
    return (
        <div className="blogrender">
        <p className="title">{props.title}</p>
        <p className="view">{props.view}</p>
        </div>
    )
}

export default BlogRender