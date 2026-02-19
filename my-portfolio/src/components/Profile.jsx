import ProfileImage from "./ProfileImage"
import ProfileContents from "./ProfileContents"

const Profile = () => {

  return (
    <article className="ProfileContents">
      <ProfileImage></ProfileImage>
      <ProfileContents></ProfileContents>
    </article>
  )
}

export default Profile