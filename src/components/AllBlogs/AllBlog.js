import React from 'react';
import useLoadBlogData from '../../customHook/UseLoadBlogData';
import SingleBlogs from '../SingleBlog.js/SingleBlogs';
import './allBlog.css';

const AllBlog = () => {

    const [blogData] = useLoadBlogData();
    

    return (
       <section className="blog-section">
           <div className="container">
               <div className="blog-section-title">
                   <h1>Our All Blogs</h1>
                   <hr />
               </div>
               <div className="all-blogs">
                   {
                       blogData.map((blog) => <SingleBlogs key={blog.id} blog={blog}/>)
                   }
               </div>
           </div>
       </section>
    );
};

export default AllBlog;