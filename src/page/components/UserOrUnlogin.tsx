import { useUser } from "../../hooks/user";

// 登录样式组件
function UserProfile() {
  const { currentUser, logout } = useUser();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      欢迎你 <span className="text-orange font-bold">{currentUser}</span>
      <button
        className="text-center text-white bg-#ff602a cursor-pointer rounded-71px w-130px h-24px text-12px p2 leading-10px"
        onClick={logout}
      >
        退出登录
      </button>
    </div>
  );
}

// 未登录样式组件
function Unlogin() {
  const { switchLoginVisible } = useModal();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        className="cursor-pointer mb-1 mt--10 w-140px h-176px"
        src="https://front.cdn.xdclass.net/images/new.webp"
      />
      <button
        onClick={switchLoginVisible}
        className="text-center text-white bg-#ff602a cursor-pointer rounded-71px w-130px h-24px text-12px p2 leading-10px"
      >
        登录 / 注册
      </button>
    </div>
  );
}

// 欢迎组件
export default function UserProfileOrUnlogin() {
  const { isLogin } = useUser();
  return (
    <div className="w-180px h-400px rounded shadow-[0_0_10px_0_#d7d7d7]">
      {isLogin ? <UserProfile /> : <Unlogin />}
    </div>
  );
}
