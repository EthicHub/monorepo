import interval from "interval-promise";

import { AppContext } from "../../context";

// TODO: Config var?
const PRICING_POLL_INTERVAL = 15 * 1_000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const bindPrices = async (context: AppContext) => {
  // const { logger, config } = context;
  // const { requestContext, methodContext } = createLoggingContext("bindPrices");
  interval(async () => {
    // TODO: Reimplement; needed for handling difference between token pricing on sending and receiving chain.
  }, PRICING_POLL_INTERVAL);
};
