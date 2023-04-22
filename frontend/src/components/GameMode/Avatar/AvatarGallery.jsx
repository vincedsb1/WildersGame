import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import avatar1 from "../../../assets/GameMode/Avatars/avatar-01.svg";
import avatar2 from "../../../assets/GameMode/Avatars/avatar-02.svg";
import avatar3 from "../../../assets/GameMode/Avatars/avatar-03.svg";
import avatar4 from "../../../assets/GameMode/Avatars/avatar-04.svg";
import avatar5 from "../../../assets/GameMode/Avatars/avatar-05.svg";
import avatar6 from "../../../assets/GameMode/Avatars/avatar-06.svg";
import avatar7 from "../../../assets/GameMode/Avatars/avatar-07.svg";
import avatar8 from "../../../assets/GameMode/Avatars/avatar-08.svg";
import avatar9 from "../../../assets/GameMode/Avatars/avatar-09.svg";
import avatar10 from "../../../assets/GameMode/Avatars/avatar-10.svg";
import avatar11 from "../../../assets/GameMode/Avatars/avatar-11.svg";
import avatar12 from "../../../assets/GameMode/Avatars/avatar-12.svg";
import avatar13 from "../../../assets/GameMode/Avatars/avatar-13.svg";
import avatar14 from "../../../assets/GameMode/Avatars/avatar-14.svg";
import avatar15 from "../../../assets/GameMode/Avatars/avatar-15.svg";
import avatar16 from "../../../assets/GameMode/Avatars/avatar-16.svg";
import avatar17 from "../../../assets/GameMode/Avatars/avatar-17.svg";
import avatar18 from "../../../assets/GameMode/Avatars/avatar-18.svg";
import avatar19 from "../../../assets/GameMode/Avatars/avatar-19.svg";
import avatar20 from "../../../assets/GameMode/Avatars/avatar-20.svg";
import avatar21 from "../../../assets/GameMode/Avatars/avatar-21.svg";
import avatar22 from "../../../assets/GameMode/Avatars/avatar-22.svg";
import avatar23 from "../../../assets/GameMode/Avatars/avatar-23.svg";
import avatar24 from "../../../assets/GameMode/Avatars/avatar-24.svg";
import avatar25 from "../../../assets/GameMode/Avatars/avatar-25.svg";
import avatar26 from "../../../assets/GameMode/Avatars/avatar-26.svg";
import avatar27 from "../../../assets/GameMode/Avatars/avatar-27.svg";
import avatar28 from "../../../assets/GameMode/Avatars/avatar-28.svg";
import avatar29 from "../../../assets/GameMode/Avatars/avatar-29.svg";
import avatar30 from "../../../assets/GameMode/Avatars/avatar-30.svg";

const avatarImages = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
  avatar16,
  avatar17,
  avatar18,
  avatar19,
  avatar20,
  avatar21,
  avatar22,
  avatar23,
  avatar24,
  avatar25,
  avatar26,
  avatar27,
  avatar28,
  avatar29,
  avatar30,
];

function AvatarGallery({ setSelectedAvatar: handleSelectedAvatar, setIsOpen }) {
  const ref = useRef(null);
  const [selectedAvatarState, setSelectedAvatar] = useState(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpen]);

  const handleAvatarClick = (index) => {
    const clickedAvatar = avatarImages[index];
    setSelectedAvatar(clickedAvatar);
    handleSelectedAvatar(clickedAvatar);
  };

  const handleKeyDown = (event, index) => {
    if (event.keyCode === 13) {
      // 13 corresponds to the "Enter" key
      handleAvatarClick(index);
    }
  };

  function getAvatarClass(selectedAvatar, index, imageSrc) {
    if (selectedAvatar === null && index === 0) {
      return "selected";
    }
    if (selectedAvatar === imageSrc) {
      return "selected";
    }
    return "";
  }

  return (
    <div className="avatarContainer" ref={ref}>
      {avatarImages.map((imageSrc, index) => (
        <div className="avatar" key={imageSrc}>
          <button
            type="button"
            className={`avatar ${getAvatarClass(
              selectedAvatarState,
              index,
              imageSrc
            )}`}
            onClick={() => handleAvatarClick(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            tabIndex="0"
          >
            <img src={imageSrc} alt={`Avatar ${index + 1}`} />
          </button>
        </div>
      ))}
    </div>
  );
}

AvatarGallery.propTypes = {
  setSelectedAvatar: PropTypes.func,
  setIsOpen: PropTypes.func,
};

AvatarGallery.defaultProps = {
  setSelectedAvatar: () => {},
  setIsOpen: () => {},
};

export default AvatarGallery;