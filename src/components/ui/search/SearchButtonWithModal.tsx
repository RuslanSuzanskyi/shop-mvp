"use client";

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchModalContent from '@/components/ui/search/SearchModalContent';
import Modal from '../modal/ui/Modal';

export default function SearchButtonWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="p-2 min-w-8 cursor-pointer hover:text-gray-500 transition duration-300"
        aria-label="Open search"
      >
        <FaSearch className="h-8 w-8" />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} className="max-w-2xl h-[80vh] flex flex-col">
        <SearchModalContent onProductClick={closeModal} />
      </Modal>
    </>
  );
}