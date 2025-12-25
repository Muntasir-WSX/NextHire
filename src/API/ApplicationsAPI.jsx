export const fetchMyApplications = (email) => {
  return fetch(
    `https://next-hire-server-steel.vercel.app/applications?email=${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};
