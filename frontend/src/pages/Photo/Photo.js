import "./Photo.css";
// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import PhotoItem from "../../components/PhotoItem";;
import LikeContainer from "../../components/LikeContainer";

// Redux
import { getPhoto, like } from "../../slices/photoSlice";

const Photo = () => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { photo, loading, error, message } = useSelector(
        (state) => state.photo
    );

    // comentários

    //Load photo data
    useEffect(() => {
        dispatch(getPhoto(id));
    }, [dispatch, id]);

    const handleLike = () => { };

    if (loading) {
        return <p>Carregando...</p>
    }

    return <div id="photo">
        <PhotoItem photo={photo} />
        <LikeContainer photo={photo} user={user} handleLike={handleLike} />
    </div>;
};

export default Photo;