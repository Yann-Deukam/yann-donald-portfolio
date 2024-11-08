import React from "react";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-violet-600 text-white rounded-lg outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-violet-800 active:scale-105 dark:bg-violet-600 dark:bg-opacity-20 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-lg border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <span className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
            <Send />
          </span>{" "}
        </>
      )}
    </button>
  );
}
