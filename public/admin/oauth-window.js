// Only adapt Decap's OAuth window; preserve opener for its secure handshake.
(() => {
  const openWindow = window.open.bind(window);
  window.open = function(url, target, features) {
    if (target !== 'Netlify Authorization') return openWindow(url, target, features);
    const authUrl = new URL(url, location.href);
    if (authUrl.origin !== location.origin || authUrl.pathname !== '/api/auth') {
      throw new Error('Unexpected CMS authentication URL');
    }
    // A fresh tab avoids reusing Decap's named popup and popup window features.
    const authWindow = openWindow('about:blank', '_blank');
    if (!authWindow) {
      alert('로그인 창을 열지 못했습니다. 이 사이트의 팝업을 허용하고 다시 시도해 주세요.');
      return {focus(){}, close(){}, postMessage(){}};
    }
    authWindow.location.href = authUrl.href;
    return authWindow;
  };
})();