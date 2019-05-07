webpackJsonp([30,62],{344:function(n,t){n.exports={rawContent:"\n[余弦相似性](https://zh.wikipedia.org/wiki/%E4%BD%99%E5%BC%A6%E7%9B%B8%E4%BC%BC%E6%80%A7): 通过计算两个向量的夹角余弦值来评估他们的相似度。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/bg2013032002.png)\n\n余弦值越接近1，就表明夹角越接近0度，也就是两个向量越相似。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/bg2013032007.png)\n\n## 给定两个句子\nA： 我喜欢足球，也喜欢篮球。\n\nB： 我喜欢足球，不喜欢篮球。\n\n\n## 对句子进行分词，并统计词频\n分词\nA：我/ 喜欢/ 足球/ ,/ 也/ 喜欢/ 篮球 /。\n\nB：我/ 喜欢/ 足球/ ,/ 不/ 喜欢/ 篮球/ 。\n\n出现的所有的词语：\n我/ 喜欢/ 足球 / 篮球/ 也/ 不\n\n词频\nA：我：1，喜欢：2，足球：1，篮球：1，也：1，不：0\n\nB：我：1，喜欢：2，足球：1，篮球：1，也：1，不：1\n\n词频向量\nA：[1, 2, 1, 1, 0]\n\nB：[1, 2, 1, 1, 1]\n\n## 计算相似性\n\n### 过程\n\n(1）使用TF-IDF算法，找出两篇文章的关键词；\n\n(2）每篇文章各取出若干个关键词（比如20个），合并成一个集合，计算每篇文章对于这个集合中的词的词频（为了避免文章长度的差异，可以使用相对词频）；\n\n(3）生成两篇文章各自的词频向量；\n\n(4）计算两个向量的余弦相似度，值越大就表示越相似。\n\n![](https://camo.githubusercontent.com/26e22b617dc49ec67e4dea25f76b5c2138489917/687474703a2f2f692e696d6775722e636f6d2f7a717437556c732e706e67)\n\n```python\n# -*- coding: utf8 -*-\nimport math\nimport jieba.analyse\narticle_a = '我喜欢中国，也喜欢美国。'\narticle_b = '我喜欢足球，不喜欢篮球。'\n\n\ndef cut_word(article):\n    # 这里使用了TF-IDF算法，所以分词结果会有些不同->https://github.com/fxsjy/jieba#3-关键词提取\n    res = jieba.analyse.extract_tags(\n        sentence=article, topK=20, withWeight=True)\n    return res\n\n\ndef tf_idf(res1=None, res2=None):\n    # 向量，可以使用list表示\n    vector_1 = []\n    vector_2 = []\n    # 词频，可以使用dict表示\n    tf_1 = {i[0]: i[1] for i in res1}\n    tf_2 = {i[0]: i[1] for i in res2}\n    res = set(list(tf_1.keys()) + list(tf_2.keys()))\n\n    # 填充词频向量\n    for word in res:\n        if word in tf_1:\n            vector_1.append(tf_1[word])\n        else:\n            vector_1.append(0)\n            if word in tf_2:\n                vector_2.append(tf_2[word])\n            else:\n                vector_2.append(0)\n\n    return vector_1, vector_2\n\n\ndef numerator(vector1, vector2):\n    #分子\n    return sum(a * b for a, b in zip(vector1, vector2))\n\n\ndef denominator(vector):\n    #分母\n    return math.sqrt(sum(a * b for a,b in zip(vector, vector)))\n\n\ndef run(vector1, vector2):\n    return numerator(vector1,vector2) / (denominator(vector1) * denominator(vector2))\n\n\nvectors =  tf_idf(res1=cut_word(article=article_a), res2=cut_word(article=article_b))\n# 相似度\nsimilarity = run(vector1=vectors[0], vector2=vectors[1])\n# 使用arccos计算弧度\nrad = math.acos(similarity)\nprint(similarity, rad)\n\n# 0.2157074518785444 1.353380046633586\n```\n\n## 参考\n[两种重复文章识别算法——TF-IDF算法和余弦相似性](https://github.com/jamcplusplus/jamcplusplus.github.io/issues/7)\n\n[基于 TF-IDF 算法的关键词抽取](https://github.com/fxsjy/jieba#基于-tf-idf-算法的关键词抽取)\n\n\n[TF-IDF与余弦相似性的应用（二）：找出相似文章](http://www.ruanyifeng.com/blog/2013/03/cosine_similarity.html)\n",metaData:{layout:"post",title:"Word2Vec(一) - 余弦相似性数学原理",excerpt:"判断两个文章或者句子相似程度的一个算法。根据向量坐标，绘制在空间中，求得夹角的Cos值。Cos值越接近1，则说明夹角越小，即两向量相似。",category:"development",tags:["nlp"],disqus:!0}}}});