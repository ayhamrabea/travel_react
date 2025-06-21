import type { Post } from "../../models/Posts";
import { useGetPostsQuery } from "../../services/travel";
import { Loader } from "../Loader/Loader";
import { CardPost } from "../Card/Card";
import { Link } from "react-router-dom";



export const PostsList = () => {
    const { data: posts, isLoading } = useGetPostsQuery(undefined);

    if (isLoading) return <Loader />;

    return (
        <section >
            <div className="container">
                <div className="posts">
                    <ul className="posts__list">
                        {posts && posts.length > 0 ? (
                            posts.map(( post: Post) => (
                                <li className="posts__item" key={post.id}>
                                    <CardPost post={post}/>
                                </li>
                            ))
                        ) : (
                            <p className="movies__empty-message">Нет фильмов для отображения.</p>
                        )}
                    </ul>
                    <Link className="my-btn" to={'/addstory'}>Добавить мое путешествие</Link>
                </div>
            </div>
        </section>
    );
};
