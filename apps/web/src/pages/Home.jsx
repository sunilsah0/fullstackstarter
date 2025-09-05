import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/api/items`)
      .then((res) => setItems(res.data.items || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-500">Loading…</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">📋 Items</h1>

      {items.length === 0 && (
        <p className="text-gray-500">No items yet. Try adding one.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl shadow bg-white hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-gray-600 text-sm mt-1">
              {item.description || "No description"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
