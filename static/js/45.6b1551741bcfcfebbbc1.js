webpackJsonp([45,55],{308:function(e,n){e.exports={rawContent:'\n> Original Link - http://ischlag.github.io/2016/06/12/async-distributed-tensorflow/\n\n---\n### TL;DR;\nA brief tutorial on how to do asynchronous and data parallel training using three worker machines with each one using a GTX 960 GPU (2GB) and one parameter server with no GPU. I use a simple sigmoid network with a small learning rate to measure performance differences on MNIST. The goal is not to achieve a high accuracy but to learn about tensorflows distribution capabilities. In this unscientific evaluation, we train the network for 20 epochs using only one worker as the baseline (0.42). **Accuracy increases by 16% (0.58) using two workers and by 23% (0.65) using 3 workers**. This toy example takes ~170s to compute (but more workers need more time to initialize).\n\n### Context\nThe version of tensorflow used here is 0.8.0 and I recommend to study the official tensorflow [tutorial](https://www.tensorflow.org/versions/r0.8/how_tos/distributed/index.html), as well as, to look at official tensorflow [models](https://github.com/tensorflow/models/) which come with distributed learning capabilities. \n\nThe code used builds on my previous example [here]({% post_url 2016-06-03-simple-neural-network-in-tensorflow %}) and [here]({% post_url 2016-06-04-how-to-use-tensorboard %}). I will only touch on the new parts which are relevant for distributed training.\n\n### Distributed Training\n\nThere are different ways to train a network in a distributed fashion. The simplest approach is to **share all the model parameters across all workers while parallelising data and gradient updates**. In a synchronised setting, several batches are processed at the same time. Once all the workers are done, the parameter updates are averaged and the update is performed only once. In an asynchronised setting, every worker will update the model parameters once it has finished and not wait. I had trouble getting a synchronised setting to work and once I managed to run something it was understandably slower but didn\'t perform better. \n\n![](http://ischlag.github.io/images/sync_async_tensorflow_diagram.png)\n### TensorFlow Jargon and Implementation\n\nIf you run a tensorflow script distributed (i.e. in a **cluster**) it is important that every machine knows who is who and who am I. The script below will not start running until all the machines of our cluster are online. The cluster specification is the same for all machines and is usually made up of parameter servers and workers. While parameter servers only maintain the shared parameters, workers are performing some or all computations of our graph.\n\n```python\n# cluster specification\nparameter_servers = ["pc-01:2222"]\nworkers = [ "pc-02:2222", \n            "pc-03:2222",\n            "pc-04:2222"]\ncluster = tf.train.ClusterSpec({"ps":parameter_servers, "worker":workers})\n```\n_ps_ and _workers_ are called **jobs** which is basically just a container for one or several **tasks**. The task is a unique thing the worker will do. If we wanted, we could add several tasks running on the same machine. This might make sense if you have e.g. multiple GPUs on one machine. In this example, all the tasks will include the complete graph of our model but if you want to parallise the model instead of the data you\'d have to change what every task does. Next, we need to initialize the running machine.\n\n```python\n# input flags\ntf.app.flags.DEFINE_string("job_name", "", "Either \'ps\' or \'worker\'")\ntf.app.flags.DEFINE_integer("task_index", 0, "Index of task within the job")\nFLAGS = tf.app.flags.FLAGS\n\n# start a server for a specific task\nserver = tf.train.Server(cluster, \n                          job_name=FLAGS.job_name,\n                          task_index=FLAGS.task_index)\n```\nMake sure that you run the correct task on the current machine. In our example, pc-02 should be a worker with task_index 0. What follows in our code is the configuration parameters and loading the mnist data as we have seen before. If the current script is run on a parameters server all we have to do is to call server.join() in order for it to join the cluster. \n\nWhat follows are some configuration variables. Next, we are going to define the computation for every worker. Since we are going to compute the whole model on all the devices we will add the scope of all workers.\n\n```python\n  with tf.device(tf.train.replica_device_setter(\n    worker_device="/job:worker/task:%d" % FLAGS.task_index,\n    cluster=cluster)):\n```\nWhat follows is the implemented model. This is just slightly different to what we have been working with so far. We include a global_step variable which will increment by one with every update to better keep track of them. Furthermore, we also set the random seed to 1 to better compare different cluster configurations. However, because of the threads used by tensorflow internally this doesn\'t make the script deterministic so don\'t expect the exact same results after every run. I\'ve also added the global_step variable to the optimizer and the following supervisor. \n\nAfter we have done this we need to get a session in order to run our training cycles similar to what we already had. In a distributed setting one machine will be the **chief**. The chief is a worker machine (in our case task 0) which manages the rest of the cluster. The session is handled by the chief i.e. the supervisor object.\n\n```python\n  sv = tf.train.Supervisor(is_chief=(FLAGS.task_index == 0),\n                            global_step=global_step,\n                            init_op=init_op)\n```\nThe supervisor object has several parameters which are supposed to simplify things ([see here](https://www.tensorflow.org/versions/r0.9/api_docs/python/train.html#Supervisor)) but in my case adding e.g. the summary_op to the supervisor as a parameter together with a log path didn\'t work. Some aspects here felt buggy and there were some open issues on Github as well. We can, however, do our logs as we did before and continue.\n\nWe can now in a similar way obtain a session using the following command.\n\n```python\n  with sv.prepare_or_wait_for_session(server.target) as sess:\n```\n\nThat\'s it! The rest of our code is fairly similar. You can find the complete code [here](https://github.com/ischlag/distributed-tensorflow-example) or below.\n\n```python\n\'\'\'\nDistributed Tensorflow example of using data parallelism and share model parameters.\nTrains a simple sigmoid neural network on mnist for 20 epochs on three machines using one parameter server. \n\nChange the hardcoded host urls below with your own hosts. \nRun like this: \n\npc-01$ python example.py --job-name="ps" --task_index=0 \npc-02$ python example.py --job-name="worker" --task_index=0 \npc-03$ python example.py --job-name="worker" --task_index=1 \npc-04$ python example.py --job-name="worker" --task_index=2 \n\nMore details here: ischlag.github.io\n\'\'\'\n\nfrom __future__ import print_function\n\nimport tensorflow as tf\nimport sys\nimport time\n\n# cluster specification\nparameter_servers = ["pc-01:2222"]\nworkers = [ "pc-02:2222", \n      "pc-03:2222",\n      "pc-04:2222"]\ncluster = tf.train.ClusterSpec({"ps":parameter_servers, "worker":workers})\n\n# input flags\ntf.app.flags.DEFINE_string("job_name", "", "Either \'ps\' or \'worker\'")\ntf.app.flags.DEFINE_integer("task_index", 0, "Index of task within the job")\nFLAGS = tf.app.flags.FLAGS\n\n# start a server for a specific task\nserver = tf.train.Server(cluster, \n                          job_name=FLAGS.job_name,\n                          task_index=FLAGS.task_index)\n\n# config\nbatch_size = 100\nlearning_rate = 0.001\ntraining_epochs = 20\nlogs_path = "/tmp/mnist/1"\n\n# load mnist data set\nfrom tensorflow.examples.tutorials.mnist import input_data\nmnist = input_data.read_data_sets(\'MNIST_data\', one_hot=True)\n\nif FLAGS.job_name == "ps":\n  server.join()\nelif FLAGS.job_name == "worker":\n\n  # Between-graph replication\n  with tf.device(tf.train.replica_device_setter(\n    worker_device="/job:worker/task:%d" % FLAGS.task_index,\n    cluster=cluster)):\n\n    # count the number of updates\n    global_step = tf.get_variable(\'global_step\', [], \n                                initializer = tf.constant_initializer(0), \n                                trainable = False)\n\n    # input images\n    with tf.name_scope(\'input\'):\n      # None -> batch size can be any size, 784 -> flattened mnist image\n      x = tf.placeholder(tf.float32, shape=[None, 784], name="x-input")\n      # target 10 output classes\n      y_ = tf.placeholder(tf.float32, shape=[None, 10], name="y-input")\n\n    # model parameters will change during training so we use tf.Variable\n    tf.set_random_seed(1)\n    with tf.name_scope("weights"):\n      W1 = tf.Variable(tf.random_normal([784, 100]))\n      W2 = tf.Variable(tf.random_normal([100, 10]))\n\n    # bias\n    with tf.name_scope("biases"):\n      b1 = tf.Variable(tf.zeros([100]))\n      b2 = tf.Variable(tf.zeros([10]))\n\n    # implement model\n    with tf.name_scope("softmax"):\n      # y is our prediction\n      z2 = tf.add(tf.matmul(x,W1),b1)\n      a2 = tf.nn.sigmoid(z2)\n      z3 = tf.add(tf.matmul(a2,W2),b2)\n      y  = tf.nn.softmax(z3)\n\n    # specify cost function\n    with tf.name_scope(\'cross_entropy\'):\n      # this is our cost\n      cross_entropy = tf.reduce_mean(-tf.reduce_sum(y_ * tf.log(y), reduction_indices=[1]))\n\n    # specify optimizer\n    with tf.name_scope(\'train\'):\n      # optimizer is an "operation" which we can execute in a session\n      grad_op = tf.train.GradientDescentOptimizer(learning_rate)\n      \'\'\'\n      rep_op = tf.train.SyncReplicasOptimizer(grad_op, \n                                          replicas_to_aggregate=len(workers),\n                                          replica_id=FLAGS.task_index, \n                                          total_num_replicas=len(workers),\n                                          use_locking=True\n                                          )\n      train_op = rep_op.minimize(cross_entropy, global_step=global_step)\n      \'\'\'\n      train_op = grad_op.minimize(cross_entropy, global_step=global_step)\n      \n    \'\'\'\n    init_token_op = rep_op.get_init_tokens_op()\n    chief_queue_runner = rep_op.get_chief_queue_runner()\n    \'\'\'\n\n    with tf.name_scope(\'Accuracy\'):\n      # accuracy\n      correct_prediction = tf.equal(tf.argmax(y,1), tf.argmax(y_,1))\n      accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))\n\n    # create a summary for our cost and accuracy\n    tf.scalar_summary("cost", cross_entropy)\n    tf.scalar_summary("accuracy", accuracy)\n\n    # merge all summaries into a single "operation" which we can execute in a session \n    summary_op = tf.merge_all_summaries()\n    init_op = tf.initialize_all_variables()\n    print("Variables initialized ...")\n\n  sv = tf.train.Supervisor(is_chief=(FLAGS.task_index == 0),\n                            global_step=global_step,\n                            init_op=init_op)\n\n  begin_time = time.time()\n  frequency = 100\n  with sv.prepare_or_wait_for_session(server.target) as sess:\n    \'\'\'\n    # is chief\n    if FLAGS.task_index == 0:\n      sv.start_queue_runners(sess, [chief_queue_runner])\n      sess.run(init_token_op)\n    \'\'\'\n    # create log writer object (this will log on every machine)\n    writer = tf.train.SummaryWriter(logs_path, graph=tf.get_default_graph())\n        \n    # perform training cycles\n    start_time = time.time()\n    for epoch in range(training_epochs):\n\n      # number of batches in one epoch\n      batch_count = int(mnist.train.num_examples/batch_size)\n\n      count = 0\n      for i in range(batch_count):\n        batch_x, batch_y = mnist.train.next_batch(batch_size)\n        \n        # perform the operations we defined earlier on batch\n        _, cost, summary, step = sess.run(\n                        [train_op, cross_entropy, summary_op, global_step], \n                        feed_dict={x: batch_x, y_: batch_y})\n        writer.add_summary(summary, step)\n\n        count += 1\n        if count % frequency == 0 or i+1 == batch_count:\n          elapsed_time = time.time() - start_time\n          start_time = time.time()\n          print("Step: %d," % (step+1), \n                " Epoch: %2d," % (epoch+1), \n                " Batch: %3d of %3d," % (i+1, batch_count), \n                " Cost: %.4f," % cost, \n                " AvgTime: %3.2fms" % float(elapsed_time*1000/frequency))\n          count = 0\n\n    print("Test-Accuracy: %2.2f" % sess.run(accuracy, feed_dict={x: mnist.test.images, y_: mnist.test.labels}))\n    print("Total Time: %3.2fs" % float(time.time() - begin_time))\n    print("Final Cost: %.4f" % cost)\n\n  sv.stop()\n  print("done")\n```',metaData:{layout:"post",title:"TensorFlow多机分布式部署",excerpt:"A brief tutorial on how to do asynchronous and data parallel training using three worker machines.",category:"development",tags:["tensorflow"],disqus:!0}}}});