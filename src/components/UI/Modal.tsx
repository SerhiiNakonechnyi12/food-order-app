import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

type ModalProps = PropsWithChildren<
  ComponentPropsWithoutRef<'dialog'> & { open: boolean }
>;

export default function Modal({
  children,
  open,
  onClose,
  className = '',
}: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (!modal) {
      return;
    }

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')!,
  );
}
