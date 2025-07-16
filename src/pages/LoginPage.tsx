// src/pages/LoginPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (employeeId === "100" && password === "user") {
      navigate("/user");
    } else if (employeeId === "999" && password === "admin") {
      navigate("/admin");
    } else {
      setError("社員番号またはパスワードが正しくありません。");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-xl font-bold mb-4 text-center">ログイン</h1>
        <input
          type="text"
          placeholder="社員番号"
          className="w-full p-2 mb-4 border rounded"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ここで常に<p>をレンダリング、高さだけ確保 */}
        <p className="h-5 text-red-500 text-sm mb-4">
          {error || "\u00A0"}
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          ログイン
        </button>
        <br/>
        <br/>
        <br/>
        <p>社員番号：100　pass：user　　　ユーザーでログイン </p>
        <p>社員番号：999　pass：admin　　管理者でログイン </p>
      </div>
    </div>
  );
}
