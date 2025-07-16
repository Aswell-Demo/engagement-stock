// src/pages/PointListPage.tsx
import { useNavigate } from "react-router-dom";

const PointListPage = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: "100",
      name: "アズウェル 太郎",
      current: 15000,
      pending: 5000,
      redeemed: 10000,
      total: 30000,
      firstGranted: "2025/07/01",
      redeemableDate: "2028/10/01",
      status: "有効",
      route: "/admin/PointDetailTaro",
    },
    {
      id: "101",
      name: "サンプル 次郎",
      current: 8000,
      pending: 2000,
      redeemed: 3000,
      total: 13000,
      firstGranted: "2026/04/15",
      redeemableDate: "2029/10/01",
      status: "一部有効",
      route: "/admin/PointDetailJiro",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl">
        <h1 className="text-2xl font-bold mb-4 text-center">ポイント一覧</h1>
        <table className="w-full table-auto border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">社員番号</th>
              <th className="p-2">氏名</th>
              <th className="p-2">有効ポイント</th>
              <th className="p-2">申請中</th>
              <th className="p-2">換金済</th>
              <th className="p-2">累計</th>
              <th className="p-2">登録日</th>
              <th className="p-2">換金開始日</th>
              <th className="p-2">ステータス</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr className="text-center border-t hover:bg-gray-100" key={row.id}>
                <td className="p-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => navigate(row.route)}
                  >
                    {row.id}
                  </button>
                </td>
                <td className="p-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => navigate(row.route)}
                  >
                    {row.name}
                  </button>
                </td>
                <td className="p-2">{row.current.toLocaleString()}pt</td>
                <td className="p-2">{row.pending.toLocaleString()}pt</td>
                <td className="p-2">{row.redeemed.toLocaleString()}pt</td>
                <td className="p-2">{row.total.toLocaleString()}pt</td>
                <td className="p-2">{row.firstGranted}</td>
                <td className="p-2">{row.redeemableDate}</td>
                <td className="p-2">{row.status}</td>
              </tr>
            ))}
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
};

export default PointListPage;
