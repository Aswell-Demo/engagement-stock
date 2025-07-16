// src/pages/PointDetailTaro.tsx
const PointDetailTaro = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl">
        <h1 className="text-2xl font-bold mb-6 text-center">ポイント詳細</h1>

        {/* 概要情報 */}
        <div className="mb-8">
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
              <tr className="text-center border-t">
                <td className="p-2">100</td>
                <td className="p-2">アズウェル太郎</td>
                <td className="p-2">15,000pt</td>
                <td className="p-2">5,000pt</td>
                <td className="p-2">10,000pt</td>
                <td className="p-2">30,000pt</td>
                <td className="p-2">2025/10/01</td>
                <td className="p-2">2028/09/30</td>
                <td className="p-2 text-green-600 font-semibold">有効</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ポイント獲得履歴 */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-2">ポイント獲得履歴</h2>
          <table className="w-full table-auto border mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">付与日</th>
                <th className="p-2">表題</th>
                <th className="p-2">ポイント</th>
                <th className="p-2">付与者</th>
                <th className="p-2">有効化予定日</th>
                <th className="p-2">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-t">
                <td className="p-2">2025/10/01</td>
                <td className="p-2">ノルマ達成</td>
                <td className="p-2">10,000pt</td>
                <td className="p-2">管理者A</td>
                <td className="p-2">2028/09/30</td>
                <td className="p-2">初回付与</td>
              </tr>
              <tr className="text-center border-t">
                <td className="p-2">2026/05/20</td>
                <td className="p-2">プロジェクト貢献</td>
                <td className="p-2">5,000pt</td>
                <td className="p-2">管理者B</td>
                <td className="p-2">2029/09/30</td>
                <td className="p-2">大規模PJ対応</td>
              </tr>
              <tr className="text-center border-t">
                <td className="p-2">2027/07/10</td>
                <td className="p-2">品質改善活動</td>
                <td className="p-2">15,000pt</td>
                <td className="p-2">管理者C</td>
                <td className="p-2">2030/09/30</td>
                <td className="p-2">月間表彰</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ポイント利用履歴 */}
        <div>
          <h2 className="text-lg font-bold mb-2">ポイント利用履歴</h2>
          <table className="w-full table-auto border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">申請日</th>
                <th className="p-2">利用ポイント数</th>
                <th className="p-2">状態</th>
                <th className="p-2">承認日</th>
                <th className="p-2">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-t">
                <td className="p-2">2028/08/01</td>
                <td className="p-2">5,000pt</td>
                <td className="p-2">二次承認</td>
                <td className="p-2">2028/08/15</td>
                <td className="p-2">換金申請分</td>
              </tr>
              <tr className="text-center border-t">
                <td className="p-2">2028/06/10</td>
                <td className="p-2">10,000pt</td>
                <td className="p-2">承認済み</td>
                <td className="p-2">2028/08/10</td>
                <td className="p-2">一部換金済</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mb-4">
           <button
           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
           onClick={() => window.history.back()}
          >
          戻る
           </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointDetailTaro;
