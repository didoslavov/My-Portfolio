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
        <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-raisin-black bg-opacity-50 backdrop-blur">
          <div className="m-auto max-w-80 rounded-xl bg-silver p-8 text-center text-raisin-black dark:bg-raisin-black dark:text-silver md:min-w-96 md:max-w-full md:text-start">
            <div className="flex flex-col items-center gap-6 text-lg md:text-xl">
              <h3>Thanks for reaching out, I&apos;ll get back too you soon.</h3>
              <br />
              <Link href={pathname}>
                <button
                  type="button"
                  className="rounded-md bg-wine px-10 py-2 text-silver hover:bg-wine-700 dark:bg-sheen-gold dark:text-raisin-black dark:hover:bg-sheen-gold-500 "
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
