webpackJsonp([11,62],{363:function(n,a){n.exports={rawContent:"\n[转载 https://wolfsonliu.github.io/archive/python-xue-xi-bi-ji-numpy.html](https://wolfsonliu.github.io/archive/python-xue-xi-bi-ji-numpy.html)\n\n### Numpy 简介 ###\n\nNumPy 是 Python 科学计算的底层包, 提供了 ndarray 等方便大规模科学计算的类和方法等. NumPy 也是 Python 数据分析所用的 Pandas 包的基础, 所以这里简要介绍一下 numpy 的基础使用以方便学习和使用 Pandas 进行生物信息学分析.\n\nNumPy 主要包括: N-dimensional array object, 即 ndarry; 向量化可广播的函数和方法; 方便整合 C/C++ 和 Fortran 代码的工具; 线性代数函数, 傅立叶变换和随机数生成器.\n\nNumPy 已经归属于整合的 SciPy 科学计算包, 有更多复杂的功能, 可以应用于不同的科学计算任务, 本文所介绍的 NumPy 基础主要是作为未来学习和使用 Pandas 包进行数据分析, 所以不会提及太复杂的内容, 主要会是 ndarry 的一些函数和十分好用的生成随机数的函数. \n\n\n#### 创建数组 ####\n\nNumPy 中有多种创建数组的方法, 还可以根据需要创建单位矩阵或者零矩阵. NumPy 中建立的数组类型为 ndarray, 是能够高效进行大规模计算的数据类型.\n\n* `np.array`: 可以把 list, tuple, array, 或者其他的序列模式的数据转创建为 ndarray, 默认创建一个新的 ndarray.\n\n```\ndata = np.array(range(5), dtype = int)\ndata\n# array([0, 1, 2, 3, 4])\n```\n\n* `np.asarray`: 把其他类型的数据转换成为 ndarray, 如果是 ndarray 输入则默认不进行 copy, 而如果是其他类型数据则创建新的 ndarray.\n\n```\ndata2 = np.asarray(data)\ndata2 is data\n# True\n```\n\n* `np.arange`: 类似于 range 函数, 创建一个序列.\n\n```\nnp.arange(1, 16, 2)\n# array([ 1,  3,  5,  7,  9, 11, 13, 15])\n```\n\n* `np.ones`, `np.ones_like`: 创建一个数组, 其中的元素全为 1. `np.ones` 根据参数设定的纬度创建一个元素为 1 的数组, 而 `np.ones_like` 则根据一个已有的数组创建和其有相同纬度的元素全为 1 的数组.\n* `np.zeros`, `np.zeros_like`: 创建元素全为 0 的数组, 类似 `np.ones`.\n* `np.empty`, `np.empty_like`: 创建空数组, 类似 `np.ones`. 其中每个元素都没有进行初始化, 并不能保证都是 0.\n\n```\nnp.ones((2, 3))\n# array([[ 1.,  1.,  1.],\n#        [ 1.,  1.,  1.]])\nnp.zeros((2, 3))\n# array([[ 0.,  0.,  0.],\n#        [ 0.,  0.,  0.]])\nnp.empty((2,3))\n# array([[ 0.,  0.,  0.],\n#        [ 0.,  0.,  0.]])\nnp.ones_like(data)\n# array([1, 1, 1, 1, 1])\nnp.zeros_like(data)\n# array([0, 0, 0, 0, 0])\nnp.empty_like(data)\n# array([0, 0, 0, 0, 0])\n```\n\n* `np.eye`: 创建一个对角线为 1 其他为 0 的矩阵.\n* `np.identity`: 创建一个主对角线为 1 其他为 0 的方阵.\n\n```\nnp.eye(2, 2)\n# array([[ 1.,  0.],\n#        [ 0.,  1.]])\nnp.identity(3)\n# array([[ 1.,  0.,  0.],\n#        [ 0.,  1.,  0.],\n#        [ 0.,  0.,  1.]])\n```\n\n#### ndarray 方法 ####\n\n一个 ndarray 有如下常用的属性.\n\n虽然一个矩阵可能是多维的, 但由于内存的物理特性, 其存储在内存上是线性的. 把二维的矩阵存储成一维需要确定的是一行一行地存 (行优先) 还是一列一列地存 (列优先). 和 R 默认把矩阵按照列优先存储不同, NumPy 的 ndarray 默认把数据按照行优先存储, 这样在考虑 ndarray 地算法的时候也尽量按照行优先.\n\n* `np.size`: ndarray 的属性, ndarray 的元素的数量.\n* `np.dtype`: ndarray 的属性, ndarray 的元素的类型, 和 C/C++ 中的类型有对应关系. `np.sctypes` 为一个存有 numpy 支持的 dtype 的 dict. 整型 (int) 有 int8 (代表其长度为 8 个字, 即 1 个字节, 后面类似), int16, int32, int64. 无符号整型 (unit) 有 uint8, uit16, uint32, uint64. 浮点型 (float) 有 float16, float32, float64, float128. 复数型 (complex) 有 complex64, complex 128, complex256. 其他还有布尔型 (bool), 字符串型 (object, str) 等.\n* `np.itemsize`: ndarray 的属性, 元素的字节数, 例如一个 dtype 为 float64 的 ndarray 的元素的大小为 8.\n* `np.ndim`: ndarray 的属性, ndarray 的维度数.\n* `np.shape`: ndarray 的属性, 为包含 ndarray 每个维度的大小的 tuple.\n\n```\nnd = np.random.randint(10, size = (3, 4))\n# array([[6, 2, 4, 5],\n#        [5, 3, 6, 9],\n#        [5, 1, 3, 5]])\nnd.size\n# 12\nnd.dtype\n# dtype('int64')\nnd.itemsize\n# 8\nnd.ndim\n# 2\nnd.shape\n# (3, 4)\n```\n\nNumPy 提供了常用的对 ndarray 进行变换的方法.\n\n* `np.reshape`: 返回一个按照给定的维度改变的 ndarray.\n* `np.resize`: 在原位修改 ndarray 的维度.\n* `np.ravel`: 把 ndarray 拉成线性, 即一个维度的长度为其元素数量, 其他维度为 1.\n* `np.squeeze`: 返回一个把长度为 1 的维度去掉的 ndarray.\n\n```\nnd.reshape((2, 6))\n# array([[6, 2, 4, 5, 5, 3],\n#        [6, 9, 5, 1, 3, 5]])\nnd\n# array([[6, 2, 4, 5],\n#        [5, 3, 6, 9],\n#        [5, 1, 3, 5]])\nnd.ravel()\n# array([6, 2, 4, 5, 5, 3, 6, 9, 5, 1, 3, 5])\nnd.ravel().reshape((12, 1))\n# array([[6],\n#        [2],\n#        [4],\n#        [5],\n#        [5],\n#        [3],\n#        [6],\n#        [9],\n#        [5],\n#        [1],\n#        [3],\n#        [5]])\nnd.ravel().reshape((12, 1)).sequeeze()\n# array([6, 2, 4, 5, 5, 3, 6, 9, 5, 1, 3, 5])\nnd.resize((2, 6))\nnd\n# array([[6, 2, 4, 5, 5, 3],\n#        [6, 9, 5, 1, 3, 5]])\n```\n\n* `np.nonzero`: 返回元素中非零的索引, 如果是多维的, 则每个维度都会有一个包含该维度的序号的 ndarray.\n\n```\nnd.nonzero()\n# (array([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]),\n#  array([0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]))\n```\n\n* `np.repeat`: 复制 ndarray 的每个元素的值, 返回一个延长的 ndarray, 需要传入复制的次数作为参数. 当 ndarray 不是一维的时候, 返回的 ndarray 也会是一维的.\n\n```\nnd.repeat(2)\n# array([6, 6, 2, 2, 4, 4, 5, 5, 5, 5, 3, 3,\n#        6, 6, 9, 9, 5, 5, 1, 1, 3, 3, 5, 5])\n```\n\n* `np.compress`: 按照给定的 bool list 来选取 ndarray 中的值, 返回一个新的 ndarray.\n* `np.itemset`: 按照元素的序号设定元素的值.\n* `np.put`: 按照元素的索引设定元素的值.\n\n```\nnd.compress([True, True, False, False, True], axis = 1)\n# array([[6, 2, 5],\n#        [6, 9, 3]])\n```\n\nndarray 也有排序的方法可以使用.\n\n* `np.partition`: 返回一个 ndarray 的 copy, 其中 kth 参数指定的原 ndarray 中的值在返回的 ndarray 中处于排序后的对应的位置, 比其小的元素均在前面, 和其相同或比其大的在后面.\n* `np.argpartition`: 类似于 `np.partition` 函数, 返回值为对应的编号而非值.\n* `np.argsort`: 返回元素排序所对应的序号.\n* `np.sort`: 在原位排序.\n\n\n#### 逻辑计算 ####\n\n如果想要对布尔数组进行一个对一个地和与或操作, Python 的 and 和 or 操作符是不能用的, 而应该使用 numpy 提供的函数: `np.logical_and`, `np.logical_or` 和 `np.logical_xor` 接受两个等长的布尔数组, 分别进行元素一一对应的和, 或, 异或的逻辑运算; `np.logical_not` 则是对布尔数组进行取非运算.\n\n```\nbool1 = np.random.choice([True, False], 5)\nbool1\n# array([ True,  True, False,  True,  True], dtype=bool)\nbool2 = np.random.choice([True, False], 5)\nbool2\n# array([ True, False, False,  True,  True], dtype=bool)\nnp.logical_and(bool1, bool2)\n# array([ True, False, False,  True,  True], dtype=bool)\nnp.logical_or(bool1, bool2)\n# array([ True,  True, False,  True,  True], dtype=bool)\nnp.logical_xor(bool1, bool2)\n# array([False,  True, False, False, False], dtype=bool)\nnp.logical_not(bool1)\n# array([False, False,  True, False, False], dtype=bool)\n```\n\n* `np.all`: 如果所有的值都是真或者非零则返回 True, 否则返回 False.\n* `np.any`: ndarray 中有任何真值或者非零值则返回 True.\n\n```\nmybool = np.random.choice([True, False], 10)\n# array([False,  True,  True, False,  True, False,  True, False,  True, False], dtype=bool)\nmybool.all()\n# False\nmybool.any()\n# True\n```\n\n#### 数值计算 ####\n\nNumPy 中有许多和数值计算相关的函数, 这些函数与 math module 中的不同, 是向量化的, 能够高效地对 ndarray 类型的数组中的每一个元素进行运算. 这些函数也被称为通用函数 (ufunc).\n\n下面是一些单目运算函数.\n\n* `np.max`: 返回 ndarray 中的最大值.\n* `np.argmax`: 返回 ndarray 中最大的值的序号.\n* `np.min`: 返回 ndarray 中的最小值.\n* `np.argmin`: 返回 ndarray 中最小的值的序号.\n* `np.absolute`: 计算绝对值. `np.absolute(a)` 或者 `np.abs(a)`, 对于非复数的数组, `np.fabs` 速度更快.\n* `np.exp`: 计算 e 的指数, `e ** x`, e 约等于 2.718281828，还称为欧拉数。 [指数函数介绍](https://baike.baidu.com/item/%E6%8C%87%E6%95%B0%E5%87%BD%E6%95%B0/6013301?fr=aladdin)\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/08/numpy-e-1.jpg)\n[动态图](http://alturl.com/pehkt)\n\n* `np.sqrt`: 计算平方根, `x ** 0.5`.\n* `np.square`: 计算平方, `x ** 2`.\n* `np.log`, `np.log10`, `np.log2`, `np.log1p`: 分别为以 e, 10, 2 为底取 log, 和 `log(1 + x)`. [对数函数](http://www.baike.com/wiki/%E5%AF%B9%E6%95%B0%E5%87%BD%E6%95%B0)\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/08/numpy-e-2.jpg)\n[动态图](http://alturl.com/uimb8)\n\n* `np.sign`: 取数值的正负号.\n* `np.ceil`: 计算比每一个元素大或相等的最小的整数.\n* `np.floor`: 计算比每一个元素小或相等的最大的整数.\n* `np.rint`: 近似到最近的整数.\n* `np.clip`: 返回一个 ndarray, 其元素的值限制在给定的最大最小值之间. 如果原 ndarray 的值在给定的范围之外, 则替换成最大或最小值.\n* `np.modf`: 返回一个 tuple, 包含两个数组, 一个是小数部分, 一个是整数部分.\n* `np.cos`, `np.cosh`, `np.sin`, `np.sinh`, `np.tan`, `np.tanh`, `np.arccos`, `np.arccosh`, `np.arcsin`, `np.arcsinh`, `np.arctan`, `np.arctanh`: 三角函数和反三角函数.\n\n```\nnd = np.random.randn(10)\n# array([-1.38153059, -0.66621482, -0.58001284, -0.81628342,  0.0656215 ,\n#        -0.01538155, -0.77812592,  0.94664076,  0.85143997, -0.68542156])\nnp.absolute(nd)\n# array([ 1.38153059,  0.66621482,  0.58001284,  0.81628342,  0.0656215 ,\n#         0.01538155,  0.77812592,  0.94664076,  0.85143997,  0.68542156])\n\n```\n\n还有一些双目运算函数.\n\n* `np.add`, `+`: 两个数组元素一一对应相加.\n* `np.substract`, `-`: 两个数组元素一一对应相减.\n* `np.multiply`, `*`: 两个数组元素一一对应相乘.\n* `np.devide`, `/`: 两个数组元素一一对应相除.\n* `np.floor_divide`, `np.remainder`, `np.mod`, `np.fmod`: `np.floor_divide` 返回一一对应相除的最大整数商, 即 floor, 而 `np.remainder` 或 `np.mod` 则返回余数. 同时, `np.fmod` 返回的余数则根据被除数和除数的符号可能是负数.\n* `np.power`: 计算幂, 以第一个数组中元素为底, 以第二个数组中元素为指数.\n* `np.maximum`, `np.fmax`: 一一比较两个数组中元素大小, 返回相应位置最大的. `np.fmax` 会忽略 np.NAN, 而 `np.maximum` 则返回 np.NAN.\n* `np.minimum`, `np.fmin`: 一一比较两个数组中元素大小, 返回相应位置最小的. `np.fmin` 会忽略 np.NAN, 而 `np.minimum` 则返回 np.NAN.\n* `np.copysign`: 把第二个数组中的元素的符号复制给第一个数组中的相应元素.\n\n```\nnd1 = np.random.randint(0, 20, 10)\n# array([ 8, 15, 15,  0, 10, 13, 19,  5, 19, 10])\nnd2 = np.random.randint(0, 20, 10)\n# array([ 8, 18,  1, 15, 16,  2,  5, 12, 15,  9])\nnp.add(nd1, nd2)\n# array([16, 33, 16, 15, 26, 15, 24, 17, 34, 19])\nnp.maximum(nd1, nd2)\n# array([ 8, 18, 15, 15, 16, 13, 19, 12, 19, 10])\n```\n\n#### 集合运算 ####\n\n我们有时候关心的是数据中有多少个单一的值, 或者两个数据中相同的值有哪些, 这个时候可以通过集合运算函数来获取所关心的值. NumPy 中提供了高效的集合运算的函数.\n\n* `np.unique`: 返回一个包含有输入的数组元素中所有不重复的值的排序的数组.\n* `np.intersect1d`: 计算两个数组的一维交集, 返回排序后的交集数组.\n* `np.union1d`: 返回两个数组的排序后的并集.\n* `np.in1d`: 返回一个布尔值数组, 判断一个数组元素是否在另一个数组中.\n* `np.setdiff1d`: 返回一个数组, 其中包含在第一个输入数组而不在第二个输入数组的元素.\n* `np.setxor1d` 返回不同时在两个输入数组的元素的数组.\n\n```\nnd1 = np.random.choice(['A', 'B', 'C', 'D'], 10)\n# array(['A', 'D', 'B', 'C', 'B', 'B', 'D', 'A', 'C', 'B'], \n#       dtype='<U1')\nnd2 = np.random.choice(['D', 'E', 'F'], 10)\n# array(['F', 'E', 'E', 'D', 'D', 'D', 'D', 'E', 'E', 'F'], \n#       dtype='<U1')\nnp.unique(nd1)\n# array(['A', 'B', 'C', 'D'], \n#       dtype='<U1')\nnp.intersect1d(nd1, nd2)\n# array(['D'], \n#       dtype='<U1')\nnp.setdiff1d(nd1, nd2)\n# array(['A', 'B', 'C'], \n#       dtype='<U1')\nnp.setdiff1d(nd2, nd1)\n# array(['E', 'F'], \n#       dtype='<U1')\nnp.setxor1d(nd1, nd2)\n# array(['A', 'B', 'C', 'E', 'F'], \n#       dtype='<U1')\n```\n\n#### 统计量 ####\n\nNumPy 中有简单的统计计算的方法或者函数, 有着很好的效率. 统计量计算的函数和方法可以通过更高层调用, 如 `np.sum(arr)`, 或者使用数组的方法, 如 `arr.sum`.\n\n* `np.sum`: 计算数组的和, 可以设置参数 axis 为 0 或者 1 单独计算每行或每列的和.\n* `np.mean`: 计算数组的均值, 可以设置参数 axis 为 0 或者 1 单独计算每行或每列的均值.\n* `np.std`: 计算数组的标准差, 可以设置参数 axis 为 0 或者 1 单独计算每行或每列的标准差.\n* `np.var`: 计算数组的标准差, 可以设置参数 axis 为 0 或者 1 单独计算每行或每列的标准差.\n* `np.min`, `np.max`: 计算数组的最小值或最大值, 可以设置参数 axis 为 0 或者 1 单独计算每行或每列的最小值或最大值.\n* `np.argmin`, `np.argmax`: 计算数组的最小值或最大值的 index, 可以设置参数 axis 为 0 或者 1 单独计算每行或每列的最小值或最大值 index.\n* `np.cumsum`: 累加.\n* `np.cumprod`: 累乘.\n\n```\nnd = np.random.randn(100)  # 随机产生 100 个随机数.\nnd.sum()\n# -13.300540142526414\nnp.mean(nd)\n# -0.13300540142526412\nnd.std()\n# 1.0860199448302112\nnd.var()\n# 1.1794393205690152\nnd.min(), np.max(nd)\n# (-3.2346987329963834, 2.3950110710189687)\nnd.argmin(), np.argmax(nd)\n# (24, 31)\nnd.cumsum()\n# array([ -0.55436107,  -0.86184171,  -2.47687452,  -5.0649675 ,\n#            ...            ...            ...          ...\n#        -13.96853959, -13.59106636, -14.16799745, -13.30054014])\n```\n\n#### 线性代数 ####\n\nNumPy 中提供了一些线性代数运算的函数, 在 linalg 中有更全的线性代数的计算函数. 更多的线性代数相关函数包含在 scipy.linalg 包中.\n\n* `np.dot`: 矩阵乘法.\n* `np.transpose`: 返回转置, 也可以使用一个 ndarray 的 nd.T 属性.\n* `np.diagonal`: 返回矩阵的对角元素.\n* `np.trace`: 返回矩阵的迹.\n* `np.linalg.eig`: 返回方阵的特征值和特征向量.\n* `np.linalg.inv`: 返回方阵的逆矩阵.\n* `np.linalg.pinv`: 返回方阵的 Moore-Penrose 伪逆矩阵.\n* `np.linalg.solve`: 解线性方程组, 输入值是系数矩阵和线性方程组的常数项.\n* `np.linalg.det`: 求方阵的行列式.\n* `np.linalg.matrix_rank`: 求一个矩阵的秩.\n* `np.linalg.svd`: 奇异值分解.\n\n```\nnd1 = np.arange(9, 1).reshape(2,4)\n# array([[1, 2, 3, 4],\n#        [5, 6, 7, 8]])\nnd2 = np.arange(1, 9).reshape(4,2)\n# array([[1, 2],\n#        [3, 4],\n#        [5, 6],\n#        [7, 8]])\nnd1.dot(nd2)\n# array([[ 50,  60],\n#        [114, 140]])\nnd1.dot(nd2).trace()\n# 190\n```\n\n#### 随机数和随机排列 ####\n\n不论是在构建模拟数据还是实际数据分析中, 我们都需要频繁地生成随机数或者随机抽样. NumPy 提供了众多方便使用的生成各种分布的伪随机数的函数.\n\n* `np.random.seed`: 设置随机数的种子.\n* `np.random.permutation`: 返回一个随机打乱的数组.\n* `np.random.shuffle`: 在原位随机打乱一个数组.\n* `np.random.rand`: 从均匀分布中抽取样本, 其接受参数指定返回的数组的维度. `np.random.rand(3, 2)` 返回一个 3 乘 2 的矩阵.\n* `np.random.randint`: 从指定的最低和最高的范围内抽取指定数量的整数. 如 `np.random.randint(1, 100, 20)` 从 1 到 100 中随机抽取 20 个整数.\n* `np.random.randn`: 从均值为 0, 方差为 1 的正态分布中抽取随机数, 返回指定的数量或者维度的矩阵.\n* `np.random.binomial`: 从给定数量 n 和成功概率 p 的二项分布中抽取一定数量的样本. `np.random.binomial(n, p, size)`, 其中 n 是试验的次数, p 是成功的概率, size 是抽样的数量或者维度.\n* `np.random.normal`: 从正态分布中抽取一定数量的样本.\n* `np.random.beta`: 从 beta 分布中抽取一定数量的样本.\n* `np.random.chisquare`: 从 chisquare 分布中抽取一定数量的样本.\n* `np.random.gamma`: 从 gamma 分布中抽取一定数量的样本.\n* `np.random.uniform`: 从均匀分布中抽取一定数量的样本.\n\n```\nnp.random.permutation(5)\n# array([2, 0, 1, 3, 4])\nnp.random.permutation(np.arange(6).reshape((2,3)))\n# array([[3, 4, 5],\n#        [0, 1, 2]])\n```\n\n#### 缺失值 ####",metaData:{layout:"post",title:"Numpy Get started - ndarray(转载)",excerpt:"Numpy是Python的一个科学计算的库，提供了矩阵运算的功能，本文介绍了ndarray，逻辑计算，数值计算，集合运算，统计量，线性代数，随机数和随机排列的接口。",category:"development",tags:["deeplearning","utilities"],disqus:!0}}}});