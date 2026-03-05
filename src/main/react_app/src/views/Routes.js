import React from "react";
import Detail_1 from "./Detail_1";
import Detail_2 from "./Detail_2";
import { Routes as RouterRoutes, Route } from "react-router-dom";

export default class Routes extends React.Component {
  render() {
    return (
      <RouterRoutes>
        {/* react-router-dom v6에서는 'element' prop을 사용하고, path는 기본적으로 정확히 일치(exact)합니다. */}
        <Route path="/d2" element={<Detail_1 />} />
        <Route path="/d1" element={<Detail_2 />} />
        {/* path="*"는 위에서 정의하지 않은 모든 경로를 잡습니다 (404 처리) */}
        <Route path="*" element={<div>404 Not Found: 페이지를 찾을 수 없습니다.</div>} />
      </RouterRoutes>
    );
  }
}
