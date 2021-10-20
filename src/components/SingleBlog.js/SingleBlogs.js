import React from 'react';
import './singleBlog.css';

const SingleBlogs = (props) => {

    const {blogImage,blogName,blogDetails} = props.blog;

    return (
        <section className="single-blog">
            <div className="single-blog-container">
                <div className="single-blog-image">
                    <img src={blogImage} alt="BlogImage"/>
                </div>
                <div className="single-blog-name">
                    <h4>{blogName}</h4>
                </div>
                <div className="single-blog-details">
                    <small>{blogDetails}</small>
                </div>
            </div>
        </section>
    );
};

export default SingleBlogs;