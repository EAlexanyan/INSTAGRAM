import React, { memo } from 'react'
import CommentItem from '../CommentItem/CommentItem'

function Comment({ comUsernam, comText, id}) {
  return (
    <>
     <CommentItem comUsernam={comUsernam} comText={comText} id={id}/>
    </>
  )
}

export default memo(Comment)