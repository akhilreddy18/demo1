import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import TableList from "./views/TableList/TableList.js";
import Typography from "./views/Typography/Typography.js";
import Icons from "./views/Icons/Icons.js";
import NotificationsPage from "./views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Your Assessments",
    rtlName: "لوحة القيادة",
    icon: HomeOutlinedIcon,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Your Results",
    rtlName: "ملف تعريفي للمستخدم",
    icon: EqualizerIcon,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: MailOutlineIcon,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Help Center",
    rtlName: "قائمة الجدول",
    icon: HelpOutlineIcon,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Edit profile",
    rtlName: "طباعة",
    icon: PersonOutlineIcon,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Settings",
    rtlName: "الرموز",
    icon: SettingsIcon,
    component: Icons,
    layout: "/admin",
  },
];

export default dashboardRoutes;
