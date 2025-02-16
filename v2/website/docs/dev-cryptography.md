---
id: dev-cryptography
title: Cryptography
---
## Get Mixcore Api Key
- Go to "[host]/portal/app-settings/details"
  
  ![img.png](https://gcdnb.pbrd.co/images/l2y4o9vFdzYE.png?o=1)

  - Combined Key : used for calling api to encrypt / decrypt message
  - Key: AES key
  - IV: AES IV

## AES encryption:
- Padding: PaddingMode.PKCS7
- Mode: CipherMode.CBC

  
