import React from 'react';
import DisplayCard from '../components/DisplayCard';
import Layout from '../components/Layout';

const DashBoard: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">New Customers</h2>
                <div className="flex gap-4 justify-center">
                    <DisplayCard title="Today" value="100" description="New Customers" />
                    <DisplayCard title="Week" value="450" description="New Customers" />
                    <DisplayCard title="Month" value="5400" description="New Customers" />
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Total Customers</h2>
                <div className="flex gap-4 justify-center">
                    <DisplayCard title="Today" value="50" description="New Customers" />
                    <DisplayCard title="Week" value="200" description="Returning Customers" />
                    <DisplayCard title="Week" value="1200" description="Total Customers" />
                </div>
            </div>
        </Layout>
    );
};

export default DashBoard;
