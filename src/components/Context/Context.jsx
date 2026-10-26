/*
 * Context: AppContext
 * Purpose:
 *  - アプリ全体で共有する UI 状態（例: ポートフォリオ詳細の開閉フラグ `isOpen`）を提供するためのコンテキスト。
 *  - `App.jsx` でプロバイダを定義し、子コンポーネントから useContext(AppContext) で利用する想定。
 */
import { createContext } from 'react';

//ページ移動用のコンテクスト
//App.jsxとProfileCardをつなぐ
export const AppContext = createContext(null);
