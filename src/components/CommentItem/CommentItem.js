import React, { memo } from 'react'

function CommentItem({ comUsernam, comText, id}) {
  return (
    <p key={id} className="description"><span>{comUsernam} </span> {comText}</p>
  )
}

export default memo(CommentItem) 