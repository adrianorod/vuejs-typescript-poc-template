export default class ObjectUtils {

  public static groupBy(content: any[], filter: string) {
    return content
      .reduce((r: any, v: any, i: any, a: any, k = v[filter]) => ((r[k] || (r[k] = [])).push(v), r), {});
  }

  public static filterByKey( content: any, keys: any[] ) {
    return keys
      .map(key => ({[key]: content[key]}))
      .reduce((previous, current) => {
        return {
          ...previous,
          ...current
        }
      }, {});
  }

  public static negateFilterByKey( content: any, keys: any[] ) {
    return Object
      .keys(content)
      .filter(key => !keys.includes(key))
      .map(key => ({[key]: content[key]}))
      .reduce((previous, current) => {
        return {
          ...previous,
          ...current
        }
      }, {});
  }

}
