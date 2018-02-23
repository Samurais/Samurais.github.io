webpackJsonp([22,55],{331:function(e,t){e.exports={rawContent:'\n## 从一个query body开始\n\n```\n{\n  "query": {\n    "bool": {\n      "disable_coord": true,\n      "must": [\n        {\n          "match": {\n            "enabled": "1"\n          }\n        },\n        {\n          "range": {\n            "effectTime": {\n              "lt": "2017-06-13 13:33:54"\n            }\n          }\n        },\n        {\n          "range": {\n            "expireTime": {\n              "gt": "2017-06-13 13:33:54"\n            }\n          }\n        }\n      ],\n      "should": [\n        {\n          "match": {\n            "location": {\n              "query": "北京",\n              "boost": 2.7617\n            }\n          }\n        }\n      ]\n    }\n  },\n  "size": 50\n}\n```\n* [bool](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html)\n\nA query that matches documents matching boolean combinations of other queries. \n\n* must\n\nThe clause must appear in matching documents and will contribute to the score.\n\n* should\n\nThe clause should appear in the matching document. \n\nIf the bool query is in a query context and has a must or filter clause then a document will match the bool query even if none of the should queries match. In this case these clauses are only used to influence the score. \n\nIf the bool query is a filter context or has neither must or filter then at least one of the should queries must match a document for it to match the bool query. This behavior may be explicitly controlled by settings the minimum\\_should_match parameter.\n\n* [disable_coord](https://stackoverflow.com/questions/25676727/what-does-disable-coord-parameter-for-boolean-queries-mean/)\n\nSuppose you have a should clause in which you have three queries now suppose one document matches first bool query then it will get some score on that but suppose this query do not exactly match second query but partially matches, now this document will be given some little bit score extra that means (first query match score + second query partial match score).\n\nNow if u do not want this partial score to be given in your query then you should write "disable_coord": true what it will do it will only give score to the document according to the exactly match query not on the partial match. \n\n\n## must, should\n\n对于must和should，存储数据的形式是一样的。如果有多个查询条件，就放在数组中，如果只有一个查询条件，则可以直接赋值。\n\n* [match](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html)\n\n```\n"must|should": [\n    {\n        "match": { "foo": "bar" }\n    },\n...\n```\n\n> 如果包含多个条件，不同条件之间可以使用 operator。Default **or**.\n\n```\n"must|should": [\n    {\n        "match": { "foo": {"query": "bar", "operator": "and"} }\n    },\n...\n```\n\n\n\n* [range](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-range-query.html)\n\n```\n"must|should": [\n    {\n        "range": { "someTime": {"lt": "2017-06-13 13:33:54"} }\n    },\n...\n```\n\n* [term](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-term-query.html)\n\nThe term query finds documents that contain the exact term specified in the inverted index.\n\n* [terms](https://www.elastic.co/guide/en/elasticsearch/reference/2.4/query-dsl-terms-query.html)\n\nFilters documents that have fields that match any of the provided terms (not analyzed).\n\n* boost\n\nA boost parameter can be specified to give this term query a higher relevance score than another query.\n\n## [Term v.s. Match](https://www.elastic.co/guide/en/elasticsearch/guide/current/term-vs-full-text.html)\n\n* term\n\nQueries like the term or fuzzy queries are low-level queries that have no analysis phase. They operate on a single term. A term query for the term Foo looks for that exact term in the inverted index and calculates the TF/IDF relevance _score for each document that contains the term.\n\nIt is important to remember that the term query looks in the inverted index for the exact term only; it won’t match any variants like foo or FOO. It doesn’t matter how the term came to be in the index, just that it is. If you were to index ["Foo","Bar"] into an exact value not_analyzed field, or Foo Bar into an analyzed field with the whitespace analyzer, both would result in having the two terms Foo and Bar in the inverted index.\n\n* match\n\nQueries like the match or query_string queries are high-level queries that understand the mapping of a field:\n\nIf you use them to query a date or integer field, they will treat the query string as a date or integer, respectively.\nIf you query an exact value (not_analyzed) string field, they will treat the whole query string as a single term.\nBut if you query a full-text (analyzed) field, they will first pass the query string through the appropriate analyzer to produce the list of terms to be queried.\nOnce the query has assembled a list of terms, it executes the appropriate low-level query for each of these terms, and then combines their results to produce the final relevance score for each document.\n\n> [match](https://www.elastic.co/guide/en/elasticsearch/reference/2.4/query-dsl-match-query.html) 全文匹配， term 严格匹配。\n\n## 其他\n\n* filter, must_not\n\n这两个关键字和*must*, *should*在同一级别。\n\nThe *filter* clause must appear in matching documents. However unlike must the score of the query will be ignored. Filter clauses are executed in filter context, meaning that scoring is ignored and clauses are considered for caching.\n\nThe *must_not* clause must not appear in the matching documents. Clauses are executed in filter context meaning that scoring is ignored and clauses are considered for caching. Because scoring is ignored, a score of 0 for all documents is returned.\n\n## 参考\n\n[Elasticsearch 权威指南（中文版）](https://es.xiaoleilu.com/)\n\n',metaData:{layout:"post",title:"使用ElasticSearch查询",excerpt:"ElasticSearch作为优秀的开源搜索引擎解决方案，拥有强大的数据管理能力。其中，怎么高效率的使用Query是ElasticSearch的重点。",category:"development",tags:["search"],disqus:!0}}}});