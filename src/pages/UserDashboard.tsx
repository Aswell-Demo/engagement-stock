import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const user = {
    name: "アズウェル 太郎",
    registrationDate: "2025/07/01",
    redemptionStartDate: "2027/10/01",
  };

  const history = [
    {
      date: "2025/10/01",
      type: "付与",
      detail: "ノルマ達成",
      points: 10000,
      status: "承認済み",
      paymentDate: "2025/11/01",
      paymentAmount: "10,000pt",
    },
    {
      date: "2026/05/20",
      type: "付与",
      detail: "プロジェクト貢献",
      points: 5000,
      status: "承認済み",
      paymentDate: "2026/07/01",
      paymentAmount: "5,000pt",
    },
    {
      date: "2027/07/10",
      type: "付与",
      detail: "品質改善活動",
      points: 15000,
      status: "承認済み",
      paymentDate: "2027/08/01",
      paymentAmount: "15,000pt",
    },
    {
      date: "2028/06/10",
      type: "利用",
      detail: "換金申請",
      points: -10000,
      status: "承認済み",
      paymentDate: "2028/08/10",
      paymentAmount: "10,000pt",
    },
    {
      date: "2028/08/01",
      type: "利用",
      detail: "換金申請",
      points: -5000,
      status: "二次承認",
      paymentDate: "2028/08/15",
      paymentAmount: "5,000pt",
    },
  ];

  const totalGranted = history
    .filter((item) => item.type === "付与")
    .reduce((sum, item) => sum + item.points, 0);

  const redeemed = history
    .filter((item) => item.type === "利用" && item.status === "承認済み")
    .reduce((sum, item) => sum + Math.abs(item.points), 0);

  const pending = history
    .filter((item) => item.type === "利用" && item.status !== "承認済み")
    .reduce((sum, item) => sum + Math.abs(item.points), 0);

  const current = totalGranted - redeemed;
  const effectivePoints = current - pending;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="flex justify-end mb-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          ログアウト
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-5xl space-y-6 mt-12">
          <h1 className="text-2xl font-bold text-center">ダッシュボード</h1>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">{user.name} さん</h2>
            <table className="w-full text-sm table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">登録日</th>
                  <th className="p-2">換金開始日</th>
                  <th className="p-2">ポイント数</th>
                  <th className="p-2">申請中</th>
                  <th className="p-2">有効ポイント</th>
                  <th className="p-2">換金済</th>
                  <th className="p-2">累計獲得</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-2">{user.registrationDate}</td>
                  <td className="p-2">{user.redemptionStartDate}</td>
                  <td className="p-2">{current.toLocaleString()}pt</td>
                  <td className="p-2">{pending.toLocaleString()}pt</td>
                  <td className="p-2">{effectivePoints.toLocaleString()}pt</td>
                  <td className="p-2">{redeemed.toLocaleString()}pt</td>
                  <td className="p-2">{totalGranted.toLocaleString()}pt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold">ポイント履歴</h2>
            <table className="w-full table-auto border rounded shadow">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-sm">日付</th>
                  <th className="p-2 text-sm">種別</th>
                  <th className="p-2 text-sm">詳細</th>
                  <th className="p-2 text-sm">ポイント</th>
                  <th className="p-2 text-sm">状態</th>
                  <th className="p-2 text-sm">支給予定日</th>
                  <th className="p-2 text-sm">支給決定額</th>
                  <th className="p-2 text-sm">有効ポイント</th>
                  <th className="p-2 text-sm">累計獲得</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, idx) => {
                  const cumulative = history
                    .slice(0, idx + 1)
                    .filter((h) => h.type === "付与")
                    .reduce((acc, h) => acc + h.points, 0);

                  const used = history
                    .slice(0, idx + 1)
                    .filter((h) => h.type === "利用")
                    .reduce((acc, h) => acc + h.points, 0);

                  const available = cumulative + used;

                  return (
                    <tr key={idx} className="border-t text-center">
                      <td className="p-2 text-sm">{item.date}</td>
                      <td className="p-2 text-sm">{item.type}</td>
                      <td className="p-2 text-sm">{item.detail}</td>
                      <td className="p-2 text-sm">{item.points.toLocaleString()}pt</td>
                      <td className="p-2 text-sm">{item.status}</td>
                      <td className="p-2 text-sm">{item.paymentDate}</td>
                      <td className="p-2 text-sm">{item.paymentAmount}</td>
                      <td className="p-2 text-sm">{available.toLocaleString()}pt</td>
                      <td className="p-2 text-sm">{cumulative.toLocaleString()}pt</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
             <button
                onClick={() => navigate("/user/redeem")}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
                >
                💰 換金申請
             </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
