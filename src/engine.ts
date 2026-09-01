import { config } from "./config.js";
import {
  generateSignal
} from "./strategy.js";

export async function runEngine() {

  /*
   * سيتم ربط هذا الجزء لاحقًا
   * بمصدر بيانات Solana الحقيقي.
   *
   * لا ننفذ أي صفقة حقيقية
   * من هنا حاليًا.
   */

  return {
    status: "SCAN_ONLY",
    liveTrading: config.liveTrading,
    message:
      "Trading engine is running in controlled scan mode."
  };
}
