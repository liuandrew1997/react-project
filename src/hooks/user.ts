import { create } from "zustand";
import { message } from "antd";

// 接口定义
interface UserState {
  isLogin: boolean; // 是否登录
  currentUser: string; // 当前登录用户名称
  // 注册的用户信息
  users: {
    account: string;
    password: string;
  }[];
  // 登录
  login: (account: string, password: string) => void;
  // 退出登录
  logout: () => void;
  // 注册
  register: (account: string, password: string) => void;
}

export const useUser = create<UserState>((set) => ({
  currentUser: localStorage.getItem("xdclass_user_current_user") || "",
  isLogin: localStorage.getItem("xdclass_user_is_login") ? true : false,
  // 用户信息状态
  users: localStorage.getItem("xdclass_react_users")
    ? JSON.parse(localStorage.getItem("xdclass_react_users") || "[]")
    : [],
  // 登录
  login: (account, password) =>
    set((state) => {
      let foundUser = state.users.find(
        (item) => item.account === account && item.password === password
      );
      if (foundUser) {
        localStorage.setItem("xdclass_user_is_login", "true");
        localStorage.setItem("xdclass_user_current_user", foundUser.account);
        message.success("登录成功");
        return {
          isLogin: true,
          currentUser: foundUser.account,
        };
      } else {
        message.warning("账号或者密码错误");
      }
      return {};
    }),
  // 退出登录
  logout: () =>
    set(
      
      () => {
          localStorage.removeItem("xdclass_user_is_login");
          localStorage.removeItem("xdclass_user_current_user");
          return {
            isLogin: false,
            currentUser: "",
          };
    }
  
  ),
  // 注册更新用户信息
  register: (account, password) =>
    set((state) => {
      // 复制原数据
      const users = [...state.users];
      users.push({
        account,
        password,
      });
      // 数据缓存
      localStorage.setItem("xdclass_react_users", JSON.stringify(users));
      localStorage.setItem("xdclass_user_is_login", "true");
      return {
        users,
      };
    }),
}));
