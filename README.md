# Wallet Verifier/Relying Party implementation

Based on EU reference implementation commit ed805682160035060cdcd2f7e1cb3f4ab9603bab

See https://github.com/eu-digital-identity-wallet/eudi-web-verifier/commit/ed805682160035060cdcd2f7e1cb3f4ab9603bab

# Changes made in phase 2:
- Change default wallet client scheme
- Adapt to new sd-jwt vc dm model of german pid fields
- Add presenation requests for msidn, mdoc and email credentials
- Additionally use vct filter for selecting sd-jwt doctypes
- Add support for displaying multiple credentials
- Rework ui
- 

# Changes made in phase 1:

- Improved general SD-JWT support
- Added presentation definitions for SD-JWT VC and authenticated channel variants of SD-JWT VC and mdoc
- Added selection of different variants in overview
- Improved field selection by adding new fields and switch for mdoc, SD-JWT VC and authenticated channel
- AUTHADA branding
- Improved responsive design
