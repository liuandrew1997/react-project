import { Input } from "antd";
import { DownOutlined } from "@ant-design/icons";

// 接口定义
interface HeaderItemProps {
  href: string;
  title?: string;
  children?: React.ReactNode;
}

// 高阶组件（组件为参数，返回组件）
function HeaderItem(props: HeaderItemProps) {
  return (
    <a className="c-#4f555d hover:c-#F38E48 no-underline" href={props.href}>
      {props.children ?? props.title}
    </a>
  );
}

// 头部导航组件
export default function Header() {
  // 每项tab的配置
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
      title: "超级会员",
      href: "#",
      children: (
        <div className="flex items-center justify-center">
          <img
            className="w-22px h-20px"
            src="https://front.cdn.xdclass.net/images/vip_icon.webp"
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
      title: "搜索",
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

  return (
    <div className="flex items-center gap-2">
      {/* 官网图标 */}
      <img
        className="h-64px w-138px"
        src="https://front.cdn.xdclass.net/images/logo.webp"
      />
      {/* tab导航项 */}
      <div className="flex items-center justify-between flex-[1]">
        {list.map((item) => (
          <HeaderItem key={item.title} title={item.title} href={item.href}>
            {item?.children}
          </HeaderItem>
        ))}
      </div>
      {/* 注册登录 */}
      <div className="flex items-center justify-center gap-4 children:cursor-pointer">
        <span>登录</span>
        <span className="bg-#4d555d c-white h-30px leading-26px w-60px p-2px text-center">
          注册
        </span>
      </div>
    </div>
  );
}