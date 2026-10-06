# integrations/

Adapters to external systems. Each adapter implements a port defined in
`platform/integration-hub/contracts` so a module never talks to a vendor API directly.

Swap rule: replacing SBIePay with another gateway means adding a new adapter here and
changing config, not changing `modules/finance-operations/fees-accounts`.

| Adapter | External system |
|---|---|
| [payment-sbiepay](payment-sbiepay/) | SBIePay payment gateway adapter (initiate, callback, reconcile). |
| [digilocker](digilocker/) | DigiLocker adapter for issuing and verifying academic certificates. |
| [nad](nad/) | National Academic Depository adapter for academic records. |
| [government-portals](government-portals/) | UGC, AISHE, NAAC and similar government reporting portals. |
| [messaging-providers](messaging-providers/) | Email, SMS and WhatsApp provider adapters. |
| [video-conferencing](video-conferencing/) | Zoom, Teams and Webex adapters for online classes and meetings. |
| [wearables](wearables/) | Fitness and wearable device APIs for athlete data. |
| [external-university-portals](external-university-portals/) | Other university and inter-institution portal adapters. |
