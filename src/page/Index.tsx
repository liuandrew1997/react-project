import { Button } from 'antd'
import Header from './components/Header';

export default function Index() {
  return (
  <>
  <div className='w-full' of-hidden>
    {/* 海报图 */}
    <img src='https://file.xdclass.net/video/2023/banner/618/QD.gif' alt=''
    className='w-100% h-full'></img>
    {/* 头部导航 */}
    <div className='shadow mb-10px'>
      <div className='w-1200px mx-auto'>
        <Header></Header>
      </div>

    </div>
  </div>
  test
  </>
  );
}