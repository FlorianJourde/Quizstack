import React from 'react';

function ProfilePicture({image}) {
    const imageSrc = image
        ? `/uploads/images/users/${image}`
        : `/images/logos/profile-picture.png`;

    return (
        <img className={`aspect-square rounded-full w-12 xl:w-12 object-cover border-light-grey-secondary border-2`} src={imageSrc}
             alt="Profile picture"/>
    );
};

export default ProfilePicture;