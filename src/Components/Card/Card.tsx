import type { FC } from "react"
import { Link } from "react-router-dom"
import type { Post } from "../../models/Posts"

interface PostProps {
    post: Post
}
export const CardPost: FC<PostProps> = ({post}) => {
    const baseUrl = 'http://travelblog.skillbox.cc';
    const imageUrl = baseUrl + post.photo;

    return (
        <div className="card">
            <img className="card__img" src={imageUrl } alt={post.title} />
            <div className="card__body">
                <p className="card__date">{post.date}</p>
                <h2 className="card__title">{post.title}</h2>
                <p className="card__description">{post.excerpt}</p>
                <div className="card__location">{post.county}, {post.city} </div>
                <Link className="card__link" to={`post/${post.id}`}> Подробнее</Link>
            </div>
        </div>
    )
}