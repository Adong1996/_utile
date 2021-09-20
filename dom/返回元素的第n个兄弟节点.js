function retSibling(e, n) {
  while (e && n) {
      if (n > 0) {
          if (e.nextElementSibling) {
              e = e.nextElementSibling;
          } else {
              for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
          }
          n--;
      } else {
          if (e.previousElementSibling) {
              e = e.previousElementSibling;
          } else {
              for (e = e.previousElementSibling; e && e.nodeType !== 1; e = e.previousElementSibling);
          }
          n++;
      }
  }
  return e;
}