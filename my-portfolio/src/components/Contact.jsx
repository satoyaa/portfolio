import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = ({pageFlag}) => {
  const form = useRef(); // フォームのDOM要素を参照するために使用
  const [status, setStatus] = useState(''); // 送信状況（成功/失敗）のメッセージ

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('送信中...');

    // EmailJSの送信処理
    // 第1引数: Service ID, 第2引数: Template ID, 第3引数: formのref, 第4引数: Public Key
    emailjs.sendForm(
      serviceId,   // ステップ1で取得した Service ID
      templateId,  // ステップ1で取得した Template ID
      form.current,
      publicKey   // ステップ1で取得した Public Key
    )
    .then((result) => {
        console.log(result.text);
        setStatus('メッセージが送信されました！');
        e.target.reset(); // 送信後にフォームをクリア
    }, (error) => {
        console.log(error.text);
        setStatus('送信に失敗しました。もう一度お試しください。');
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <p className="contact-description">お気軽にご連絡ください！</p>
        
        {/* ref={form} を追加し、onSubmitでsendEmailを呼ぶ */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"      // EmailJSのテンプレート変数 {{name}} に対応
            placeholder="名前"
            className="form-input"
            required
          />
          
          <input
            type="email"
            name="email"     // EmailJSのテンプレート変数 {{email}} に対応
            placeholder="Email"
            className="form-input"
            required
          />
          
          <textarea
            name="message"   // EmailJSのテンプレート変数 {{message}} に対応
            placeholder="本文"
            className="form-textarea"
            rows="6"
            required
          ></textarea>
          
          <button type="submit" className="submit-button">
            送信
          </button>

          {/* 送信ステータスの表示 */}
          {status && <p style={{ marginTop: '15px', color: '#F2F2F2' }}>{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact