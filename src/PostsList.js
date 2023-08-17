import React from 'react'
import {Link} from 'react-router-dom'

function PostsList({posts}) {

  return (
    <>
        {posts.map(post => (
            <p key={post.id}>{post.text} -- <Link to={`${post.id}`} >Detalles</Link></p>
        )) }
    </>
  )
}

export default PostsList