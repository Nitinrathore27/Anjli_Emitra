import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Settings = () => {
    const [notifyMessage1, setNotifyMessage1] = useState('');
    const [notifyMessage2, setNotifyMessage2] = useState('');

    useEffect(() => {
        // Simulate fetching messages from a server
        // Replace with actual fetch call
        const fetchMessages = async () => {
            const data1 = "Thank you for registering with us. We are glad to have you on board. We will keep you updated with our latest offers and promotions. Stay tuned!";
            const data2 = "Welcome back! We are glad to see you again. We have some exciting offers and promotions for you. Stay tuned!";
            setNotifyMessage1(data1);
            setNotifyMessage2(data2);
        };
        fetchMessages();
    }, []);

    const handleNotifyMessage1 = () => {
        // Logic to update Notify Message 1
        console.log('Notify Message 1 Updated:', notifyMessage1);
    };

    const handleNotifyMessage2 = () => {
        // Logic to update Notify Message 2
        console.log('Notify Message 2 Updated:', notifyMessage2);
    };

    return (
        <Layout>
            <div className="p-4 max-w-lg mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">Notify Message 1</h1>
                    <textarea
                        onChange={(e) => setNotifyMessage1(e.target.value)}
                        placeholder="Registration Notification Message"
                        value={notifyMessage1}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button
                        onClick={handleNotifyMessage1}
                        className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Update
                    </button>
                </div>

                <div>
                    <h1 className="text-2xl font-bold mb-2">Notify Message 2</h1>
                    <textarea
                        onChange={(e) => setNotifyMessage2(e.target.value)}
                        placeholder="Visiting again Message"
                        value={notifyMessage2}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button
                        onClick={handleNotifyMessage2}
                        className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Update
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Settings;
