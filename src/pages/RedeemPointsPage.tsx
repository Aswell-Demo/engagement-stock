import  { useState } from 'react';

export default function RedeemPointsPage() {
  const [user] = useState({
    id: '100',
    name: 'アズウェル 太郎',
    totalPoints: 15000,
    redeemablePoints: 10000,
  });

  const [requestedAmount] = useState(5000); // 仮の申請ポイント数
  const [message, setMessage] = useState('');

  const handleApprove = () => {
    setMessage(`申請を承認しました：${requestedAmount.toLocaleString()}pt`);
  };

  const handleReject = () => {
    setMessage('申請を却下しました');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-md p-8 w-1/2 max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">ポイント換金承認</h1>

        {/* ユーザー情報 */}
        <div className="text-sm space-y-1 mb-6">
          <p>社員番号: <span className="font-semibold">{user.id}</span></p>
          <p>氏名: <span className="font-semibold">{user.name}</span></p>
          <p>保有ポイント: <span className="font-semibold">{user.totalPoints.toLocaleString()} pt</span></p>
          <p>利用可能ポイント: <span className="font-semibold text-green-700">{user.redeemablePoints.toLocaleString()} pt</span></p>
        </div>

        {/* 申請ポイント */}
        <div className="border border-red-500 bg-red-50 p-4 rounded mb-6">
          <p>申請日: 2025/7/10</p>
          <p className="text-lg font-bold text-red-700">申請ポイント数: {requestedAmount.toLocaleString()} pt</p>
        </div>

        {/* ボタン */}
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleApprove}
          >
            承認する
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleReject}
          >
            却下する
          </button>
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => window.history.back()}
          >
            戻る
          </button>
        </div>

        {message && <p className="mt-6 text-sm font-medium text-center text-blue-700">{message}</p>}
      </div>
    </div>
  );
}