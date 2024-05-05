import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUsers} from "../../store/PostsSlice";
import {Spinner} from "react-bootstrap";

function MainPage() {

    const {title, posts, preloader} = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div>
            {preloader ? <Spinner animation="border" variant="success"/> :
                <>
                    <h1>{title}</h1>
                    <button >change title</button>
                    {posts.map((postsInfo, idx) =>
                        <div key={idx}>
                            <h2>{postsInfo.title}</h2>
                            <p>{postsInfo.body}</p>
                        </div>
                    )}
                </>
            }
        </div>
    )
}

export default MainPage

