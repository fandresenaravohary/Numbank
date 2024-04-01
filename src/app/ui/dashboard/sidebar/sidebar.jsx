import React from "react";
import styles from "@/app/ui/dashboard/sidebar/sidebar.module.css";
import {
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Accounts",
        path: "/dashboard/accounts",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Withdrawal",
        path: "/dashboard/withdrawal",
        icon: <MdAttachMoney />,
      },
      {
        title: "Transfers",
        path: "/dashboard/transfer",
        icon: <FaMoneyBillTransfer />,
      },
      {
        title: "Standing Balance",
        path: "/dashboard/balance",
        icon: <MdAccountBalanceWallet />,
      },
      {
        title: "Balance by date",
        path: "/dashboard/balanceByDate",
        icon: <MdAccountBalanceWallet />,
      },
      {
        title: "Account Statement",
        path: "/dashboard/accountStatement",
        icon: <MdAccountBalance />,
      },
    ],
  },
  // {
  //   title: "Analytics",
  //   list: [
  //     {
  //       title: "Revenue",
  //       path: "/dashboard/revenue",
  //       icon: <MdWork />,
  //     },
  //     {
  //       title: "Reports",
  //       path: "/dashboard/reports",
  //       icon: <MdAnalytics />,
  //     },
  //     {
  //       title: "Teams",
  //       path: "/dashboard/teams",
  //       icon: <MdPeople />,
  //     },
  //   ],
  // },
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //     {
  //       title: "Help",
  //       path: "/dashboard/help",
  //       icon: <MdHelpCenter />,
  //     },
  //   ],
  // },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
