import React, { useState } from "react";
import "./PostCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
  faLink,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

function PostCard() {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
    <div className="post-card">
      <div className="circle-images">
        <img
          src="https://grupverse.com/api/api/media/teamprofilepic/22_7.png"
          alt="User 1"
        />
        <p className="text-para">User 1</p>
        <img
          src="https://grupverse.com/api/api/media/teamprofilepic/23_3.png"
          alt="User 2"
        />
        <p className="text-para">User 2</p>
      </div>
      <p className="post-text">Greet</p>
      <img
        src="https://grupverse.com/api/media/image/92_1.jpeg"
        alt="Rectangle"
        className="rectangle-image"
      />
      <p>Thanks</p>
      <div className="icons">
        <FontAwesomeIcon icon={faThumbsUp} onClick={handleLike} />
        <span className="icon-text">{likes}</span>
        <FontAwesomeIcon icon={faThumbsDown} onClick={handleDislike} />
        <span className="icon-text">{dislikes}</span>
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faLink} />
        <FontAwesomeIcon icon={faShare} onClick={handleShare} />
        <span className="icon-text">{shares}</span>
      </div>
    </div>


    <div className="post-card">
      <div className="circle-images">
        <img
          src="https://grupverse.com/api/api/media/teamprofilepic/22_7.png"
          alt="User 1"
        />
        <p className="text-para">User 1</p>
        <img
          src="https://grupverse.com/api/api/media/teamprofilepic/23_3.png"
          alt="User 2"
        />
        <p className="text-para">User 2</p>
      </div>
      <p className="post-text">Greet</p>
      <img
        src="https://grupverse.com/api/media/image/92_1.jpeg"
        alt="Rectangle"
        className="rectangle-image"
      />
      <p>Thanks</p>
      <div className="icons">
        <FontAwesomeIcon icon={faThumbsUp} onClick={handleLike} />
        <span className="icon-text">{likes}</span>
        <FontAwesomeIcon icon={faThumbsDown} onClick={handleDislike} />
        <span className="icon-text">{dislikes}</span>
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faLink} />
        <FontAwesomeIcon icon={faShare} onClick={handleShare} />
        <span className="icon-text">{shares}</span>
      </div>
    </div>

    <div className="post-card">
      <div className="circle-images">
        <img
          src="https://grupverse.com/api/api/media/teamprofilepic/22_7.png"
          alt="User 1"
        />
        <p className="text-para">User 1</p>
        <img
          src="https://grupverse.com/api/api/media/teamprofilepic/23_3.png"
          alt="User 2"
        />
        <p className="text-para">User 2</p>
      </div>
      <p className="post-text">Greet</p>
      <img
        src="https://grupverse.com/api/media/image/92_1.jpeg"
        alt="Rectangle"
        className="rectangle-image"
      />
      <p>Thanks</p>
      <div className="icons">
        <FontAwesomeIcon icon={faThumbsUp} onClick={handleLike} />
        <span className="icon-text">{likes}</span>
        <FontAwesomeIcon icon={faThumbsDown} onClick={handleDislike} />
        <span className="icon-text">{dislikes}</span>
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faLink} />
        <FontAwesomeIcon icon={faShare} onClick={handleShare} />
        <span className="icon-text">{shares}</span>
      </div>
    </div>

    <div className="post-card">
      <div className="circle-images">
        <img
          src="https://grupverse.com/api/api/media/teamprofilepic/22_7.png"
          alt="User 1"
        />
        <p className="text-para">User 1</p>
        <img
          src="https://grupverse.com/api/api/media/teamprofilepic/23_3.png"
          alt="User 2"
        />
        <p className="text-para">User 2</p>
      </div>
      <p className="post-text">Greet</p>
      <img
        src="https://grupverse.com/api/media/image/92_1.jpeg"
        alt="Rectangle"
        className="rectangle-image"
      />
      <p>Thanks</p>
      <div className="icons">
        <FontAwesomeIcon icon={faThumbsUp} onClick={handleLike} />
        <span className="icon-text">{likes}</span>
        <FontAwesomeIcon icon={faThumbsDown} onClick={handleDislike} />
        <span className="icon-text">{dislikes}</span>
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faLink} />
        <FontAwesomeIcon icon={faShare} onClick={handleShare} />
        <span className="icon-text">{shares}</span>
      </div>
    </div>
  </div>
  );
}

export default PostCard;
