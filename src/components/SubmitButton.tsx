import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full
        bg-gray-900 outline-none transition-all text-white focus:scale-110
        hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white
        dark:bg-opacity-10"
      type="submit"
    >
      Submit{" "}
      <FaPaperPlane
        className="text-xs opacity-70 transition-all group-hover:translate-x-1
          group-hover:-translate-y-1"
      />
    </button>
  );
}
