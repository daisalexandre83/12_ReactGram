import "./Profile.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXlg } from "react-icons/bs";

// hooks
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// redux
import { getUserDetails } from "../../slices/userSlice";
import { publishPhoto } from "../../slices/photoSlice";


const Profile = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const { user, loading } = useSelector((state) => state.user);
  const { user: userAuth } = useSelector((state) => state.auth);
  const {
    photos,
    loading: loadingPhoto,
    messagePhoto,
    error: errorPhoto,
  } = useSelector((state) => state.photo);

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")

  // New form edit form refs
  const newPhotoForm = useRef()
  const editPhotoForm = useRef()

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const handleFile = (e) => {

    const image = e.target.files[0];

    setImage(image);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const photoData = {
      title,
      image
    }

    // build form data
    const formData = new FormData()

    const photoFormData = Object.keys(photoData).forEach()
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return <div id="profile">
    <div className="profile-header">
      {user.profileImage && (
        <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
      )}
      <div className="profile-description">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    </div>
    {id === userAuth._id && (
      <>
        <p>form</p>
        <div className="new-photo" ref={newPhotoForm}>
          <h3>Compartilhe algum momento seu:</h3>
          <form onSubmit={submitHandle}>
            <label>
              <span>Título para a foto:</span>
              <input type="text" placeholder="Insrira um título" />
            </label>
            <label>
              <span>Imagem:</span>
              <input type="file" onChange={handleFile} />
            </label>
            <input type="submit" value="Postar" />
          </form>
        </div>
      </>
    )}
  </div>;
};

export default Profile