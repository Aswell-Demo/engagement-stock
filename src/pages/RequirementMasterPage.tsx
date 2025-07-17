import  { useState } from 'react';

export default function RequirementMasterPage() {
  const [esConfig] = useState({
    startDate: '2025-10-01',
    periodStart: '2025-10-01',
    periodEnd: '2026-09-30',
    eligibilityYears: 2,
    minEquity: 100000000,
    rank: 'SS以上',
    ptValue: 1,
    frequency: '毎年',
    annualBudget: 1500000,
  });

  const [menus] = useState([
    {
      category: '成長',
      name: 'チャレンジpt',
      budget: 300000,
      example: '売上向上や効率化のための取組、チームフォロー、教育資料作成など',
    },
    {
      category: '業務',
      name: '作業負荷pt',
      budget: 250000,
      example: '深夜勤務、短納期対応、長時間残業、出張フォローなど',
    },
    {
      category: '在籍',
      name: '勤続年数pt',
      budget: 320000,
      example: '3年：30pt、5年：50pt、10年：100pt',
    },
    {
      category: '採用',
      name: 'リファラル採用pt',
      budget: 60000,
      example: '紹介者ランクに応じて10〜50pt付与',
    },
    {
      category: '特別評価',
      name: '特別評価pt',
      budget: 140000,
      example: '社長賞50pt、管理者賞30ptなど',
    },
  ]);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* ES条件設定 */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4">① ES条件設定</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block font-semibold mb-1">制度開始日</label>
            <input type="date" value={esConfig.startDate} readOnly className="border rounded px-2 py-1 w-full" />
          </div>
          <div>
            <label className="block font-semibold mb-1">付与期間</label>
            <div className="flex gap-2 items-center">
              <input type="date" value={esConfig.periodStart} readOnly className="border rounded px-2 py-1 w-full" />
              <span>〜</span>
              <input type="date" value={esConfig.periodEnd} readOnly className="border rounded px-2 py-1 w-full" />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">付与対象者（入社後）</label>
            <input type="number" value={esConfig.eligibilityYears} readOnly className="border rounded px-2 py-1 w-20" /> 年
          </div>
          <div>
            <label className="block font-semibold mb-1">社員ランク条件</label>
            <input type="text" value={esConfig.rank} readOnly className="border rounded px-2 py-1 w-full" />
          </div>
          <div>
            <label className="block font-semibold mb-1">純資産下限</label>
            <input type="number" value={esConfig.minEquity} readOnly className="border rounded px-2 py-1 w-full" /> 円
          </div>
          <div>
            <label className="block font-semibold mb-1">ポイント価値</label>
            <input value={`1pt = ${esConfig.ptValue}円`} readOnly className="border rounded px-2 py-1 w-full" />
          </div>
          <div>
            <label className="block font-semibold mb-1">発行頻度</label>
            <input type="text" value={esConfig.frequency} readOnly className="border rounded px-2 py-1 w-full" />
          </div>
          <div>
            <label className="block font-semibold mb-1">年間予算</label>
            <input type="number" value={esConfig.annualBudget} readOnly className="border rounded px-2 py-1 w-full" /> 円
          </div>
        </div>
      </div>

      {/* ポイント付与メニュー一覧 */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4">② ポイント付与メニュー一覧</h2>
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1 text-left">大項目</th>
              <th className="border px-2 py-1 text-left">メニュー名称</th>
              <th className="border px-2 py-1 text-left">年間予算</th>
              <th className="border px-2 py-1 text-left">付与例</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu, idx) => (
              <tr key={idx} className="border-t">
                <td className="border px-2 py-1">{menu.category}</td>
                <td className="border px-2 py-1">{menu.name}</td>
                <td className="border px-2 py-1">{menu.budget.toLocaleString()} 円</td>
                <td className="border px-2 py-1">{menu.example}</td>
              </tr>
            ))}
            <tr className="font-semibold border-t bg-gray-50">
              <td colSpan={2} className="text-right px-2 py-1">合計：</td>
              <td className="px-2 py-1">
                {menus.reduce((sum, m) => sum + m.budget, 0).toLocaleString()} 円
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
                 <div className="flex justify-end mb-4">
            <button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => window.history.back()}
            >
              戻る
            </button>
          </div>
      </div>
    </div>
  );
}