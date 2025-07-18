import axios from "axios";
import { throttle } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

const ThrottledScroll = () => {
  const [data, setData] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: { _page: page, _limit: 3 },
    });

    setData(prev => [...prev, ...res.data]);
    setPage((prev) => prev + 1);
  };

  const throttledFetch = useCallback(
    throttle(
      () => {
        fetchPosts();
      },
      3000,
      { leading: true, trailing: true }
    ),
    [page]
  );
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      throttledFetch();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      throttledFetch.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [throttledFetch]);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h2>📦 Throttled API on Scroll</h2>
      <p>Scroll Y: {scrollY}</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThrottledScroll;
