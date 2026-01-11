import { DownOutlined } from "@ant-design/icons";
import { Input, Dropdown, message, Space } from "antd";
import { Register } from "./Register";
import { Login } from "./Login";
import { useModal } from "../../hooks/modal";


// tab每一项的接口定义
interface HeaderItemProps {
  href: string;
  title?: string;
  children?: React.ReactNode;
}

// 高阶组件（组件为参数，返回组件）
function HeaderItem(props: HeaderItemProps) {
  return (
    <a href={props.href} className="c-#4f555d hover:c-#F38E48">
      {props.children ?? props.title}
    </a>
  );
}

// 头部导航组件
export default function Header() {
  const { switchRegVisible, switchLoginVisible } = useModal();
  const { logout, currentUser, isLogin } = useUser();
  // tab项的数据
  const list = [
    {
      title: "首页",
      href: "#",
    },
    {
      title: "课程中心",
      href: "#",
    },
    {
      href: "#",
      children: (
        <div className="flex items-center justify-center">
          <img
            src="https://front.cdn.xdclass.net/images/vip_icon.webp"
            className="w-22px h20px"
          />
          <span>超级会员</span>
        </div>
      ),
    },
    {
      title: "工具",
      href: "#",
    },
    {
      title: "自学路线",
      href: "#",
      children: (
        <>
          <span>自学路线</span>
          <DownOutlined />
        </>
      ),
    },
    {
      title: "一对一辅导",
      href: "#",
      children: (
        <>
          <span>一对一辅导</span>
          <DownOutlined />
        </>
      ),
    },
    {
      href: "#",
      children: (
        <Input.Search placeholder="请输入搜索内容" className="w-220px" />
      ),
    },
    {
      title: "兑换码",
      href: "#",
    },
    {
      title: "云服务器",
      href: "#",
    },
  ];
  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            message.success("退出成功");
            logout();
          }}
        >
          退出登录
        </div>
      ),
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {/* 官网的图标 */}
      <img
        src="https://front.cdn.xdclass.net/images/logo.webp"
        className="w-138px h-64px"
      />
      {/* tab导航项 */}
      <div className="flex items-center justify-between flex-[1]">
        {list.map((item, index) => (
          <HeaderItem key={index} href={item.href} title={item.title}>
            {item?.children}
          </HeaderItem>
        ))}
      </div>
      {/* 注册登录 */}
      {/* switchRegVisible是个函数，调用后，会改变regVisible变量，另外会Register将显示*/}
      {/* 注册登录 */}
      {isLogin ? (
        <Dropdown menu={{ items }} placement="bottomLeft">
          <div>欢迎您，{currentUser}</div>
        </Dropdown>
      ) : (
        <div className="flex items-center justify-center gap-4 children:cursor-pointer">
          <span onClick={switchLoginVisible}>登录</span>
          <span
            onClick={switchRegVisible}
            className="bg-#4d555d c-#fff h-30px leading-26px w-60px p-2px text-center"
          >
            注册
          </span>
        </div>
      )}
      <Register />
      <Login />
    </div>
    
  );
}
