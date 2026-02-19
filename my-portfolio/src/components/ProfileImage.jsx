import myProfileImage from '/images/Profile.jpg';

const ProfileImage = () => {

  return (
    <div className='profileImageFrame'>
        <img src={myProfileImage} className='profileImage' alt="プロフィール写真" />
    </div>
  )
}

export default ProfileImage