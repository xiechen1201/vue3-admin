// 对 cookie 的操作

/**
 * @describe 设置cookie
 * @param {String} key
 * @param {any} value
 *  */
function setCookie(name, value, expires) {
  console.log(getCookie(name))
  document.cookie = `${name}=${value}`;
}

/**
 * @describe 获取 cookie
 * @param {String} key
 *  */
function getCookie(name) {
  const allCookiesArr = document.cookie.split(";");
  let value = "";

  allCookiesArr.forEach((item) => {
    const itemArr = item.trim().split("=");
    itemArr[0] === name ? (value = itemArr[1]) : (value = "");
  });
  return value;
}

export { setCookie, getCookie };
