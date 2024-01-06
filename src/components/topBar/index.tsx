import { Icons } from "../icons";
import { Profile } from "./profle";

export const TopBar = () => {
  return (
    <div className="shadow-md fixed w-full bg-background flex flex-col items-start justify-between space-y-2 py-4 px-10 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      {/* <h2 className="text-lg font-semibold">Playground</h2> */}
      <div>
        <Icons.logo className="h-10 w-20" />
      </div>

      <div className="ml-auto flex w-full space-x-2 sm:justify-end">
        <div className="hidden space-x-2 md:flex">
          <Profile />
        </div>
      </div>
    </div>
  );
};
