import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { withLessMore } from '../../hoc/withLessMore'
import IMAGES from '../../images'
import Comment from '../Comment/Comment'
import CommentForm from '../CommentForm/CommentForm'

function Post({id, img, name, likesCount, postText, timeAgo, comments, isShow, setIsShow}) {
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={'https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png'} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {!!postText && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>

            {
                !!comments.length && (
                isShow
                ?
                comments.map(comment => (
                    <Comment key={comment.id} id={comment.id} comUsernam={comment.username}  comText={comment.text}/>
                ))
                : 
                <h3
                style={{cursor:'pointer'}}
                onClick={() => setIsShow(true)}
                >Show All Comments</h3>
                )
            }
        </div>
        <CommentForm setIsShow={setIsShow} id={id} />
    </div>
  )
}

export default memo(withLessMore(Post), (prev, next) => JSON.stringify(prev) === JSON.stringify(next)) 