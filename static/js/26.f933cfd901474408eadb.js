webpackJsonp([26,56],{329:function(n,t){n.exports={rawContent:'\n# TL;DR\n\n* 支持格式：wav, silk，最低采样率(16,000)\n\n* 支持语言：简体中文，繁体中文，英语\n\n* 支持口音：普通话，粤语\n\n* Powered by [讯飞开放平台](http://www.xfyun.cn/)\n\n\n# API\nEndpoint [http://stt.chatbot.io/](http://stt.chatbot.io/)\n\n\n* 识别 wav文件\n\n```\ncurl -X POST  \\\n    -F "audiofile=@foo.wav" \\\n    -F data="{\\"lang\\":\\"zh_cn\\", \\"accent\\": \\"mandarin\\", \\"sample_rate\\":16000}" \\\n    http://stt.chatbot.io/api/v1/stt/wav\n```\n\n| 字段 | 介绍 | 可选项 |\n| --- | --- | --- |\n| lang | 语音文件的语言 | zh\\_cn(简体中文), zh\\_tw(繁体中文), en_us(英语) | \n| accent | 口音 | mandarin(普通话), cantonese(粤语) | \n| sample_rate | 采样率 | 推荐采样率16,000 | \n| audio_file | 文件所在位置 | 以 .wav结尾，单声道文件 |\n\n* 识别 silk文件\n\n```\ncurl -X POST  \\\n    -F "audiofile=@foo.wav" \\\n    -F data="{\\"lang\\":\\"zh_cn\\", \\"accent\\": \\"mandarin\\", \\"sample_rate\\":16000}" \\\n    http://stt.chatbot.io/api/v1/stt/silk\n```\n\n| 字段 | 介绍 | 可选项 |\n| --- | --- | --- |\n| lang | 语音文件的语言 | zh\\_cn(简体中文), zh\\_tw(繁体中文), en_us(英语) | \n| accent | 口音 | mandarin(普通话), cantonese(粤语) | \n| sample_rate | 采样率 | 推荐采样率16,000 | \n| audio_file | 文件所在位置 | 以 .silk结尾，单声道文件 |\n\n## 格式转化工具推荐\n\n* mp3 转 wav\n\n```\nsox -t mp3 -r $sampleRate -c 1 $filePath  -r 16000 -t wav $filePath.wav\n```\n\n* 查看声音文件属性\n\n```\nsox info $filePath.wav\n```\n\n### XFYUN API服务 感谢：\n\n[fundon](https://github.com/fundon) 提供服务域名。\n\n[silk-v3-decoder](https://github.com/kn007/silk-v3-decoder) 提供silk解码和转码SDK。\n\n## FAQ\n1. 目前本站服务支持时间？\n从2017年5.1至未来9个月没有问题，长期看捐助情况。\n\n2. 如何搭建自己的服务？\n\n参考[这里](https://hub.docker.com/r/samurais/xfyun-api/)。\n\n3. 想加入聊天机器人开发者社区？\n联系我: hain_wang#foxmail.com, "# --> @"\n\n## 其他\n\n1. 自然语言理解服务\n\n[http://nlp.chatbot.io](http://nlp.chatbot.io)\n\n2. 学习资料\n\n[解析深度学习：语音识别实践](https://item.jd.com/11933855.html)\n\n3. 工作:\n\n[http://nlpjob.com/](http://nlpjob.com/)\n',metaData:{layout:"post",title:"语音识别服务",excerpt:"支持格式：wav, silk，最低采样率(16,000)；支持语言：简体中文，繁体中文，英语；支持口音：普通话，粤语；Powered by 讯飞开放平台",category:"development",tags:["stt"],disqus:!0}}}});