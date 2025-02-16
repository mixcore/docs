---
id: dev-login-workflow
title: Login Workflow
---
## Send Login Request
1. Encrypt Login data:
  ```
  var loginData = {
    "userName": "administrator",
    "password": "P@ssw0rd",
    "rememberMe": true
  }
  var encryptMessage = encryptAES(loginData);  
  ``` 
2. Send Encrypted Message to Login API:
  ```
  curl --location --request POST 'https://localhost:5010/api/v2/rest/mix-account/user/login' \
--data-raw '{
  "message": "[encryptMessage]"
}'
  ```

## Descrypt Login Result:
  ```
  var loginResult = {
    message: "[encryptedString]"
  }

  var result = decryptAES(loginResult.message);
  /*
    sample result:
    {
        "accessToken": "[bearerToken]",
        "tokenType": "Bearer",
        "refreshToken": "9308676e-576f-4b5e-918d-cd47ab92bc38",
        "expiresIn": 20,
        "clientId": null,
        "issued": "2022-05-21T05:34:26.4072738Z",
        "expires": "2022-05-21T05:54:26.4072738Z",
        "deviceId": null,
        "info": {
            "id": "d671874b-8109-4459-a345-de32755e047a",
            "userName": "[username]",
            "email": "[userEmail]",
            "createdDateTime": "2022-05-21T04:00:54.069634",
            "lockoutEnd": null,
            "isActived": false,
            "lastModified": "2022-05-21T04:00:54.0696829",
            "modifiedBy": null,
            "phoneNumber": null,
            "mediaFile": {
                "folderName": null,
                "fileFolder": null,
                "filename": null,
                "extension": null,
                "content": null,
                "fileStream": null,
                "fullPath": "/",
                "webPath": "/"
            },
            "userData": null,
            "roles": [
                {
                    "userId": "d671874b-8109-4459-a345-de32755e047a",
                    "roleId": "32965dd8-723e-498d-8aa6-35e61b0a2e1d",
                    "mixTenantId": 1
                },
                {
                    "userId": "d671874b-8109-4459-a345-de32755e047a",
                    "roleId": "5b960484-777d-4b07-b348-b1194788bde3",
                    "mixTenantId": 1
                }
            ],
            "endpoints": [],
            "resetPassword": null,
            "isChangePassword": false,
            "changePassword": null
        },
        "roles": null,
        "lastUpdateConfiguration": null
    }
  */
  ```

  
