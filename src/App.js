import MUIAutocomplete from "./components/MUIAutocomplete";
import MUIButtons from "./components/MUIButtons";
import MUICheckBox from "./components/MUICheckBox";
import MUILayout from "./components/MUILayout";
import MUIRadioButton from "./components/MUIRadioButton";
import MUIRating from "./components/MUIRating";
import MUISelect from "./components/MUISelect";
import MUISwitch from "./components/MUISwitch";
import MUITextField from "./components/MUITextField";
import MUITypography from "./components/MUITypography";
import "./App.css";
import MUIcard from "./components/MUIcard";
import MUIAccordion from "./components/MUIAccordion";
import MUIImageList from "./components/MUIImageList";
import MUINavbar from "./components/MUINavbar";
import MUILink from "./components/MUILink";
import MUIBreadCrumbes from "./components/MUIBreadCrumbes";
import MUIDrawer from "./components/MUIDrawer";
import MUISpeedDial from "./components/MUISpeedDial";
import MUIBottomNavigation from "./components/MUIBottomNavigation";
import MUIAvatar from "./components/MUIAvatar";
import MUIBadge from "./components/MUIBadge";
import MUIList from "./components/MUIList";
import MUIChip from "./components/MUIChip";
import MUITooltip from "./components/MUITooltip";
import MUITable from "./components/MUITable";
import MUIAlert from "./components/MUIAlert";
import MUISnackBar from "./components/MUISnackBar";
import MUIDialog from "./components/MUIDialog";
import MUIProgress from "./components/MUIProgress";
import MUISkeleton from "./components/MUISkeleton";
import MUILoadingButton from "./components/MUILoadingButton";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MUIPicker from "./components/MUIPicker";
import MUITabs from "./components/MUITabs";
import MUITimeline from "./components/MUITimeline";
import MUIMasonry from "./components/MUIMasonry";
import MUIResponsiveness from "./components/MUIResponsiveness";

import { colors, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
    },
  },
});
function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    //{/* </LocalizationProvider> */}
    <ThemeProvider theme={theme}>
      <div className="App">
        <MUITypography />
        <MUIButtons />
        <MUITextField />
        <MUISelect />/
        <MUIRadioButton />
        <MUICheckBox />
        <MUISwitch />
        <MUIRating />
        <MUIAutocomplete />
        <MUILayout />
        <MUIcard />
        <MUIAccordion />
        <MUIImageList />
        <MUINavbar />
        <MUIBreadCrumbes />
        <MUILink />
        <MUIDrawer />
        <MUIBottomNavigation />
        <MUISpeedDial />
        <MUIAvatar />
        <MUIBadge />
        <MUIList />
        <MUIChip />
        <MUITooltip />
        <MUITable />
        <MUIAlert />
        <MUISnackBar />
        <MUIDialog />
        <MUIProgress />
        <MUISkeleton />
        <MUILoadingButton />
        <MUIPicker />
        <MUITabs />
        <MUITimeline />
        <MUIMasonry />
        <MUIResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
