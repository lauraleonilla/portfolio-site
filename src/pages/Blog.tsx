import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import HeaderNavigation from '../components/Header';

interface TextConent {
  content: { value: string }[];
}

interface Blog {
  fields: {
    title: string;
    body: {
      content: TextConent[];
    };
  };
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      const blogPosts = await axios.get(
        'https://squid-app-gvm4d.ondigitalocean.app/blogs/blogs'
      );
      setBlogs(blogPosts?.data);
    };
    getBlogs();
  }, []);

  return (
    <BlogPageWrapper>
      <HeaderNavigation />
      {blogs?.map((blog) => (
        <>
          <p>{blog.fields.title}</p>
          <div>
            {blog.fields.body.content.map((c) =>
              c.content.map((text) => <p>{text.value}</p>)
            )}
          </div>
        </>
      ))}
    </BlogPageWrapper>
  );
};

const BlogPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Blog;
