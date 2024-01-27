"use client"

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {

  return(
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        // The post and handleTagClick props are passed to the PromptCard component and shoulb be the exact names used in the PromptCard component props
        <PromptCard
          key={post?._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  
  )
}

const Feed = () => {
  
  const [searchText, setSearchText] = useState(''); 
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => { 
    setSearchText(e.target.value);
  }


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  }, []);



  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text"
          placeholder="Search for a tag or username"
          className="search_input peer"
          value={searchText}
          onChange={handleSearchChange}
         />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={handleSearchChange}
      />
    </section>
  )
}

export default Feed