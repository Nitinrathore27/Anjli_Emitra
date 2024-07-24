import React from "react";

interface ConfirmationModalProps {
    show: boolean;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
    confirmButtonText?: string;
    cancelButtonText?: string;
    confirmButtonClassName?: string;
    cancelButtonClassName?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    show,
    message,
    onCancel,
    onConfirm,
    confirmButtonText = "Confirm",
    cancelButtonText = "Cancel",
    confirmButtonClassName = "bg-red-500 hover:bg-red-600",
    cancelButtonClassName = "bg-gray-500 hover:bg-gray-600"
}) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm mx-auto z-10">
                <div className="p-4">
                    <p>{message}</p>
                    <div className="mt-4 flex justify-end space-x-4">
                        <button
                            onClick={onCancel}
                            className={`px-4 py-2 text-white rounded focus:outline-none ${cancelButtonClassName}`}
                        >
                            {cancelButtonText}
                        </button>
                        <button
                            onClick={onConfirm}
                            className={`px-4 py-2 text-white rounded focus:outline-none ${confirmButtonClassName}`}
                        >
                            {confirmButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
