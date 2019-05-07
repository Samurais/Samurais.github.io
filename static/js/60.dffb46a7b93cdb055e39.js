webpackJsonp([60,62],{314:function(n,t){n.exports={rawContent:'\n# TL; DR\nIn order to deploy network to train Deep Learning Network, a GPU Enabled machine is required. Fortunately, AWS provides GPU Accelerated Machine.\n\nhttps://aws.amazon.com/blogs/aws/new-g2-instance-type-with-4x-more-gpu-power/\n\nInstallation scripts:\n[Install Nvidia Drivers, CUDNn, Python, TensorFlow on Ubuntu 16.04](https://gist.github.com/Samurais/e20a8283708d37f1d7c9a709e9332429)\n\n# Provision Machine\n\n* AMI\nUbuntu Server 14.04 LTS (HVM), SSD Volume Type \n\n* Select Instance Type\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2016/11/Screen-Shot-2016-11-04-at-15.31.11.png)\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cluster_computing.html\n\n* Deploy it\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2016/11/Screen-Shot-2016-11-04-at-15.37.14.png)\n\n# About CUDA Cores （2560）\n[Nvidia GPU Product Matrix](http://wccftech.com/rumor-nvidia-pascal-gtx-1080-gddr5x-gtx-1070-f-gddr5/)\n# Install TensorFlow with pip\n\n[manual](https://www.tensorflow.org/versions/r0.11/get_started/os_setup.html#using-pip)\n\n### 使用python3\n```\n# ubuntu @ dagama in ~ [2:54:27] C:1\n$ cd /usr/local/bin                           \n# ubuntu @ dagama in /usr/local/bin [2:54:46] \n$ ls -l|grep pip\n-rwxr-xr-x 1 root root 204 Nov  7 11:08 pip\n-rwxr-xr-x 1 root root 204 Nov  7 11:08 pip2\n-rwxr-xr-x 1 root root 204 Nov  7 11:08 pip2.7\n$ sudo mv pip2 ~/bakup1\n$ sudo mv pip2.7 ~/bakup1\n# ubuntu @ dagama in /usr/local/bin [2:57:46] \n$ ls -l|grep pip   \n-rwxr-xr-x 1 root root 204 Nov  7 11:08 pip\n###尝试用pip安装模块,以查看pip是否安装成功###\n$ pip install wheel\nTraceback (most recent call last):\n  File "/usr/local/bin/pip", line 7, in <module>\n    from pip import main\nImportError: No module named \'pip\n###应该是安装python3的pip? 并更新pip###\n$ sudo apt-get install python3-pip\n$sudo pip install --upgrade pip\n$ pip --version                  \npip 9.0.1 from /usr/local/lib/python3.4/dist-packages (python 3.4) \n```\n\n### Install required packages\n```\nsudo apt-get install python-numpy python-scipy python-matplotlib ipython ipython-notebook python-pandas python-sympy python-nose\n# 直接利用"pip install -U scikit-learn "安装scikit-learn,会提示"UnicodeDecodeError: \'ascii\' codec can\'t decode byte 0xe2 in position 52: ordinal not in range(128)"的错误,可以先升级一下setuptools,如下\nsudo pip install --upgrade setuptools\nsudo pip install -U scikit-learn  # 安装成功\n```\n### Install tensorflow0.9.0(python3.4)\n```\n# Ubuntu/Linux 64-bit, GPU enabled, Python 3.4 \n# Requires CUDA toolkit 7.5 and CuDNN v4. For other versions, see "Install from sources" below.\n$ export TF_BINARY_URL=https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow-0.9.0-cp34-cp34m-linux_x86_64.whl\n# Python3\n$ sudo pip3 install --upgrade $TF_BINARY_UR\n```\nBut there is no \'configure\'script at the root of the tree (in the tensorflow), so I clone the tensorflow repository, as follows: \n#### Clone the TensorFlow repository\n```\n$ git clone https://github.com/tensorflow/tensorflow\n\n```\n\n# Install Drivers\n\nhttps://aws.amazon.com/blogs/aws/new-g2-instance-type-with-4x-more-gpu-power/\n\n## Install utilities\n\n```\n sudo apt-get install wget zsh git curl ack-grep -yy\n```\n## Installing  NVIDIA Driver\n[manual](http://www.binarytides.com/install-nvidia-drivers-ubuntu-14-04/)\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2016/11/Screenshot-from-2016-11-08-14-42-55.png)\n## CUDA Driver\n\n[manual](https://www.tensorflow.org/versions/r0.11/get_started/os_setup.html#optional-install-cuda-gpus-on-linux)\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2016/11/Screen-Shot-2016-11-04-at-16.36.17.png)\n\n```\nsudo dpkg -i cuda-repo-ubuntu1404_8.0.44-1_amd64.deb\nsudo apt-get update\nsudo apt-get install cuda\n```\n\n### Setup CUDA_HOME in PATH\nedit /etc/profile\n```\nexport CUDA_HOME=/usr/local/cuda\nexport PATH=$PATH:$CUDA_HOME/bin\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$CUDA_HOME/lib64\n```\n\n## CUDNN\n\n[Install cuDNN v5.](https://developer.nvidia.com/accelerated-computing-developer)\n\nUncompress and copy the cuDNN files into the toolkit directory. Assuming the toolkit is installed in /usr/local/cuda, run the following commands (edited to reflect the cuDNN version you downloaded):\n```\ntar xvzf cudnn-8.0-linux-x64-v5.1.tgz \nsudo cp cuda/include/cudnn.h /usr/local/cuda/include\nsudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64\nsudo chmod a+r /usr/local/cuda/include/cudnn.h /usr/local/cuda/lib64/libcudnn*\ncd /usr/local/cuda/lib64/ \nsudo rm -rf libcudnn.so libcudnn.so.5 \nsudo ln -s libcudnn.so.5.0.5 libcudnn.so.5 \nsudo ln -s libcudnn.so.5 libcudnn.so \n```\n\n\n## Install bazel\n[manual](https://bazel.build/versions/master/docs/install.html#ubuntu)\n\nFor Ubuntu Trusty (14.04 LTS) users, since OpenJDK 8 is not available on Trusty, please install Oracle JDK 8:\n```\n$ sudo add-apt-repository ppa:webupd8team/java\n$ sudo apt-get update\n$ sudo apt-get install oracle-java8-installer\n```\nNote: You might need to sudo apt-get install software-properties-common if you don\'t have the add-apt-repository command. See [here](http://manpages.ubuntu.com/manpages/wily/man1/add-apt-repository.1.html).\n```\n$ sudo apt-get update && sudo apt-get install bazel\n#Once installed, you can upgrade to newer version of Bazel with:\n$ sudo apt-get upgrade bazel\n```\n\n## Launch tensorflow\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2016/11/Screenshot-from-2016-11-08-11-26-08.png)\n## Summary\n\n\n',metaData:{layout:"post",title:"Launch Linux( ubuntu14.04) GPU Acc machine in AWS",excerpt:"In order to deploy network to train Deep Learning Network, a GPU Enabled machine is required. Fortunately, AWS provides GPU Accelerated Machine.",category:"development",tags:["gpu","cuda","ubuntu"],disqus:!0}}}});