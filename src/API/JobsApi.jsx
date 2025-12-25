export const jobsCreatedBypromise = async (email) => {
    try {
        // URL এর শুরুতে অবশ্যই https:// যুক্ত করতে হবে
        const res = await fetch(`https://next-hire-server-steel.vercel.app/jobs?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' // কুকি/টোকেন পাঠানোর জন্য এটি বাধ্যতামূলক
        });
        
        if (!res.ok) {
            // যদি রেসপন্স JSON না হয়, তবে এই চেকটি আপনাকে সঠিক এরর বুঝতে সাহায্য করবে
            throw new Error(`Server responded with status: ${res.status}`);
        }
        
        return await res.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
};