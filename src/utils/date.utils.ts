export default class DateUtils {

  public static isDate(date: any) {
    return date instanceof Date && !isNaN(date.valueOf());
  }

  public static dateToUnix(date: any) {
    return Math.floor(date / 1000);
  }

}
