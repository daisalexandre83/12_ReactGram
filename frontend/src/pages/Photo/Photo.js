import "./Photo.css";
// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { uploads } from "../../utils/config";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// components
import Message from "../../components/Message";
import PhotoItem from "../../components/PhotoItem";
import LikeContainer from "../../components/LikeContainer";
import { Link } from "react-router-dom";

// Redux
import { getPhoto, like, comment } from "../../slices/photoSlice";

const Photo = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const resetMessage = useResetComponentMessage(dispatch);

    const { user } = useSelector((state) => state.auth)
    const { photo, loading, error, message } = useSelector(
        (state) => state.photo
    );

    const [commentText, setCommentText] = useState("")

    //Load photo data
    useEffect(() => {
        dispatch(getPhoto(id));
    }, [dispatch, id]);

    // Insert a like
    const handleLike = () => {
        dispatch(like(photo._id));

        resetMessage();
    };

    //Insert a comment
    const handleComment = (e) => {
        e.preventDefault()
    }

    if (loading) {
        return <p>Carregando...</p>
    }

    return <div id="photo">
        <PhotoItem photo={photo} />
        <LikeContainer photo={photo} user={user} handleLike={handleLike} />
        <div className="message-container">
            {error && <Message msg={error} type="error" />}
            {message && <Message msg={message} type="sucess" />}
        </div>
        <div className="comments">
            <h3>Comentários:({photo.comments.length})</h3>
        </div>
    </div>;
};

export default Photo;