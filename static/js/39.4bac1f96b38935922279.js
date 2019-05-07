webpackJsonp([39,61],{333:function(o,e){o.exports={rawContent:"\n## Paper\nThis work tries to reproduce the results of [A Neural Conversational Model](http://arxiv.org/abs/1506.05869) (aka the Google chatbot).\nIt uses a RNN (seq2seq model) for sentence predictions. It is done using python and TensorFlow.\n\n## Implementation\n### Implemented with TensorFlow\n[Conchylicultor/DeepQA](https://github.com/Conchylicultor/DeepQA)\n\n[Samurais/DeepQA2](https://github.com/Samurais/DeepQA2)\n\n## Corpus\nThe loading corpus part of the program is inspired by the Torch [neuralconvo](https://github.com/macournoyer/neuralconvo) from [macournoyer](https://github.com/macournoyer).\n\nFor now, DeepQA support the following dialog corpus:\n * [Cornell Movie Dialogs](http://www.cs.cornell.edu/~cristian/Cornell_Movie-Dialogs_Corpus.html) corpus (default). Already included when cloning the repository.\n * [OpenSubtitles](http://opus.lingfil.uu.se/OpenSubtitles.php) (thanks to [Eschnou](https://github.com/eschnou)). Much bigger corpus (but also noisier). To use it, follow [those instructions](data/opensubs/) and use the flag `--corpus opensubs`.\n * Supreme Court Conversation Data (thanks to [julien-c](https://github.com/julien-c)). Available using `--corpus scotus`. See the [instructions](data/scotus/) for installation.\n * [Ubuntu Dialogue Corpus](https://arxiv.org/abs/1506.08909) (thanks to [julien-c](https://github.com/julien-c)). Available using `--corpus ubuntu`. See the [instructions](data/ubuntu/) for installation.\n * Your own data (thanks to [julien-c](https://github.com/julien-c)) by using a simple custom conversation format (See [here](data/lightweight) for more info).",metaData:{layout:"post",title:"A Neural Conversational Model",excerpt:"This work tries to reproduce the results of Google chatbot. It uses a RNN (seq2seq model) for sentence predictions. It is done using python and TensorFlow.",category:"research",tags:["seq2seq","dialogue","tensorflow","dialogue"],disqus:!0}}}});