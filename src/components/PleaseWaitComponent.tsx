import { ClockLoader } from "react-spinners";

export default function PleaseWaitComponent() {
  return (
    <div className="flex h-[300px] justify-center items-center">
      <div className="space-y-4">
        <div className="flex justify-center">
          <ClockLoader color="#F4EEE0" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
          <h3 className="text-lg">Please wait</h3>
        </div>
      </div>
    </div>
  );
}
