import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Arrowdown from '../components/icons/Arrowdown';

interface CustomerParams {
    id: string;
}

interface Document {
    name: string;
    file: File | null;
}

const Customer: React.FC = () => {
    const { id } = useParams<{ id: string }>();  // Use type assertion to specify expected shape
    const [basicInfo, setBasicInfo] = useState({ name: '', email: '', phone: '' });
    const [address, setAddress] = useState({ street: '', city: '', state: '', zip: '' });
    const [documents, setDocuments] = useState<Document[]>([
        { name: 'Aadhar Card', file: null },
        { name: 'PAN Card', file: null },
        { name: 'Photograph', file: null },
    ]);
    const [showBasicInfo, setShowBasicInfo] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showDocuments, setShowDocuments] = useState(false);

    useEffect(() => {
        // Fetch customer data by ID and update state
        // For now, we're using placeholder data
        setBasicInfo({ name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' });
        setAddress({ street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' });
        // Assuming documents are URLs of already uploaded documents
        setDocuments([
            { name: 'Aadhar Card', file: null },
            { name: 'PAN Card', file: null },
            { name: 'Photograph', file: null },
        ]);
    }, [id]);

    const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index].file = e.target.files ? e.target.files[0] : null;
        setDocuments(updatedDocuments);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Submitted:', { basicInfo, address, documents });
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Customer {id}</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border border-gray-300 p-4 rounded-md">
                        <h2
                            className="text-xl font-semibold mb-2 cursor-pointer flex justify-between items-center"
                            onClick={() => setShowBasicInfo(!showBasicInfo)}
                        >
                            Basic Information
                            <Arrowdown />
                        </h2>
                        {showBasicInfo && (
                            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                                <input
                                    type="text"
                                    name="name"
                                    value={basicInfo.name}
                                    onChange={handleBasicInfoChange}
                                    placeholder="Name"
                                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={basicInfo.email}
                                    onChange={handleBasicInfoChange}
                                    placeholder="Email"
                                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={basicInfo.phone}
                                    onChange={handleBasicInfoChange}
                                    placeholder="Phone"
                                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                                />
                            </div>
                        )}
                    </div>

                    <div className="border border-gray-300 p-4 rounded-md">
                        <h2
                            className="text-xl font-semibold mb-2 cursor-pointer flex justify-between items-center"
                            onClick={() => setShowAddress(!showAddress)}
                        >
                            Address
                            <Arrowdown />
                        </h2>
                        {showAddress && (
                            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                                <input
                                    type="text"
                                    name="street"
                                    value={address.street}
                                    onChange={handleAddressChange}
                                    placeholder="Street"
                                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    value={address.city}
                                    onChange={handleAddressChange}
                                    placeholder="City"
                                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="state"
                                    value={address.state}
                                    onChange={handleAddressChange}
                                    placeholder="State"
                                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    value={address.zip}
                                    onChange={handleAddressChange}
                                    placeholder="ZIP Code"
                                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                                />
                            </div>
                        )}
                    </div>

                    <div className="border border-gray-300 p-4 rounded-md">
                        <h2
                            className="text-xl font-semibold mb-2 cursor-pointer flex justify-between items-center"
                            onClick={() => setShowDocuments(!showDocuments)}
                        >
                            Documents
                            <Arrowdown />
                        </h2>
                        {showDocuments && (
                            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                                {documents.map((doc, index) => (
                                    <div key={index} className="mb-2">
                                        <label className="block mb-1">{doc.name}</label>
                                        <input
                                            type="file"
                                            onChange={(e) => handleDocumentChange(e, index)}
                                            className="block w-full p-2 border border-gray-300 rounded"
                                        />
                                        {doc.file && (
                                            <div className="mt-2">
                                                <span className="text-sm text-gray-600">{doc.file.name}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Save
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Customer;
