import React from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = ({ videos, category, searchTerm }) => {
  return (
    <div className="flex">
      <Sidebar />
      <Videos videos={videos} category={category} searchTerm={searchTerm} />
    </div>
  );
}

export default Feed