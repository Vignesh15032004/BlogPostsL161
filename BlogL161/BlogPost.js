import React from 'react';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
import Photo from './Photo';
function BlogPost({ title, content, author }) {
return (
<div className="blog-post">
<PostTitle title={title} />
<PostContent content={content} />
<PostAuthor author={author} />
<Photo/>
</div>
);
}
export default BlogPost;
