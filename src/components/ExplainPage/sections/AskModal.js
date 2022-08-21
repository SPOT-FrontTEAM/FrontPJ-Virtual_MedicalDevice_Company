import React from 'react';
import Portal from './../../../Portal';

function AskModal({ title, close }) {
  return (
    <Portal>
      <div className='AskBack'>
        <div className='AskContent' onClick={(e) => e.stopPropagation()}>
          <h2
            style={{
              fontSize: '1.5rem',
              color: '#0a69c8',
              textAlign: 'left',
            }}
          >
            {title}
            <span
              onClick={close}
              style={{ paddingLeft: '450px', color: 'gray', cursor: 'pointer' }}
            >
              ✕
            </span>
          </h2>

          <div className='AskExplain' style={{ fontSize: '1.0rem' }}>
            문의하신 내용에 대한 답변은 메일로 전송되오니, 정확히 입력해주시기
            바랍니다.
          </div>
          <tbody>
            <tr>
              <th>이름</th>
              <td>
                <input
                  type='text'
                  className='inputArea'
                  placeholder='ex) 홍길동 '
                ></input>
              </td>
            </tr>
            <tr>
              <th>휴대폰</th>
              <td>
                <div className='inputWrapper'>
                  <select>
                    <option>010</option>
                    <option>011</option>
                    <option>016</option>
                    <option>017</option>
                    <option>018</option>
                  </select>
                  <span> - </span>
                  <input className='input' type={'text'}></input>
                  <span> - </span>
                  <input className='input' type={'text'}></input>
                </div>
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>
                <input className='input' type={'text'}></input>
                <span> @ </span>
                <input className='input' type={'text'}></input>
                <span> </span>
                <select>
                  <option>naver.com</option>
                  <option>gamil.com</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>제목</th>
              <td>
                <input
                  type='text'
                  className='inputArea'
                  placeholder='제목을 입력해주세요.'
                ></input>
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <input
                  type='text'
                  className='inputArea'
                  placeholder='내용을 입력해주세요.'
                ></input>
              </td>
            </tr>
          </tbody>
          <div className='askBnt'>
            <button className='confirmBnt'>확인</button>
            <button className='cancelBnt' onClick={close}>
              취소
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default AskModal;
