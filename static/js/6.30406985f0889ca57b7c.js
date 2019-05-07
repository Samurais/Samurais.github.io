webpackJsonp([6,62],{368:function(n,e){n.exports={rawContent:'\nFrom: https://cmusphinx.github.io/wiki/arpaformat/\nSource: [Wiki](https://github.com/cmusphinx/cmusphinx.github.io/blob/master/wiki/arpaformat.md)\n\nStatistical language describe probabilities of the texts, they are trained on\nlarge corpora of text data. They can be stored in various text and binary\nformat, but the common format supported by language modeling toolkits is a text\nformat called ARPA format. This format fits well for interoperability between\npackages. It is not as efficient as most efficient binary formats though, so\nfor production it is better to convert ARPA to binary.\n\n\n### Statistical N-gram models in the ARPA format\n\nARPA language models are essentially "everything is possible" kind of models of\nthe language. Given any sequence of N or less-that-N words, they provide a\nprobability of that sequence being seen in a sufficiently large representative\nsample of that language.\n\nConsider the text\n\n\n  wood pittsburgh cindy jean\n  jean wood\n\n\nIn this text we had a vocabulary of 4 words:\npittsburgh, cindy, wood, jean. The vocabulary size is actually\n4+3 words, the 3 others being "sentence-begining(silence, but not\nstrictly in the acoustic sense)", sentence-ending(silence,but..), and\nunknown-word. These are denoted in the sphinx community as `<s>`, `</s>`, and\n`<UNK>` respectively. These symbols are helpful for more consistent processing\nof the texts. You always start a sentence with `<s>` and extend it further.\n\nThe language model is a list of possible word sequences. Each sequence listed\nhas its statistically estimated language probability tagged to it. It may or\nmay not have a "backoff-weight" associated with it. In an N-gram LM, all N-1\ngrams usually have backoff weights associated with them.\n\nIf a particular N-gram is NOT listed, then its probability can be\ncalculated from the language model as follows:\n\n\n  P( word_N | word_{N-1}, word_{N-2}, ...., word_1 ) =\n  P( word_N | word_{N-1}, word_{N-2}, ...., word_2 ) * backoff-weight(\nword_{N-1} | word_{N-2}, ...., word_1 )\n\n\nIf the sequence `( word_{N-1}, word_{N-2}, ...., word_1 )` is also not\nlisted, then the term `backoff-weight( word_{N-1} | word_{N-2}, ...., word_1\n)` gets replaced with `1.0` and the recursion continues so.\n\nThe following is a **random** example we constructed of a 2-gram LM with toy\nvocabulary. This is an example of a standard ARPA format LM. The format is\nsimply `P(N-gram sequence) sequence BP(N-gram sequence)`\nThese (the numbers associated with unigrams and bigrams in the example  below)\nare actual probabilities.\nThe format of "sequence" is `A B C D := D` after `C` after `B` after\n`A` (as spoken or written in the language)\n\nSo if you don\'t see the sequence "wood pittsburgh", you can get its probability\nby reading off\n\n`P(pittsburgh|wood)= P(pittsburgh) * BWt(wood).`\n\n\n\n  \\data\\\n  ngram 1=7\n  ngram 2=7\n\n  \\1-grams:\n  0.1 `<UNK>` 0.5555\n  0 `<s>`  0.4939\n  0.1 `</s>`   1.0\n  0.2 wood   0.5555\n  0.2 cindy 0.5555\n  0.2 pittsburgh    0.5555\n  0.2 jean   0.6349\n\n  \\2-grams:\n  0.5555 `<UNK>` wood\n  0.5555 `<s>` `<UNK>`\n  0.5555 wood pittsburgh\n  0.5555 cindy jean\n  0.5555 pittsburgh cindy\n  0.2778 jean `</s>`\n  0.2778 jean wood\n\n  \\end\\\n\n\n\n\nIn most N-gram LMs, the actual probabilities are replaced by their\nlogs. Usually the logbase is 10. The LM below is thus the more\nfrequently used version of the example above:\n\n\n\n  \\data\\\n  ngram 1=7\n  ngram 2=7\n\n  \\1-grams:\n  -1.0000 `<UNK>` -0.2553\n  -98.9366 `<s>`   -0.3064\n  -1.0000 `</s>`   0.0000\n  -0.6990 wood   -0.2553\n  -0.6990 cindy -0.2553\n  -0.6990 pittsburgh    -0.2553\n  -0.6990 jean   -0.1973\n\n  \\2-grams:\n  -0.2553 `<UNK>` wood\n  -0.2553 `<s>` `<UNK>`\n  -0.2553 wood pittsburgh\n  -0.2553 cindy jean\n  -0.2553 pittsburgh cindy\n  -0.5563 jean `</s>`\n  -0.5563 jean wood\n\n  \\end\\\n\n\n\nThe ARPA models could include 3-grams and even multigrams. 7-grams and 10-grams\nare rare but still used. ARPA models could be compressed with gzip to save\nspace.\n',metaData:{layout:"post",title:"N-Gram文件格式介绍 - ARPA",excerpt:"ARPA Language models",category:"development",tags:["nlp"],disqus:!0}}}});