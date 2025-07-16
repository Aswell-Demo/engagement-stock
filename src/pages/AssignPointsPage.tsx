// src/pages/AssignPointsPage.tsx

import React, { useState } from "react";

const AssignPointsPage = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("デモ送信: 入力内容は保存されません。");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-md p-8 w-1/2 max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">ポイント付与申請</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 社員ID選択 */}
          <div>
            <label className="block mb-1 font-medium">社員番号</label>
            <select
              className="w-full border rounded p-2"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            >
              <option value="">選択してください</option>
              <option value="100">100 - アズウェル 太郎</option>
              <option value="101">101 - サンプル 次郎</option>
              <option value="102">102 - テスト 花子</option>
            </select>
          </div>

          {/* 表題 */}
          <div>
            <label className="block mb-1 font-medium">表題</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="例：ノルマ達成"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* ポイント */}
          <div>
            <label className="block mb-1 font-medium">ポイント数</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              placeholder="例：500"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              required
              min="1"
            />
          </div>

          {/* 申請日 */}
          <div>
            <label className="block mb-1 font-medium">申請日</label>
            <input
              type="date"
              className="w-full border rounded p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* 備考欄 */}
          <div>
            <label className="block mb-1 font-medium">備考（任意）</label>
            <textarea
              className="w-full border rounded p-2"
              rows={3}
              placeholder="自由に入力できます"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>

          {/* ボタン */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              ポイント付与を申請する
            </button>
            <button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => window.history.back()}
            >
              戻る
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignPointsPage;
