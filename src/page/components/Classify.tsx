import { CaretRightOutlined } from "@ant-design/icons";

// 每项的样式
function ClassifyItem(props: { children: string }) {
  return (
    <li className="relative w-full cursor-pointer text-16px leading-54px pl-19px hover:bg-#3b4248 hover:text-white">
      <span>{props.children}</span>
      <div className="absolute top-0 right-3 text-#a0a0a0 text-13px">
        <CaretRightOutlined />
      </div>
    </li>
  );
}

// 分类导航组件
export default function Classify() {
  const list = [
    "后端 | 架构",
    "前端 | 全栈",
    "前端 | 全栈",
    "前端 | 全栈",
    "前端 | 全栈",
    "前端 | 全栈",
    "前端 | 全栈",
  ];
  return (
    <div className="rounded shadow-[0_0_10px_0_#d7d7d7] h-400px w-160px">
      <ul className="py-10px">
        {list.map((item, index) => (
          <ClassifyItem key={index}>{item}</ClassifyItem>
        ))}
      </ul>
    </div>
  );
}
