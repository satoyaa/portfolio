import React from 'react';

const ProfileContents = () => {

    const profileData = [
        { label: '氏名', value: '岩室 怜弥（いわむろ さとや）' },
        { label: '年齢', value: '22歳' },
        { label: '在住', value: '広島県広島市' },
        { label: '大学', value: '広島市立大学' },
        { label: '学部', value: '情報科学部' },
        { label: '使用技術', value: 'React 1年半\nHTML,CSS,Java 3年\nC言語 1年\nPython 4年' },
        { label: '資格', value: '基本情報技術者試験合格' },
    ];
    return (
        <div className="profileContainer">
            <ul className="profileList">
                {profileData.map((item, index) => (
                <li key={index} className="profileItem">
                    <span className="profileLabel">{item.label}</span>
                    <span className="profileValue">
                    {/* 改行コード(\n)がある場合に改行タグ(<br>)に変換する処理 */}
                    {item.value.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                        {line}
                        {i !== item.value.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                    </span>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfileContents