import React from "react";

interface DeleteConfirmationModalProps {
    show: boolean;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ show, message, onCancel, onConfirm }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm mx-auto z-10">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                    <p>{message}</p>
                    <div className="mt-4 flex justify-end space-x-4">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
