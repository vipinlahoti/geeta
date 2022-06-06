import type { ReactNode } from "react";
import { Text } from "~/components";

type ModalType = {
  children: ReactNode;
  show: boolean;
  onHide: any;
  title: string;
};

const CloseButton = ({ onHide }: any) => (
  <button
    className="rounded-md text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
    onClick={onHide}
  >
    <span className="sr-only">Close panel</span>
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);

export const Modal = ({ children, show = false, onHide, title }: ModalType) => {
  let headerComponent;
  if (title) {
    headerComponent = (
      <div className="h-16 flex justify-between items-center content-center py-3 px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <Text variant="h6" className="font-serif" noGutter>
          {title}
        </Text>
        <CloseButton onHide={onHide} />
      </div>
    );
  } else {
    headerComponent = (
      <div className="px-4 sm:px-6">
        <CloseButton onHide={onHide} />
      </div>
    );
  }

  return (
    <>
      {show && (
        <section
          className="fixed inset-0 overflow-hidden z-50"
          aria-labelledby={title ? title : "slide-over-title"}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <div className="absolute inset-y-0 right-0 max-w-full flex transform transition-all">
              <div className="relative w-screen max-w-lg">
                <div className="h-full flex flex-col bg-white dark:bg-gray-900 shadow-xl overflow-y-scroll">
                  {headerComponent}
                  <div className="relative p-8 flex-1">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
