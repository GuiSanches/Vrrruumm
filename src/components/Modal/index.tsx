import { useEffect, FC, ReactNode } from 'react'

import { createPortal } from 'react-dom'
import { ModalContainer, ModalContent, ModalShadow, ModalStyles, Wrapper } from './styles';

interface Props {
    idPortal: string;
    setOpen: (open: boolean) => void;
    content: ReactNode
}

const Modal: FC<Props> = ({ idPortal, setOpen, content }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    const handleClose = () => {
        setOpen(false);
    }

    const id = document.getElementById(idPortal)


    return (
        id &&
        createPortal(
            <>
                <ModalShadow onClick={handleClose} />
                <ModalContainer>
                    <ModalStyles>
                        <ModalContent>{content}</ModalContent>
                    </ModalStyles>
                </ModalContainer>
            </>,
            id
        )
    )
}

export default Modal;