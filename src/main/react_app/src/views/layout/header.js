import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
function Header() {
    return (
            <header className='header'>
                <div className='contents'>
                    <div>
                        로고
                    </div>
                    <nav className='navigation'>
                        <ul>
                            <li><Link to="/d1">메뉴1</Link></li>
                            <li><Link to="/d2">메뉴2</Link></li>
                            <li><Link to="/">홈으로</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
    )
}
export default Header;
/*
react-router-dom v6에서는 'element' prop을 사용하고, path는 기본적으로 정확히 일치(exact)합니다.
path="*"는 위에서 정의하지 않은 모든 경로를 잡습니다 (404 처리)
<RouterRoutes>
        <Route path="/d2" element={<Detail_1 />} />
        <Route path="/d1" element={<Detail_2 />} />
        <Route path="*" element={<div>404 Not Found: 페이지를 찾을 수 없습니다.</div>} />
      </RouterRoutes>
*/