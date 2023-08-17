import React from 'react'
import {useParams, Link} from 'react-router-dom'

function PostShow({posts}) {
  const {postId} = useParams()

  return (
    <>
      <div>PostShow - {postId}</div>
      <Link to="/posts">Back to Posts</Link>
    </>
  )
}

export default PostShow