# angular-pwa-tictactoe
Implementation of https://www.youtube.com/watch?v=G0bBLvWXBvc

## Build

```console
ng build --configuration=production
```

## Deploy

### Infrastructure

```console
aws cloudformation deploy --template infrastructure/cloudformation.yaml --stack-name angular-pwa-tictactoe
```

### Application

> Bucket name and CloudFront distribution ID may have changed since the time of writing.

Copy new files to hosting bucket:

```console
aws s3 cp tictactoe/dist/tictactoe s3://angular-pwa-tictactoe-hostingbucket-1svwmiea3jkia/ --recursive
```

Optional: Create an invalidation to remove cached content:

```console
aws cloudfront create-invalidation --distribution-id E37P9PF9DHUVI4 --paths "/*"
```

Note: This may (?) also change the automatically generated domain name!
