import { MouseEvent } from 'react'
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../features/common/modalSlice'
import AddLeadModalBody from '../features/leads/components/AddLeadModalBody'
import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody'
import type { RootState } from '../types'


function ModalLayout(){


    const {isOpen, bodyType, size, extraObject, title} = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()

    const close = (e?: MouseEvent) => {
        dispatch(closeModal(e))
    }



    return(
        <>
        {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>


                {/* Loading modal body according to different modal type */}
                {
                    {
                             [MODAL_BODY_TYPES.LEAD_ADD_NEW] : <AddLeadModalBody closeModal={close} extraObject={extraObject as Record<string, unknown>}/>,
                             [MODAL_BODY_TYPES.CONFIRMATION] : <ConfirmationModalBody extraObject={extraObject as { message: string; type: string }} closeModal={close}/>,
                             [MODAL_BODY_TYPES.USER_DETAIL] : <div></div>,
                             [""] : <div></div>
                    }[bodyType] || <div></div>
                }
            </div>
            </div>
            </>
    )
}

export default ModalLayout
