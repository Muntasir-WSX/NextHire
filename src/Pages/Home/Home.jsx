import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import SearchCategory from './SearchCategory';
import BrowuseCategoryHome from './BrowuseCategoryHome';
import HiringRouts from './HiringRouts';
import HotJobs from './HotJobs';
import SearchJobs from './SearchJobs';
import Others from './Others';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // তোর সার্ভার অনুযায়ী 'Jobs' (বড় হাতের J) এবং https:// ব্যবহার করা হয়েছে
        fetch('https://next-hire-server-steel.vercel.app/jobs', {
            credentials: 'include' 
        })
        .then(res => {
            if (!res.ok) throw new Error("Failed to fetch jobs");
            return res.json();
        })
        .then(data => {
            // যদি ডাটা সরাসরি অ্যারে না হয়ে অবজেক্টের ভেতরে থাকে (যেমন: data.jobs) 
            // তাহলে setJobs(data.jobs) দিবি। আপাতত অ্যারে ধরে করছি।
            setJobs(Array.isArray(data) ? data : []);
            setIsLoading(false);
        })
        .catch(err => {
            console.error("Error loading jobs:", err);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="overflow-x-hidden">
            <Banner />
            <SearchCategory />
            <BrowuseCategoryHome />
            <HiringRouts />
            
            {/* HotJobs-এ আমরা সরাসরি jobs অ্যারে পাঠাচ্ছি */}
            {isLoading ? (
                <div className="flex justify-center py-20">
                    <span className="loading loading-spinner loading-lg text-violet-700"></span>
                </div>
            ) : (
                <HotJobs jobs={jobs} />
            )}

            <SearchJobs />
            <Others />
        </div>
    );
};

export default Home;