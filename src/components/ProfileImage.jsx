/*
 * Component: ProfileImage
 * Props: none
 * Description:
 *  - `public/images` 配下のプロフィール画像を読み込み、フレーム内に表示するだけのシンプルなコンポーネント。
 */
import myProfileImage from '/images/Profile.jpg';

const ProfileImage = () => {

  return (
    <div className='profileImageFrame'>
        <img src={myProfileImage} className='profileImage' alt="プロフィール写真" />
    </div>
  )
}

export default ProfileImage