// API/ApplicationViewAPI.jsx
export const fetchJobSpecificApplications = (jobId) => {
    // URL এর শুরুতে অবশ্যই https:// যুক্ত করতে হবে
    return fetch(`https://next-hire-server-steel.vercel.app//applications/job/${jobId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include" // কুকি (Token) পাঠানোর জন্য এটি বাধ্যতামূলক
    })
    .then(res => {
        // রেসপন্স ঠিক আছে কি না চেক করা
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .catch(err => {
        console.error("Fetch error in fetchJobSpecificApplications:", err);
        throw err; // এররটি হ্যান্ডেল করার জন্য রি-থ্রো করা হলো
    });
};