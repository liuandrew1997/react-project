import { create } from "zustand";
// 弹窗状态接口定义
interface ModalState {
  regVisible: boolean;
  loginVisible: boolean;
  switchLoginVisible: () => void;
  switchRegVisible: () => void;
}

export const useModal = create<ModalState>(

  (set) => ({
    // 注册弹窗状态
    regVisible: false,
    // 登录弹窗状态
    loginVisible: false,
    // 修改注册弹窗状态
    switchRegVisible: () => set((state) => ({ regVisible: !state.regVisible })),
    // 修改登录弹窗状态
    switchLoginVisible: () => set((state) => ({ loginVisible: !state.loginVisible })),
  })

);
