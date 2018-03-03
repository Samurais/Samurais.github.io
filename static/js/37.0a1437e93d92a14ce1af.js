webpackJsonp([37,56],{318:function(n,t){n.exports={rawContent:"\n在做聊天机器人的过程中，人最有好的输入还是通过语音，这两年，深度学习使得ASR服务的准确度大大提升。针对汉语，或者是中式英语，科大讯飞的服务做的不错【注意:这里是安利】。\n\n## 但是 ...\n\n[科大讯飞](http://www.xfyun.cn/)没有提供Node.js SDK， 我就造了这个轮子。\n\n* 目前仅支持 linux64，目前仅支持科大讯飞听写接口。\n```bash\n# download xfyun sdks from official portal, a zip file like here.\nsudo unzip Linux_voice_1135_5864ae2d.zip -d /opt/xfy-sdk\ncd PROJECT_ROOT\n```\n\n* Install\n```bash\nnpm install xfy-node --save\n```\n\n## Usage\n```javascript\n    const xfyclient = require('xfy-node');\n    let params = {\n        username: null, // 账号名称\n        password: null, // 账号密码 \n        appid: '5864ae2d', // AppID\n        // 语言\n        // zh_cn:简体中文\n        // zh_tw:繁体中文\n        // en_us:英语\n        // 默认为zh_cn\n        lang: 'zh_cn', \n        // 口音\n        // mandarin:普通话\n        // cantonese:粤语\n        // 默认为mandarin\n        accent: 'mandarin',\n        // 音频格式\n        // 8000, 16000, 默认为16000\n        sample_rate: 16000,\n        // 音频文件位置，绝对路径\n        audio_file: 'wav/iflytek01.wav'\n    }\n\n    xfyclient.iat(params)\n        .then(function (result) {\n            console.log('result', result);\n        }, function(err){\n            console.log('err', err);\n        });\n```\n\n## Tutorial\nhttps://github.com/Samurais/xfy-node-getstarted\n\n## Contribution\n```bash\nnpm install\nnode-gyp rebuild\nava # test\n```\n\n## 讯飞提供的原始SDK\n```bash\ngit clone https://github.com/Samurais/xfyun-get-started\n```\n\n## 资源链接\n[语音识别科普](http://bbs.xfyun.cn/forum.php?mod=viewthread&tid=6911)\n\n[服务介绍](http://www.xfyun.cn/doccenter/asr)\n\n[开发者论坛](http://bbs.xfyun.cn/portal.php)\n\n[识别英语](http://bbs.xfyun.cn/forum.php?mod=viewthread&tid=22602&extra=page%3D1)\n",metaData:{layout:"post",title:"科大讯飞 Node.js SDK",excerpt:"这两年，深度学习使得ASR服务的准确度大大提升。针对汉语，或者是中式英语，科大讯飞的服务做的不错【注意:这里是安利】。",category:"development",tags:["sdk","stt","asr"],disqus:!0}}}});