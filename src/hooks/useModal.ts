"use client";

import { useState, useEffect, RefObject } from 'react';

interface UseModalOptions {
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
  modalContentRef?: RefObject<HTMLElement>;
  closeButtonRef?: RefObject<HTMLElement>;
}

export function useModal(initialState = false, options?: UseModalOptions) {
  const {
    closeOnEscape = true,
    closeOnClickOutside = true,
    modalContentRef,
    closeButtonRef,
  } = options || {};

  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);

  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, close, closeOnEscape]);

  useEffect(() => {
    if (!closeOnClickOutside || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      const isClickInsideModalContent = modalContentRef?.current?.contains(target);
      const isClickOnCloseButton = closeButtonRef?.current?.contains(target);

      if (!isClickInsideModalContent && !isClickOnCloseButton) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, close, closeOnClickOutside, modalContentRef, closeButtonRef]);

  return { isOpen, open, close, toggle };
};