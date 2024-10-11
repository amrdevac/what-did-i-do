import {
  Cottage,
  FormatAlignCenterRounded,
  Grid3x3Outlined,
  GridOffTwoTone,
  GridViewTwoTone,
  TableBarOutlined,
} from "@mui/icons-material";

type MenuItem = {
  icon: JSX.Element | string; // Ikon bisa berupa JSX.Element atau string
  label: string;
  url: string;
};

export const menuItems: MenuItem[] = [
  {
    icon: "",
    label: "Frontend",
    url: "#",
  },
  {
    icon: <GridViewTwoTone className="text-primary" fontSize="inherit" />,
    label: "Basic Table",
    url: "/frontend/basic-table",
  },
  {
    icon: (
      <FormatAlignCenterRounded className="text-primary" fontSize="inherit" />
    ),
    label: "Basic Input",
    url: "/frontend/basic-input",
  },
  {
    icon: <GridViewTwoTone className="text-primary" fontSize="inherit" />,
    label: "Form Validation",
    url: "123",
  },
  {
    icon: "",
    label: "Backend",
    url: "#",
  },
  {
    icon: <GridViewTwoTone className="text-primary" fontSize="inherit" />,
    label: "Confirm Dialog",
    url: "123",
  },
  {
    icon: <GridViewTwoTone className="text-primary" fontSize="inherit" />,
    label: "Basic Table",
    url: "123",
  },
  {
    icon: <GridViewTwoTone className="text-primary" fontSize="inherit" />,
    label: "Basic Form",
    url: "123",
  },
  {
    icon: <GridViewTwoTone className="text-primary" fontSize="inherit" />,
    label: "Form Validation",
    url: "123",
  },
  {
    icon: <GridViewTwoTone className="text-primary" fontSize="inherit" />,
    label: "Confirm Dialog",
    url: "123",
  },
];
