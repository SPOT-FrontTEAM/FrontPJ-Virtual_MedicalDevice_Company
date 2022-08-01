import React,{useEffect,useState} from 'react'
import "./sections/Nav.css"
import "./sections/SubBar"
import SubBar from './sections/SubBar';

const Nav = () => {

  // 스크롤
  const [scrollPosition, setScrollPosition] = useState(0);
     
     useEffect(() => {
       window.addEventListener('scroll', handleScroll, { capture: true }); // 스크롤 이벤트 등록
       return () => {
         window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 등록 제거(성능저하방지)
       };
     }, []);

     const handleScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop); // 스크롤 현재 위치 
  }
 
  // // subbar
  // const onMouseOverHandler= () => {
  //     console.log("회사소개");
  //     <SubBar />
  // } 

  return (
    // 스크롤 head높이(30)보다 클때 nav보이게
    <div className={scrollPosition > 30 ? "navPage-true" : "navPage-false"}> 
      <div className='navPage_Set'>
        <img alt="Logo" src="images/Logo1.png" />
      </div>
      <div className='navPage_Set-list'>
        <ul className='navPage_Set-listitems'>
          <li >
          <a href="company">회사소개</a>
          <div className='subBar_Set'>
            <ul className='subBar_Set-list'>
              <li><a href="company">소개</a></li>
              <li><a href="company">오시는길</a></li>
              <li><a href="company">문의하기</a></li>
            </ul>
            </div>
          </li>
         
          <li >
          <a href="ir">IR</a>
          <div className='subBar_Set'>
            <ul className='subBar_Set-list'>
              <li><a href="ir">경영정보</a></li>
              <li><a href="ir">주주 공지사항</a></li>
            </ul>
            </div>
          </li>

          <li >
          <a href="recruit">인재채용</a>
          <div className='subBar_Set'>
              <ul className='subBar_Set-list'>
                <li><a href="recruit">인재상</a></li>
                <li><a href="recruit">인사정책</a></li>
                <li><a href="recruit">인재육성</a></li>
                <li><a href="recruit">복리후생</a></li>
                <li><a href="recruit">채용공고</a></li>
              </ul>
              </div>
           </li>
        </ul>
      </div>
        <button className={scrollPosition > 30 ? 'navPage_siteMap-bnt': 'false'}>SITEMAP</button>
    </div>
  );
};

export default Nav;
