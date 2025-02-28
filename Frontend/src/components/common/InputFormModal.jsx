import React from 'react'
import { useSelector } from 'react-redux'
import UploadInternship from '../core/Form/Admin/UploadInternship';
import UploadPlacement from '../core/Form/Admin/UploadPlacement'
import UploadGATE from '../core/Form/Admin/UploadGATE'
import UploadCAT from '../core/Form/Admin/UploadCAT'
import UploadNPTEL from '../core/Form/Admin/UploadNPTEL'
import UploadResearchPaper from '../core/Form/Admin/UploadPlacement'
import UploadMidSemData from '../core/Form/Faculty/UploadMidSemData';

export default function InputModal({ actionId, action }) {
  const fetching = useSelector(store => store.fetching);

  switch (actionId) {
    case 'uploadInternship':
      return (
        <div >
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gray-800 text-black p-0 ">

              <div class="relative  w-full  max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-4">

                  {/* Close btn */}
                  <button
                    type="button"
                    disabled={fetching}
                    onClick={() => document.getElementById('my_modal_1').close()}
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white disabled:cursor-not-allowed" data-modal-hide="popup-modal">

                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>

                    <span class="sr-only">Close modal</span>

                  </button>

                  <UploadInternship action={action} />
                </div>
              </div>

            </div>

          </dialog>
        </div>
      )
    case 'uploadResearchPaper':
      return (
        <div >
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gray-800 text-black p-0 ">

              <div class="relative  w-full  max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-4">

                  {/* Close btn */}
                  <button
                    type="button"
                    disabled={fetching}
                    onClick={() => document.getElementById('my_modal_1').close()}
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white disabled:cursor-not-allowed" data-modal-hide="popup-modal">

                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>

                    <span class="sr-only">Close modal</span>

                  </button>

                  <UploadResearchPaper action={action} />
                </div>
              </div>

            </div>

          </dialog>
        </div>
      )
    case 'uploadNPTEL':
      return (
        <div >
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gray-800 text-black p-0 ">

              <div class="relative  w-full  max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-4">

                  {/* Close btn */}
                  <button
                    type="button"
                    disabled={fetching}
                    onClick={() => document.getElementById('my_modal_1').close()}
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white disabled:cursor-not-allowed" data-modal-hide="popup-modal">

                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>

                    <span class="sr-only">Close modal</span>

                  </button>

                  <UploadNPTEL action={action} />
                </div>
              </div>

            </div>

          </dialog>
        </div>
      )
    case 'uploadGATE':
      return (
        <div >
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gray-800 text-black p-0 ">

              <div class="relative  w-full  max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-4">

                  {/* Close btn */}
                  <button
                    type="button"
                    disabled={fetching}
                    onClick={() => document.getElementById('my_modal_1').close()}
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white disabled:cursor-not-allowed" data-modal-hide="popup-modal">

                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>

                    <span class="sr-only">Close modal</span>

                  </button>

                  <UploadGATE action={action} />
                </div>
              </div>

            </div>

          </dialog>
        </div>
      )
    case 'uploadCAT':
      return (
        <div >
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gray-800 text-black p-0 ">

              <div class="relative  w-full  max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-4">

                  {/* Close btn */}
                  <button
                    type="button"
                    disabled={fetching}
                    onClick={() => document.getElementById('my_modal_1').close()}
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white disabled:cursor-not-allowed" data-modal-hide="popup-modal">

                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>

                    <span class="sr-only">Close modal</span>

                  </button>

                  <UploadCAT action={action} />
                </div>
              </div>

            </div>

          </dialog>
        </div>
      )
    case 'uploadPlacement':
      return (
        <div >
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gray-800 text-black p-0 ">

              <div class="relative  w-full  max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-4">

                  {/* Close btn */}
                  <button
                    type="button"
                    disabled={fetching}
                    onClick={() => document.getElementById('my_modal_1').close()}
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white disabled:cursor-not-allowed" data-modal-hide="popup-modal">

                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>

                    <span class="sr-only">Close modal</span>

                  </button>

                  <UploadPlacement action={action} />
                </div>
              </div>

            </div>

          </dialog>
        </div>
      )
    case 'uploadMidSem':
        return (
          <div >
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-gray-800 text-black p-0 ">
  
                <div class="relative  w-full  max-h-full">
                  <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-4">
  
                    {/* Close btn */}
                    <button
                      type="button"
                      disabled={fetching}
                      onClick={() => document.getElementById('my_modal_1').close()}
                      class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white disabled:cursor-not-allowed" data-modal-hide="popup-modal">
  
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
  
                      <span class="sr-only">Close modal</span>
  
                    </button>
  
                    <UploadMidSemData action={action} />
                  </div>
                </div>
  
              </div>
  
            </dialog>
          </div>
        )
    default: 
      return <p>No operation applied!</p>
  }


}
