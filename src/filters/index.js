/**
 * @param {number} time
 */
export function timeAgo(time) {
    const between = Date.now() / 1000 - Number(time)
    if (between < 3600) {
      return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' hour')
    } else {
      return pluralize(~~(between / 86400), ' day')
    }
  }
  
  /**
   * Number formatting
   * like 10000 => 10k
   * @param {number} num
   * @param {number} digits
   */
  export function numberFormatter(num, digits) {
    const si = [
      { value: 1E18, symbol: 'E' },
      { value: 1E15, symbol: 'P' },
      { value: 1E12, symbol: 'T' },
      { value: 1E9, symbol: 'G' },
      { value: 1E6, symbol: 'M' },
      { value: 1E3, symbol: 'k' }
    ]
    for (let i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
      }
    }
    return num.toString()
  }
  
  /**
   * 10000 => "10,000"
   * @param {number} num
   */
  export function toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
  }
  
  /**
   * Upper case first char
   * @param {String} string
   */
  export function uppercaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  
  // 时间格式化
  export function formatDates (date, fmt) {
    let newDate = new Date(date)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': newDate.getMonth() + 1,
      'd+': newDate.getDate(),
      'h+': newDate.getHours(),
      'm+': newDate.getMinutes(),
      's+': newDate.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
      }
    }
    return fmt
  }