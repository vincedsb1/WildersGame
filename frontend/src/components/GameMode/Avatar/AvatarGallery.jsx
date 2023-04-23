// import React from "react";

// const avatars = require.context("../../../assets/GameMode/Avatars", true);
// const avatarFiles = avatars.keys();
// console.log(avatarFiles);

// function AvatarGallery() {
//   //   const avatarImages = avatarFiles.map((filename) => {
//   //     const imagePath = avatars(filename);
//   //     return <img key={filename} src={imagePath} alt={filename} />;
//   //   });

//   return (
//     <div>
//       <p>Avatar Gallery</p>
//       {/* {avatarImages} */}
//     </div>
//   );
// }

// export default AvatarGallery;

/// //// OK ///////

import React from "react";
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
// import avatar27 from "../../../assets/GameMode/Avatars/avatar-27.svg";
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
  avatar28,
  avatar29,
  avatar30,
];

function AvatarGallery() {
  return (
    <div className="avatarContainer">
      {avatarImages.map((imageSrc, index) => (
        <div className="avatar">
          <img
            // key={index} ->  95:18  error  Do not use Array index in keys  react/no-array-index-key
            src={imageSrc}
            alt={`Avatar ${index + 1}`}
            className="avatarImg"
          />
        </div>
      ))}
    </div>
  );
}

export default AvatarGallery;
