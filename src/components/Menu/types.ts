import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface Item {
  id: number | string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  link?: string;
  onClick?: () => void;
}

export interface MenuProps {
  header: {
    title: string;
    logo: string;
    primaryItems: Item[];
  };
  footer?: {
    footerText: string;
    secondaryItems: Item[];
  };
  mobileConfig?: {
    mobileItems: Item[];
    navItems: Item[];
  };
}

export interface MenuItemProps {
  item: Item;
}

export interface MenuMobileProps {
  navItems: Item[];
  mobileItems: Item[];
}
