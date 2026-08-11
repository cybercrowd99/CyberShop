/**
 * CyberShop → NET → OrganSpine Attachment
 *
 * Receives the CyberShop → NET organ spine integration
 * and attaches it into the OrganSpine.
 *
 * Structural only. No identity, doctrine, authority, or behavior.
 */

import { integrateCyberShopNetOrganSpine } from "./integrate-cybershop-net-organ-spine";
import type { CyberShopOperationalStateOrganParticipation } from "./cybershop-operational-state-organ-participation";
import type { OrganSpineAttachment } from "./organ-spine-types";

export function attachCyberShopNetOrganSpine(
  participation: CyberShopOperationalStateOrganParticipation,
): OrganSpineAttachment {
  const { attachment, acceptance, handoff } =
    integrateCyberShopNetOrganSpine(participation);

  return {
    organ: "CyberShop",
    attachment,
    acceptance,
    handoff,
  };
}
