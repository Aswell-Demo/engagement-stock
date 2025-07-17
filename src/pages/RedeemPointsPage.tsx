import React, { useState } from 'react';

export default function RedeemPointsPage() {
  const [user] = useState({
    id: '100',
    name: 'アズウェル 太郎',
    totalPoints: 15000,
    redeemablePoints: 10000,
  });

  const [redeemAmount, setRedeemAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(redeemAmount);
    if (isNaN(amount) || amount <= 0) {
      setMessage('正しい金額を入力してください');
    } else if (amount > user.redeemablePoints) {
      setMessage('利用可能ポイントを超えています');
    } else {
      setMessage(`申請が完了しました：${amount.toLocaleString()}pt`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-md p-8 w-1/2 max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">ポイント換金申請</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ユーザー情報 */}
          <div className="text-sm space-y-1">
            <p>社員番号: <span className="font-semibold">{user.id}</span></p>
            <p>氏名: <span className="font-semibold">{user.name}</span></p>
            <p>保有ポイント: <span className="font-semibold">{user.totalPoints.toLocaleString()} pt</span></p>
            <p>利用可能ポイント: <span className="font-semibold text-green-700">{user.redeemablePoints.toLocaleString()} pt</span></p>
          </div>

          {/* 申請ポイント */}
          <div>
            <label className="block mb-1 font-medium">申請ポイント数</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              placeholder="例：1000"
              value={redeemAmount}
              onChange={(e) => setRedeemAmount(e.target.value)}
              required
              min="1"
            />
          </div>

          {/* ボタン */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              換金を申請する
            </button>
            <button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => window.history.back()}
            >
              戻る
            </button>
          </div>

          {message && <p className="mt-4 text-sm text-blue-700 font-medium">{message}</p>}
        </form>
      </div>
    </div>
  );
}