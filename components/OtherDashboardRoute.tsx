// components
import ComponentPlaceholder from "../ui/ComponentPlaceholder";
import ToastDemo from "../ui/ToastDemo";

function OtherDashboardRoute() {
  return (
    <ComponentPlaceholder
      width="100%"
      height="100%"
      textColor="text-green-900"
      backgroundColor="bg-green-200"
    >
      <div className="flex flex-col gap-3 max-w-96 items-center">
        <h1 className="text-3xl font-bold  text-center">
          Hey! this is other dashboard
        </h1>

        <h2 className="text-xl text-center font-semibold">
          But, you can still try my Toasts! 😊
        </h2>
        <ToastDemo />
      </div>
    </ComponentPlaceholder>
  );
}

export default OtherDashboardRoute;
