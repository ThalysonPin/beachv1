import { useMediaQuery, useTheme } from "@mui/material";

export const useBreakpoints = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between("xs", 500));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));

  return { xs, sm, md, lg, xl };
};
