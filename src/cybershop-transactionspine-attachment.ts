/**
 * CyberShop → TransactionSpine Attachment
 *
 * Connects the completed CyberShop OrganSpine attachment
 * to the TransactionSpine.
 *
 * Structural only. No identity, doctrine, authority, or behavior.
 */

import type { OrganSpineAttachment } from "./organ-spine-types";

export interface CyberShopTransactionSpineAttachment {
  readonly organ: "CyberShop";
  readonly transactionSpine: "TransactionSpine";
  readonly organSpine: OrganSpineAttachment;
}

export function attachCyberShopToTransactionSpine(
  organSpine: OrganSpineAttachment,
): CyberShopTransactionSpineAttachment {
  return {
    organ: "CyberShop",
    transactionSpine: "TransactionSpine",
    organSpine,
  };
}
