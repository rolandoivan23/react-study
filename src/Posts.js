import React from 'react'
import PostsList from './PostsList';
import PostShow from './PostShow';
import {Routes, Route, Outlet} from 'react-router-dom'

function Posts() {
  const posts = [
        {id: 1, user: 'Juan', fecha: '15-01-2023', text: 'Lorem ipsum .....'},
        {id: 2, user: 'Rolando', fecha: '13-01-23', text: 'Lorem ipsum .....'}
  ];
  return (
    <React.Fragment>
        <div>Posts</div>
        <hr />
       <Routes>
            <Route index element={<PostsList posts={posts}/>} />
            <Route path=":postId" element={<PostShow posts={posts} />} />
       </Routes>
       <Outlet/>
    </React.Fragment>
  )
}

export default Posts