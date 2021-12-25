import React from "react";
import {
  Face,
  Newspaper,
  LibraryBooks,
  LocalGroceryStore,
  School,
  LocalTaxi,
  Plumbing
} from "@mui/icons-material";

export function getChipIcon(iconType) {
  switch (iconType) {
    case "NEWS":
      return <Newspaper />;
    case "LIBRARY":
      return <LibraryBooks />;
    case "SHOPS":
      return <LocalGroceryStore />;
    case "SCHOOLS":
      return <School />;
    case "TAXI":
      return <LocalTaxi />;
    case "ELECTRICAN":
      return <Plumbing />;
    default:
      return <Face />;
  }
}
