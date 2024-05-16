"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
          <div className="m-auto max-w-80 rounded-xl bg-raisin-black p-8 text-center text-silver dark:bg-silver dark:text-raisin-black md:min-w-96 md:max-w-full md:text-start">
            <div className="flex flex-col items-center gap-6 text-base md:text-xl">
              <h3>Thanks for reaching out, I&apos;ll get back too you soon.</h3>
              <br />
              <Link href={pathname}>
                <button
                  type="button"
                  className="rounded-md bg-wine px-10 pb-2 pt-0 text-raisin-black hover:bg-wine-700 dark:bg-sheen-gold dark:hover:bg-sheen-gold-500 "
                >
                  Close
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
