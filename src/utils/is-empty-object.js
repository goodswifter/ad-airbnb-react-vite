export function isEmptyO(obj) {
  // '!!' 能够转成布尔类型
  return !!Object.keys(obj).length
}
