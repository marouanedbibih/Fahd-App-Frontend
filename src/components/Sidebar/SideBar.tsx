"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  IdentificationIcon,
  BuildingOfficeIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

interface SideBarProps {}

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: PresentationChartBarIcon,
  },
  {
    title: "Employee",
    path: "/employee",
    icon: IdentificationIcon,
  },
  {
    title: "Departement",
    path: "/departement",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Schedule",
    path: "/staff",
    icon: CalendarIcon,
  },
];

export const SideBar: React.FC<SideBarProps> = () => {
  const pathname = usePathname() || "";
  const router = useRouter();

  return (
    <Card
      className="fixed h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl bg-white"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="mb-2 p-4">
        <Typography
          variant="h5"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Fahd App
        </Typography>
      </div>
      <List
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {menuItems.map((item) => (
          <ListItem
            key={item.title}
            className={`hover:bg-blue-gray-50 cursor-pointer ${
              pathname.startsWith(item.path)
                ? "bg-blue-gray-50 font-semibold"
                : ""
            }`}
            onClick={() => router.push(item.path)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <item.icon
                className={`h-5 w-5 ${
                  pathname.startsWith(item.path)
                    ? "text-blue-gray-900"
                    : "text-blue-gray-700"
                }`}
              />
            </ListItemPrefix>
            {item.title}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
