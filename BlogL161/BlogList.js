import React, { useState } from 'react';
import BlogPost from './BlogPost';
import quotes from './quotes.json';
const blogPosts = [
{
title: 'Post 1 Title-The Lottery',
content:"Every year, the small town in this story holds an event known as “The Lottery.” During this event, someone from the community is randomly chosen.What are they chosen for? You’ll have to read the story to find out.You may have heard of the term “mob mentality” and how it can allow for some pretty surprising (and terrible) things to happen. This classic story looks at society, and how much evil people are willing to overlook to keep their society stable.This is considered to be one of the most famous short stories in American literature. It’s a great example of what is known as a dystopian society, where people live in a frightening way. To learn more, check out this TED-Ed video that tells you how to recognize a dystopia",
author:"Astran morn"
},
{
title: 'Post 2 Title- The Happy Prince',
content:" “The Happy Prince” is a story that explores compassion in society, serving as a fairy tale and a fable at once. It’s about a prince who is only allowed to see beauty and comfort in his life. When he dies, he’s turned into a golden statue in his city, where he discovers that others actually live their lives in poverty and darkness. With the help of a swallow (a type of bird), the prince manages to help people even after death.Since the story is old, much of the English is outdated (not used in modern English). Still, if you have a good grasp of the English language, you can use this story to give yourself a great reading challenge.",
author:"Vinsmoke Sanji"
},
{
title:'Post 3 Title- The Night Train At Deoli ',
content:" Ruskin Bond used to spend summers at his grandmother’s house in Dehradun, India. While taking the train, he always had to pass through a small station called Deoli. No one used to get down at the station and nothing happened there.Until one day, when he sees a girl selling fruit and is unable to forget her.Ruskin Bond is a writer who can communicate deep feelings in a simple way. This story is about our attachment to strangers and why we cherish (value or appreciate deeply) them even though we might never meet them again.",
author:"Roronoa Zoro",
}
];

function getRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);
return quotes[randomIndex];
}

function BlogList() {
const [selectedPost, setSelectedPost] = useState(null);

const handlePostClick = (index) => {
setSelectedPost(blogPosts[index]);
};

return (
<div>
<h1><i>Blog Posts</i></h1>
<ul>
{blogPosts.map((post, index) => (
<li key={index} onClick={() => handlePostClick(index)}>
{post.title}
</li>
))}
</ul>
{selectedPost && (
<BlogPost
title={selectedPost.title}
content={`${getRandomQuote()} ${selectedPost.content}`}
author={selectedPost.author}
/>
)}
</div>
);
}

export default BlogList;