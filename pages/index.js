import Head from 'next/head';

import { getPosts } from '../services';
import { PostCard, Categories, PostWidget } from '../components';
import { FeaturedPosts } from '../sections';

const Home = ({ sortedPosts }) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Kristin's Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {sortedPosts.map((post, index) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const sortedPosts =
    (await posts.sort((firstPost, secondPost) => {
      return (
        new Date(secondPost.node.createdAt) - new Date(firstPost.node.createdAt)
      );
    })) || [];

  return {
    props: { sortedPosts },
  };
}
