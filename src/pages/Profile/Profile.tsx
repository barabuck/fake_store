import React from 'react';

import './profile.scss';

const Profile = () => {
    return (
        <div className="page-profile">
            <div className="profile-wrapper">
                <div className="profile-avatar">
                    <span>U</span>
                </div>
                <div className="profile-info">
                    <div className="profile-info-name">User User</div>
                    <div className="profile-info-rate">Gold</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
