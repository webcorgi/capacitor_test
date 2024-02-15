import { registerPlugin } from '@capacitor/core';
import { EchoWeb } from './echo.web';


/* 키 포인트
    플러그인 등록: 플러그인은 네이티브 측(Java/Swift의 주석 포함)과 웹 측(JavaScript/TypeScript의 registerPlugin 사용) 모두에 등록되어야 합니다.
    메서드 통신: 네이티브 코드에 주석이 달린 메서드는 JavaScript에서 호출될 수 있으므로 웹 앱과 네이티브 플랫폼 기능 간의 비동기 통신이 가능합니다.
    데이터 처리: JavaScript와 Java 간에 전달되는 데이터는 일반적으로 Capacitor에 의해 자동으로 직렬화/역직렬화되므로 복잡한 데이터를 브리지를 통해 쉽게 전송할 수 있습니다.
*/
const Echo = registerPlugin('Echo', {
    web: () => new EchoWeb(),
});

export default Echo;