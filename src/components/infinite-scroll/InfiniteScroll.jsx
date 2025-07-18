import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);
  const api = `https://jsonplaceholder.typicode.com/posts`;
  useEffect(() => {
    const fetchApi = async (pageNum) => {
      setLoading(true);
      try {
        const fetchData = await axios.get(api, {
          params: { _page: pageNum, _limit: 10 },
        });
        const data = fetchData.data;

        setPosts((prev) => {
          const newPosts = data.filter(
            (post) => !prev.some((existingPost) => existingPost.id === post.id)
          );
          return [...prev, ...newPosts];
        });

        setHasMore(data.length > 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    if (page === 0) return;

    fetchApi(page);
  }, [page]);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1.0,
      }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [loading, hasMore]);

  return (
    <div>
      <h2> Infinite Scroll </h2>
      <div className="">
        {posts.map((post) => (
          <div
            key={post.id}
            className=""
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              margin: "10px 0",
              borderRadius: "6px",
            }}
          >
            <h4>{post.title}</h4>
            <p>{console.log(post.id)}</p>
            <p>{post.body}</p>
          </div>
        ))}

        <div className="" ref={observerRef}></div>
        {loading && <p>Loading more posts...</p>}
        {!hasMore && <p>No more posts to load.</p>}
      </div>
    </div>
  );
};

export default InfiniteScroll;
