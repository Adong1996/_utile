function stopBubble(e) {
  if (e && e.stopPropagation) {
      e.stopPropagation();
  } else {
      window.event.cancelBubble = true;
  }
}