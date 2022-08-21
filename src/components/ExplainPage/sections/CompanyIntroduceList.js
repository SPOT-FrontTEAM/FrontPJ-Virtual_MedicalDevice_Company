import React from 'react';

const CompanyIntroduceList = ({ check }) => {
  return (
    <div>
      <div className='introduce-list'>
        <ul>
          <li className={`${check === '1' && 'on'}`}>
            <a href='companyintroduce' className={`${check === '1' && 'on1'}`}>
              기업개요
            </a>
          </li>
          <li className={`${check === '2' && 'on'}`}>
            <a href='history ' className={`${check === '2' && 'on1'}`}>
              연혁
            </a>
          </li>
          <li className={`${check === '3' && 'on'}`}>
            <a href='ideology' className={`${check === '3' && 'on1'}`}>
              경영이념 및 핵심가치
            </a>
          </li>
          <li className={`${check === '4' && 'on'}`}>
            <a href='management' className={`${check === '4' && 'on1'}`}>
              준법경영
            </a>
          </li>
          <li className={`${check === '5' && 'on'}`}>
            <a href='strategy' className={`${check === '5' && 'on1'}`}>
              지속가능경영
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyIntroduceList;
