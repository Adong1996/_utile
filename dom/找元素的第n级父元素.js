function parents(ele, n) {
  while (ele && n) {
      ele = ele.parentElement ? ele.parentElement : ele.parentNode;
      n--;
  }
  return ele;
}