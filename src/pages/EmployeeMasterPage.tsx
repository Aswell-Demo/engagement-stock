// src/pages/EmployeeMasterPage.tsx
import { useMemo } from "react";

type Employee = {
  id: string;
  name: string;
  joinedAt: string;      // 入社日
  rank: string;          // ランク追加
};

const employees: Employee[] = [
  { id: "100", name: "アズウェル 太郎", joinedAt: "2021/06/01", rank: "SSSランク" },
  { id: "101", name: "サンプル 次郎", joinedAt: "2023/04/01", rank: "SSランク" },
  { id: "102", name: "テスト 花子",   joinedAt: "2025/02/01", rank: "Sランク" },
];

// 仮の現在日（2025年7月1日とする）
const CURRENT_DATE = new Date("2025-07-01");

const isEligible = (joinedAt: string): boolean => {
  const joinDate = new Date(joinedAt);
  const diffInYears = CURRENT_DATE.getFullYear() - joinDate.getFullYear();
  const hasPassed2Years =
    diffInYears > 2 ||
    (diffInYears === 2 &&
      (CURRENT_DATE.getMonth() > joinDate.getMonth() ||
        (CURRENT_DATE.getMonth() === joinDate.getMonth() &&
         CURRENT_DATE.getDate() >= joinDate.getDate())));

  return hasPassed2Years;
};

const calcRegistrationDate = (joinedAt: string): string => {
  const joinDate = new Date(joinedAt);
  joinDate.setFullYear(joinDate.getFullYear() + 2);
  const jst = new Date(joinDate.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
};

const calcRedeemableDate = (joinedAt: string): string => {
  const joinDate = new Date(joinedAt);
  joinDate.setFullYear(joinDate.getFullYear() + 5);
  joinDate.setMonth(9); // October
  joinDate.setDate(1);  // 10/01固定
  const jst = new Date(joinDate.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
};

const EmployeeMasterPage = () => {
  const displayData = useMemo(
    () =>
      employees.map((emp) => {
        const eligible = isEligible(emp.joinedAt);
        const registeredAt = eligible ? calcRegistrationDate(emp.joinedAt) : "-";
        const redeemableAt = eligible ? calcRedeemableDate(emp.joinedAt) : "-";
        return {
          ...emp,
          registeredAt,
          redeemableAt,
          status: eligible ? "対象" : "非対象",
        };
      }),
    []
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">社員マスタ管理（デモ）</h1>

      <table className="w-full table-auto border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">社員番号</th>
            <th className="p-2">氏名</th>
            <th className="p-2">ランク</th>
            <th className="p-2">入社日</th>
            <th className="p-2">登録日</th>
            <th className="p-2">換金可能日</th>
            <th className="p-2">付与対象</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((emp) => (
            <tr key={emp.id} className="text-center border-t">
              <td className="p-2">{emp.id}</td>
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.rank}</td>
              <td className="p-2">{emp.joinedAt}</td>
              <td className="p-2">{emp.registeredAt}</td>
              <td className="p-2">{emp.redeemableAt}</td>
              <td className={`p-2 font-semibold ${emp.status === "対象" ? "text-green-600" : "text-gray-400"}`}>
                {emp.status}
              </td>
            </tr>
          ))}
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
  );
};

export default EmployeeMasterPage;
