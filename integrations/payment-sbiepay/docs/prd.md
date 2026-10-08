# payment-sbiepay: product requirements

Owner: Gokula Lakshmi (@gokulalakshmirooman-source) · Status: draft for review · Issue #66

## Purpose

One adapter between Education OS and the SBIePay payment gateway. Two callers use it:

| Caller | Purpose | Whose money | Merchant account |
|---|---|---|---|
| `platform/billing` | `subscription`: plan upgrade (ARCHITECTURE.md, upgrade flow) | Platform | Platform account from `config/env.example` |
| `fees-accounts` | `fee`: application, tuition, hostel and other fees | The institution | The organisation's own account (`PUT /merchant-account`) |

Callers never talk to SBIePay directly and never see gateway credentials.

## Users

- **Payer** (applicant, student, org admin paying for an upgrade): pays and returns to the page they came from.
- **Finance staff**: sees payments, re-verifies pending ones, refunds, reconciles settlements
  (Finance Staff dashboard widget `payment-sbiepay.reconciliation`).
- **Org admin**: sets the institution's merchant account.

## Flow

1. Caller `POST /payments` with purpose, its own `source_reference`, amount, `return_url` and optional `notify_url`.
   Adapter returns `{reference, payment_url, expires_at}`. This matches billing's `/subscription/upgrade` response.
2. Browser opens `payment_url`; the adapter posts the encrypted request to SBIePay.
3. SBIePay returns the browser to `POST /callbacks/sbiepay` with an encrypted response.
4. The adapter decrypts it and **confirms it by double verification** before trusting it, records the result,
   publishes `payment-sbiepay.payment.succeeded` or `.failed`, posts a signed `PaymentNotification`
   to `notify_url` when given, and redirects the browser to `return_url`.
5. Payments whose browser never returned are re-verified by a scheduled sweep and become `succeeded`,
   `failed` or `expired`.
6. Daily reconciliation compares the settlement report with recorded payments; mismatches publish
   `payment-sbiepay.reconciliation.mismatch-found`.

## Requirements

- Never mark a payment succeeded from the browser response alone; double verification decides.
- Idempotent: one open payment per `(source_module, source_reference)`; repeated callbacks and
  notifications change nothing after the first final status.
- Amounts are decimal strings in INR; no floating point.
- Refunds: partial or full, total never above the amount paid.
- Every table carries `organisation_id` with row-level security; every event carries `organisation_id`.
- Every state change writes an audit record through `packages/sdk`.
- Encryption keys are stored encrypted, never returned by the API, never logged.
  Request and response payloads are logged only with card and account fields removed.
- `return_url` and `notify_url` must be on hosts in `PAYMENT_SBIEPAY_ALLOWED_RETURN_HOSTS`.

## Out of scope

- Fee structures, invoices and receipts (fees-accounts).
- Plans, subscriptions and invoices for the platform (billing).
- Other gateways; each would be its own adapter implementing the same contract.

## Open questions (for review)

1. integration-hub has no payment port yet. This contract is proposed as that port so other gateway
   adapters can implement the same API. Owner of integration-hub to confirm.
2. billing's `POST /webhooks/payment` has no request body in its contract. This adapter proposes
   `PaymentNotification` (openapi.yaml) as that body. Billing owner to confirm, or to switch billing to
   consuming `payment-sbiepay.payment.succeeded` instead.
3. Exact request and response fields, encryption scheme, double-verification, refund and settlement report
   formats are taken from the SBIePay merchant integration kit, which is to be obtained from SBI along with
   sandbox credentials. None of them change this contract.
4. Who registers an institution's merchant account: the org admin (as proposed) or the super admin.
