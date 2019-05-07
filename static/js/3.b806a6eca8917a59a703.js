webpackJsonp([3,62],{371:function(n,t){n.exports={rawContent:"\n# Bot Emulator快速开始\n\n## setup project\n\n```\nnpm install -g yo\nnpm install -g generator-botbuilder\nyo botbuilder\n```\n\n## create luis.ai service\n\n* Learn [bot file](https://github.com/Microsoft/botbuilder-tools/blob/master/packages/MSBot/docs/bot-file.md)\n\n* Learn [bot adapter](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0&tabs=cs)\n\n\n* Install azure [cli](https://github.com/Azure/azure-cli)\n```\nsource ~/venv-py3/bin/activate\npip install --pre azure-cli --extra-index-url https://azurecliprod.blob.core.windows.net/edge\n```\n\n* Login Azure Cli\n```\naz login\n```\n\n* Install cli tools\n\n```\nnpm i -g msbot luis-apis ludown\n```\n\n* Get Luis Authoring Key\n\n```\nLogin : https://www.luis.ai/home\nNavigate to : https://www.luis.ai/user/settings\n\n```\n\n* Get AZURE SUBSCRIPTION ID\n\n![](https://user-images.githubusercontent.com/3538629/46511308-6e7f3680-c880-11e8-9d0d-0adc6bee0bea.png)\n\n* Parse LUIS.ai Model\n\n```\ncd $baseDir/../myJsBots\nludown parse toluis \\\n    --in dialogs/greeting/resources/main.lu \\\n    -o cognitiveModels/ \\\n    --out basicBot.luis \\\n    -n 'myJsBots_myChatBot-LUIS' \\\n    -d 'Bot Builder V4 Basic Bot.' --verbose\n```\n\n* Deploy LUIS.ai Service\n\n```\nluis import application \\\n    --in cognitiveModels/basicBot.luis \\\n    --authoringKey $LUIS_KEY \\\n    --msbot --endpointRegion | msbot --secret $MSBOT_SECRET connect luis --stdin\n```\n\n\n* Train LUIS.ai Service\n\n```\nmsbot get myJsBots_myChatBot-LUIS --secret $MSBOT_SECRET | luis train version --wait --stdin\n```\n\n* Publish LUIS.ai Service\n\n```\nmsbot get myJsBots_myChatBot-LUIS --secret $MSBOT_SECRET | luis publish version --wait --stdin\n```\n\n## Start project\n\n```\ncd myJsBots\nnpm start\n```\n\n## Connect with Botframework Emulator\n\n![image](https://user-images.githubusercontent.com/3538629/46524922-d5badc00-c8bc-11e8-9a90-7e84e19e038c.png)\n\n\n# references\n\n[mstechsummit-workshop](https://github.com/Samurais/mstechsummit-workshop)\n\n[Create a bot with the Bot Builder SDK for JavaScript](https://docs.microsoft.com/en-us/azure/bot-service/javascript/bot-builder-javascript-quickstart?view=azure-bot-service-4.0)\n\n# troubles\n\n1. [msbot] can not clone service [#632](https://github.com/Microsoft/botbuilder-tools/issues/632)\n```\n~/.nvm/versions/node/v8.10.0/lib/node_modules/msbot/bin/msbot-clone-services.js\n```\n\n2. [azure-cli] does not work with bot service\n\n```\nInstall edge build from https://github.com/Azure/azure-cli\n```\n\n\n",metaData:{layout:"post",title:"Bot Emulator快速开始",excerpt:"微软Botframework中快速开发聊天机器人的桌面工具。",category:"development",tags:["bot","microsoft"],disqus:!0}}}});