import { Input } from "@/components/ui/input";

export const Search = () => {
  return (
    <div className="w-full  space-y-5">
      <h1 className="text-3xl font-bold tracking-tight">
        What will you quiz today ?
      </h1>
      <div className="w-full max-w-3xl">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full px-4  no-focus-outline  h-16"
        />
      </div>
    </div>
  );
};
