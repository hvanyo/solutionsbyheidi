#!/bin/bash
finalize_deploy () {
  npm run bootstrap -- --ci
  npm run build:packages -- --concurrency 1
  npm run build:env-vars -- --scope=@sites/${APP_SITE_NAME}
  npm run build:doc -- --scope=@sites/${APP_SITE_NAME}
}
