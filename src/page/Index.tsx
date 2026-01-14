import Header from "./components/Header";
import Classify from "./components/Classify";
import Swiper from "./components/Swiper";
import UserProfileOrUnlogin from "./components/UserOrUnlogin";
import EmploymentNav from "./components/EmploymentNav";
import CourseList from "./components/CourseList";

export default function Index() {
  return (
    <>
      <div className="w-full overflow-hidden">
        {/* 海报图 */}
        <img
          src="https://file.xdclass.net/video/2023/banner/618/QD.gif"
          className="w-100% h-full"
        />
        {/* 头部导航 */}
        <div className="shadow mb-10px">
          <div className="w-1200px mx-auto">
            <Header />
          </div>
        </div>
        {/* 主要内容部分 */}
        <div className="w-1200px mx-auto my">
          <div className="flex items-center justify-between">
            {/* 分类导航 */}
            <Classify />
            {/* 轮播图 */}
            <Swiper />
            {/* 新人福利 */}
            <UserProfileOrUnlogin />
          </div>
          {/* 高单价导航 */}
          <EmploymentNav />
          {/* 课程分类列表 */}
          <CourseList />
        </div>
      </div>
    </>
  );
}
