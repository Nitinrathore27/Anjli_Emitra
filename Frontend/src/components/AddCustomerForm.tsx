import React from 'react'

const AddCustomerForm = (props: any) => {
    const { show, setShow } = props;

    const handleSubmit = () => {
        setShow(!show);
        alert("Customer Added");
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg z-40 flex flex-col border-lg">
                <h2 className="text-2xl font-bold mb-4">Add Customer Form</h2>
                <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded-md mb-2" />
                <input type="text" placeholder="Phone" className="border border-gray-300 p-2 rounded-md mb-2" />
                <input type="text" placeholder="Email" className="border border-gray-300 p-2 rounded-md mb-4" />
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                        Add Customer
                    </button>
                </div>
            </div>
        </div>


    )
}

export default AddCustomerForm