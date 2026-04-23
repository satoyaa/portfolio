import React, { useState, useRef, useEffect } from 'react';

const Technology = () => {

  const profileData = [
        { label: 'フレームワーク', value: 'React+Vite' },
        { label: 'モジュール', value: 'React Tree Fiber, EmailJS' },
        { label: 'インフラ', value: 'Vercel' },
        { label: '3Dモデル制作', value: 'Blender' },
        { label: 'icons', value: 'react-icons' },
    ];
    return (
        <>
        <p>ここでは，このwebサイト作成に使用した技術を紹介します．</p>
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
        </>
        
    )
}

export default Technology