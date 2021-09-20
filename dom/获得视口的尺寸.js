function getViewportOffset() {
  if (window.innerWidth) {
      return {
          w: window.innerWidth,
          h: window.innerHeight
      }
  } else {
      // ie8及其以下
      if (document.compatMode === "BackCompat") {
          // 怪异模式
          return {
              w: document.body.clientWidth,
              h: document.body.clientHeight
          }
      } else {
          // 标准模式
          return {
              w: document.documentElement.clientWidth,
              h: document.documentElement.clientHeight
          }
      }
  }
}