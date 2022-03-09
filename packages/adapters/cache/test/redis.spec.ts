import { Logger, CrossChainTxStatus, mkBytes32, expect } from "@connext/nxtp-utils";
import { AuctionsCache, TransactionsCache } from "../src/index";
import { StoreChannel, SubscriptionCallback } from "../src/lib/entities";
import { fakeCrossChainTxData, fakeTxId } from "./helpers";

const logger = new Logger({ level: "debug" });
const RedisMock = require("ioredis-mock");
let subscriptions: Map<string, SubscriptionCallback>;
let transactions: TransactionsCache;
let auctions: AuctionsCache;

const secondFakeTxData = { ...fakeCrossChainTxData, originDomain: "4", transactionId: mkBytes32() };

describe("Redis Mocks", () => {
  before(async () => {
    logger.debug(`Subscribing to Channels for Redis Pub/Sub`);
    const RedisSub = new RedisMock();

    RedisSub.subscribe(StoreChannel.NewHighestNonce);
    RedisSub.subscribe(StoreChannel.NewPreparedTx);
    RedisSub.subscribe(StoreChannel.NewStatus);
    RedisSub.subscribe(StoreChannel.NewBid);

    RedisSub.on("message", (chan: any, msg: any) => {
      console.log(`Got Subscribed Message Channel: ${chan as string}, Message Data: ${msg as string}`);
    });

    subscriptions = new Map();
    transactions = new TransactionsCache({ url: "mock", subscriptions: subscriptions, mock: true, logger });
    auctions = new AuctionsCache({ url: "mock", subscriptions: subscriptions, mock: true, logger });
  });

  describe("TransactionsCache", () => {
    describe("#storeStatus", () => {
      it("happy: should store status", async () => {
        const res = await transactions.storeStatus(fakeTxId, CrossChainTxStatus.Prepared);
        // TODO:
        expect(res).to.not.be(undefined);
      });

      it("should store a different domain's status", async () => {
        const res = await transactions.storeStatus(secondFakeTxData.transactionId, CrossChainTxStatus.Prepared);
        // TODO:
        expect(res).to.not.be(undefined);
      });
    });

    describe("#getStatus", () => {
      it("happy: should get status of transaction by ID", async () => {
        const status = await transactions.getStatus(fakeCrossChainTxData.transactionId);
        // TODO:
        expect(status).to.not.be(undefined);
      });

      it("should retrieve different domain's transaction status", async () => {
        const status = await transactions.getStatus(secondFakeTxData.transactionId);
        // TODO:
        expect(status).to.not.be(undefined);
      });
    });

    describe("#storeTxData", () => {
      it("happy: should store transaction data", async () => {
        //add fake txid's status, should fire off event.
        const res = await transactions.storeTxData([fakeCrossChainTxData]);
        // TODO:
        expect(res).to.not.be(undefined);
      });

      it("should store different transaction's data", async () => {
        const res = await transactions.storeTxData([secondFakeTxData]);
        // TODO:
        expect(res).to.not.be(undefined);
      });
    });

    describe("#getLatestNonce", () => {
      it("should get domain's latest nonce according to the cache", async () => {
        await transactions.storeTxData([fakeCrossChainTxData]);
        const latestNonce = await transactions.getLatestNonce("4");
        expect(latestNonce).to.be.equal(fakeCrossChainTxData.nonce);
      });

      it("should get different domain's nonce", async () => {
        await transactions.storeTxData([secondFakeTxData]);
        const latestNonce = await transactions.getLatestNonce("3000");
        expect(latestNonce).to.be.equal(secondFakeTxData.nonce);
      });
    });
  });

  describe("AuctionsCache", () => {
    describe("#storeBid", () => {
      it("should store bid by transaction ID and domain", async () => {
        // needs fake Bid object
        // const latestNonce = await transactions.storeBid(fakeTxId, );
      });
    });

    describe("#updateBid", () => {});

    describe("#getBids", () => {
      it("should get bids by status", async () => {});
    });
  });
});
