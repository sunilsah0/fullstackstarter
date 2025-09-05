useEffect(() => {
  axios
    .get(`${API}/api/items`)
    .then((res) => {
      console.log("API response:", res.data); // 👈 check what comes back
      setItems(res.data.items || []);
    })
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, []);
