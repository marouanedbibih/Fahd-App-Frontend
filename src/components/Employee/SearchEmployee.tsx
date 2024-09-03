import React from "react";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchEmployees } from "@/hooks/EmployeeHooks"; // Update with actual path

interface SearchEmployeeProps {}

export const SearchEmployee: React.FC<SearchEmployeeProps> = () => {
  // Search employee Hooks
  const { setFetching, pagination, setSearchKeyword } = useSearchEmployees();

  // On search employee
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    pagination.initPagination();
    if (e.target.value !== "") {
      setFetching({ normal: false, filter: false, search: true });
      setSearchKeyword(e.target.value);
    } else {
      setFetching({ normal: true, filter: false, search: false });
      setSearchKeyword("");
    }
  };

  return (
    <div className="w-full md:w-72">
      <Input
        label="Search"
        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        onChange={onSearch}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
    </div>
  );
};
