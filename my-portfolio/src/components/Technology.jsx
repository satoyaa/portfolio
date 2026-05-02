/*
 * Component: Technology
 * Props: none
 * Description:
 *  - サイト作成で使用した技術の一覧を表示するセクション。
 *  - 値内の改行文字を <br/> に変換して表示する共通処理を使用している。
 */
import React, { useState, useRef, useEffect } from 'react';

const Technology = () => {

    const techData = [
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
                {techData.map((item, index) => (
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