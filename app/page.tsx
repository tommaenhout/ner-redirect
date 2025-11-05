import ThankYou from "@/components/ThankYou";
import Redirect from "@/components/Redirect";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5EFDE] text-[#4B3A33] px-6 py-24">
      <ThankYou />
      <Redirect />
    </div>
  );
}
