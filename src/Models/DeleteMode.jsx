import React from 'react';

const DeleteModal = ({ showModal, onClose, onDelete, newsId }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center  justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-100">
            <h2 className="text-xl font-semibold mb-4 text-nowrap">Are you sure you want to delete this news?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                No
              </button>
              <button
                onClick={() => onDelete(newsId)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
