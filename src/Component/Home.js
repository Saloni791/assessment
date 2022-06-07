import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import UserTable from './UserTable'

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <UserTable posts={currentPosts} loading={loading} />
      <Pagination 
        postsperpage={postsPerPage}
        totalposts={posts.length}
        paginate={paginate}
      />
    </>
  )
}
