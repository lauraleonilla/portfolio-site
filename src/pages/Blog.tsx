import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HeaderNavigation from '../components/Header';
import {
  BlogContainer,
  BlogTitle,
  BlogTitleContainer,
} from '@/styles/Blog.styled';
import type { JSX } from '@emotion/react/jsx-runtime';

interface TextConent {
  content: { value: string }[];
}

interface Blog {
  sys: {
    createdAt: Date;
  };
  fields: {
    title: string;
    body: {
      content: TextConent[];
    };
  };
}

const Blog = (): React.JSX.Element => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    const getBlogs = async (): Promise<void> => {
      const blogPosts = await axios.get(import.meta.env.VITE_BLOG_URL);
      setBlogs(blogPosts?.data);
    };
    getBlogs();
  }, []);

  const getTime = (date: Date): JSX.Element => {
    const formatted = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(date));
    return <time dateTime={new Date(date).toISOString()}>{formatted}</time>;
  };

  return (
    <BlogPageWrapper>
      <HeaderNavigation />
      {blogs?.map((blog) => (
        <>
          <BlogTitleContainer>
            <BlogTitle>{blog.fields.title}</BlogTitle>
            {getTime(blog.sys.createdAt)}
          </BlogTitleContainer>
          <BlogContainer>
            {blog.fields.body.content.map((c) =>
              c.content.map((text) => <p>{text.value}</p>)
            )}
          </BlogContainer>
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
