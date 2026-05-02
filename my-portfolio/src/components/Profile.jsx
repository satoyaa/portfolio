/*
 * Component: Profile
 * Props: none
 * Description:
 *  - `ProfileImage` と `ProfileContents` を組み合わせてプロフィールセクションを構成する。
 *  - レイアウト用のラッパー要素のみを返すシンプルなコンポーネント。
 */
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