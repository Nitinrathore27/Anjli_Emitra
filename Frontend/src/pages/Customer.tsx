import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Arrowdown from '../components/icons/Arrowdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomerParams {
    id: string;
}

interface Document {
    name: string;
    file: File | null;
}

interface FamilyMember {
    name: string;
    relationship: string;
    age: string; // Here you can use date instead of string if you're storing DOB
}

const Customer: React.FC = () => {
    const { id } = useParams<CustomerParams>();
    const [basicInfo, setBasicInfo] = useState({ name: '', email: '', phone: '', gender: '', dob: new Date() });
    const [address, setAddress] = useState({ line1: '', line2: '', city: '', state: '', pincode: '', country: '' });
    const [documents, setDocuments] = useState<Document[]>([
        { name: 'Aadhar Card', file: null },
        { name: 'PAN Card', file: null },
        { name: 'Photograph', file: null },
    ]);
    const [family, setFamily] = useState<FamilyMember[]>([
        { name: '', relationship: '', age: '' },
    ]);
    const [showBasicInfo, setShowBasicInfo] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showDocuments, setShowDocuments] = useState(false);
    const [showFamily, setShowFamily] = useState(false);

    useEffect(() => {
        // Fetch customer data by ID and update state
        // For now, we're using placeholder data
        setBasicInfo({ name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', gender: 'male', dob: new Date('1990-01-01') });
        setAddress({ line1: '123 Main St', line2: 'Apt 4', city: 'Anytown', state: 'CA', pincode: '12345', country: 'USA' });
        setDocuments([
            { name: 'Aadhar Card', file: null },
            { name: 'PAN Card', file: null },
            { name: 'Photograph', file: null },
        ]);
        setFamily([
            { name: 'Jane Doe', relationship: 'Spouse', age: '30' },
        ]);
    }, [id]);

    const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
    };

    const handleDobChange = (date: Date) => {
        setBasicInfo({ ...basicInfo, dob: date });
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index].file = e.target.files ? e.target.files[0] : null;
        setDocuments(updatedDocuments);
    };

    const handleFamilyChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedFamily = [...family];
        updatedFamily[index] = { ...updatedFamily[index], [e.target.name]: e.target.value };
        setFamily(updatedFamily);
    };

    const handleAddFamilyMember = () => {
        setFamily([...family, { name: '', relationship: '', age: '' }]);
    };

    const handleRemoveFamilyMember = (index: number) => {
        const updatedFamily = family.filter((_, i) => i !== index);
        setFamily(updatedFamily);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Submitted:', { basicInfo, address, documents, family });
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Customer {id}</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-box">
                        <h2
                            className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
                            onClick={() => setShowBasicInfo(!showBasicInfo)}
                        >
                            Basic Information
                            <Arrowdown />
                        </h2>
                        {showBasicInfo && (
                            <div className="text-sm grid gap-2 grid-cols-1 sm:grid-cols-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={basicInfo.name}
                                    onChange={handleBasicInfoChange}
                                    placeholder="Name"
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    name="gender"
                                    value={basicInfo.gender}
                                    onChange={handleBasicInfoChange}
                                    placeholder="Gender"
                                    className="input-field"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={basicInfo.email}
                                    onChange={handleBasicInfoChange}
                                    placeholder="Email"
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={basicInfo.phone}
                                    onChange={handleBasicInfoChange}
                                    placeholder="Phone"
                                    className="input-field"
                                />
                                <DatePicker
                                    selected={basicInfo.dob}
                                    onChange={handleDobChange}
                                    className="input-field"
                                    placeholderText="Date of Birth"
                                />
                            </div>
                        )}
                    </div>

                    <div className="border-box">
                        <h2
                            className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
                            onClick={() => setShowAddress(!showAddress)}
                        >
                            Address
                            <Arrowdown />
                        </h2>
                        {showAddress && (
                            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                                <input
                                    type="text"
                                    name="line1"
                                    value={address.line1}
                                    onChange={handleAddressChange}
                                    placeholder="Address Line 1"
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    name="line2"
                                    value={address.line2}
                                    onChange={handleAddressChange}
                                    placeholder="Address Line 2"
                                    className="input-field"
                                />
                                <select
                                    name="city"
                                    value={address.city}
                                    onChange={handleAddressChange}
                                    className="input-field"
                                >
                                    <option value="" disabled>Select City</option>
                                    {/* Add city options */}
                                </select>
                                <select
                                    name="state"
                                    value={address.state}
                                    onChange={handleAddressChange}
                                    className="input-field"
                                >
                                    <option value="" disabled>Select State</option>
                                    {/* Add state options */}
                                </select>
                                <select
                                    name="pincode"
                                    value={address.pincode}
                                    onChange={handleAddressChange}
                                    className="input-field"
                                >
                                    <option value="" disabled>Select Pincode</option>
                                    {/* Add pincode options */}
                                </select>
                                <select
                                    name="country"
                                    value={address.country}
                                    onChange={handleAddressChange}
                                    className="input-field"
                                >
                                    <option value="" disabled>Select Country</option>
                                    {/* Add country options */}
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="border-box">
                        <h2
                            className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
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

                    <div className="border-box">
                        <h2
                            className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
                            onClick={() => setShowFamily(!showFamily)}
                        >
                            Family Details
                            <Arrowdown />
                        </h2>
                        {showFamily && (
                            <div className="space-y-4">
                                {family.map((member, index) => (
                                    <div key={index} className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                                        <input
                                            type="text"
                                            name="name"
                                            value={member.name}
                                            onChange={(e) => handleFamilyChange(e, index)}
                                            placeholder="Name"
                                            className="input-field"
                                        />
                                        <input
                                            type="text"
                                            name="relationship"
                                            value={member.relationship}
                                            onChange={(e) => handleFamilyChange(e, index)}
                                            placeholder="Relationship"
                                            className="input-field"
                                        />
                                        <input
                                            type="text"
                                            name="age"
                                            value={member.age}
                                            onChange={(e) => handleFamilyChange(e, index)}
                                            placeholder="Age"
                                            className="input-field"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFamilyMember(index)}
                                            className="bg-red-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddFamilyMember}
                                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none"
                                >
                                    Add Family Member
                                </button>
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
