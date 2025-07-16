import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const demoStats = {
    totalUsers: 12,
    totalPoints: 45800,
    redeemablePoints: 31000,
    pendingRequests: 2,
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6">
      {/* ログアウトボタン */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => navigate("/")}
        >
          ログアウト
        </button>
      </div>

      {/* タイトル */}
      <h1 className="text-2xl font-bold mb-6 text-center">管理者ダッシュボード</h1>

      {/* 概要統計 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-500">登録ユーザー</p>
          <p className="text-xl font-bold">{demoStats.totalUsers}人</p>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-500">総ポイント数</p>
          <p className="text-xl font-bold">{demoStats.totalPoints.toLocaleString()}pt</p>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-500">換金可能</p>
          <p className="text-xl font-bold">{demoStats.redeemablePoints.toLocaleString()}pt</p>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-500">申請中</p>
          <p className="text-xl font-bold">{demoStats.pendingRequests}件</p>
        </div>
      </div>

      {/* メニュー */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => navigate("/admin/assign")}
          className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded shadow text-lg"
        >
          ✅ ポイント付与
        </button>
        <button
          onClick={() => navigate("/admin/view-all")}
          className="bg-green-500 hover:bg-green-600 text-white py-4 rounded shadow text-lg"
        >
          📄 ポイント参照（一覧／個別）
        </button>
        <button
          onClick={() => navigate("/admin/employees")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded shadow text-lg"
        >
          👤 社員マスタ管理
        </button>
        <button
          onClick={() => navigate("/admin/requirements")}
          className="bg-purple-500 hover:bg-purple-600 text-white py-4 rounded shadow text-lg"
        >
          📋 ポイント要件マスタ
        </button>
        <button
          onClick={() => navigate("/admin/redeempoints")}
          className="bg-pink-500 hover:bg-pink-600 text-white py-4 rounded shadow text-lg col-span-1 md:col-span-2"
        >
          💰 ポイント消費処理
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
