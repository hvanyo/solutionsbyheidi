#!/bin/bash

finalize_deploy () {
  npm run bootstrap -- --ci
  npm run build:env-vars -- --scope=@sites/${APP_SITE_NAME}
  npm run build:docs -- --scope=@sites/${APP_SITE_NAME}
}
