import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "../model/types";
import { MdClose } from "react-icons/md";

export default function Modal({ isOpen, onClose, children, className, overlayClassName }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={`fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden flex items-center justify-center ${overlayClassName || 'bg-black/50'}`}>
      <div
        ref={modalRef}
        className={`relative bg-white rounded-lg shadow-xl p-6 max-w-lg w-full transform transition-all duration-300 ease-out scale-100 opacity-100 ${className || ''}`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer hover:text-gray-500 transition duration-300"
          aria-label="Close modal"
        >
          <MdClose className="h-8 w-8" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};