import React, { useState } from "react";
import Layout from "../components/Layout";
import ConfirmationModal from "../components/ConfiramationModal";

interface Customer {
    id: number;
    name: string;
    phone: string;
    lastVisit: string;
}

const Customers: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [modalConfig, setModalConfig] = useState({
        message: "",
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        confirmButtonClassName: "bg-red-500 hover:bg-red-600",
        cancelButtonClassName: "bg-gray-500 hover:bg-gray-600"
    });

    const customers: Customer[] = [
        {
            id: 1,
            name: "John Doe",
            phone: "+919898989898",
            lastVisit: "2021-09-01",
        },
        {
            id: 2,
            name: "Jane Doe",
            phone: "+919898989898",
            lastVisit: "2021-09-01",
        },
        {
            id: 3,
            name: "John Doe",
            phone: "+919898989898",
            lastVisit: "2021-09-01",
        },
        {
            id: 4,
            name: "Jane Doe",
            phone: "+919898989898",
            lastVisit: "2021-09-01",
        },
        {
            id: 5,
            name: "John Doe",
            phone: "+919898989898",
            lastVisit: "2021-09-01",
        },
        {
            id: 6,
            name: "Jane Doe",
            phone: "+919898989898",
            lastVisit: "2021-09-01",
        },
        {
            id: 7,
            name: "John Doe",
            phone: "+919898989898",
            lastVisit: "2021-09-01",
        },
        {
            id: 8,
            name: "Jane Doe",
            phone: "+919898989898",
            lastVisit: "2021-09-01",
        },


    ];

    const handleDeleteCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
        setModalConfig({
            message: `Are you sure you want to delete ${customer.name}?`,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            confirmButtonClassName: "bg-red-500 hover:bg-red-600",
            cancelButtonClassName: "bg-gray-500 hover:bg-gray-600"
        });
        setShowModal(true);
    };

    const handleNotifyCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
        setModalConfig({
            message: `Are you sure you want to notify ${customer.name}?`,
            confirmButtonText: "Notify",
            cancelButtonText: "Cancel",
            confirmButtonClassName: "bg-green-500 hover:bg-green-600",
            cancelButtonClassName: "bg-gray-500 hover:bg-gray-600"
        });
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
        setSelectedCustomer(null);
    };

    const handleConfirm = () => {
        // Perform action here
        alert(`Action Performed: ${selectedCustomer?.name}`);
        setShowModal(false);
        setSelectedCustomer(null);
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Customers Table</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Customer ID</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Phone</th>
                            <th className="py-3 px-6 text-left">Last Visit</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {customers.map((customer) => (
                            <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <span className="font-medium">{customer.id}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span>{customer.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <span>{customer.phone}</span>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <span>{customer.lastVisit}</span>
                                </td>
                                <td className="py-3 px-6 text-left flex space-x-4">
                                    <button
                                        onClick={() => alert(`Edit customer: ${customer.name}`)}
                                        className="text-blue-500 hover:text-blue-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </button>
                                    <button onClick={() => handleDeleteCustomer(customer)} className="text-red-500 hover:text-red-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleNotifyCustomer(customer)}
                                        className="text-green-500 hover:text-green-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ConfirmationModal
                show={showModal}
                message={modalConfig.message}
                confirmButtonText={modalConfig.confirmButtonText}
                cancelButtonText={modalConfig.cancelButtonText}
                confirmButtonClassName={modalConfig.confirmButtonClassName}
                cancelButtonClassName={modalConfig.cancelButtonClassName}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </Layout>
    );
};

export default Customers;
