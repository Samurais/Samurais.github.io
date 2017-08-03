---
layout: post
title: "隐马尔科夫模型和Baum-Welch算法"
excerpt: "隐马尔可夫模型（Hidden Markov Model，HMM）是统计模型，它用来描述一个含有隐含未知参数的马尔可夫过程。其难点是从可观察的参数中确定该过程的隐含参数。然后利用这些参数来作进一步的分析，例如模式识别。"
category: research
tags: [probability, algorithm]
disqus: true
---

The HMM is a generative probabilistic model, in which a sequence of observable **X** variables is generated by a sequence of internal hidden states **Z**. The hidden states are not be observed directly. The transitions between hidden states are assumed to have the form of a (first-order) Markov chain. They can be specified by the start probability vector **π** and a transition probability matrix **A**. The emission probability of an observable can be any distribution with parameters **B** conditioned on the current hidden state. The HMM is completely determined by **π**, **A** and **B**.

> From http://hmmlearn.readthedocs.io/en/latest/tutorial.html

![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-hidden-weather-example.gif)

举例来说，假设对于隐居室内的人，天气是隐含状态，海藻是可观察状态，海藻的状态和天气之间存在联系，通过观察海藻的状态来预测天气的状态。

如果使用HMM模型，我们需要知道天气的初始状态，天气的状态转移矩阵和海藻的状态转移矩阵。

## 概念
* A - 隐含状态转移概率矩阵。
描述了HMM模型中各个状态之间的转移概率。其中Aij = P( Sj | Si ),1≤i,,j≤N，表示在 t 时刻、状态为 Si 的条件下，在 t+1 时刻状态是 Sj 的概率。

* B - 观测状态转移概率矩阵，也称为混淆矩阵
令N代表隐含状态数目，M代表可观测状态数目，则：Bij = P( Oi | Sj ), 1≤i≤M,1≤j≤N，表示在 t 时刻、隐含状态是 Sj 条件下，观察状态为 Oi 的概率。

* π - 初始状态概率矩阵
表示隐含状态在初始时刻t=1的概率矩阵，(例如t=1时，P(S1)=p1、P(S2)=P2、P(S3)=p3，则初始状态概率矩阵 π=[ p1 p2 p3 ].

对于包含M个客观察状态和N个隐含状态的HMM模型来说，用**λ={ π, A, B }**来表示HMM的参数。

## HMM可以解决的问题

* 根据可观察状态的序列找到一个最可能的隐藏状态序列

一个广泛使用的例子，就是使用HMM+Viterbi算法完成词性标注任务。

* 已知模型参数，计算某一给定可观察状态序列的概率

*  根据观察到的序列集来找到一个最有可能的 HMM
Given just the observed data, estimate the model parameters.

The first and the second problem can be solved by the dynamic programming algorithms known as the Viterbi algorithm and the Forward-Backward algorithm, respectively. The last one can be solved by an iterative Expectation-Maximization (EM) algorithm, known as the Baum-Welch algorithm.


## 三个重要假设
这三个假设并不现实。

假设1：马尔可夫假设（状态构成一阶马尔可夫链）
![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-hidden-1.png)

假设2：不动性假设（状态与具体时间无关）
![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-hidden-2.png)

假设3：输出独立性假设（输出仅与当前状态有关）
![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-hidden-3.png)


## [HMM in Python](https://github.com/hankcs/hidden-markov-model)

Codes: https://github.com/hankcs/hidden-markov-model

```python
import numpy as np


class HMM:
    """
    Order 1 Hidden Markov Model

    Attributes
    ----------  
    A : numpy.ndarray
        State transition probability matrix
    B: numpy.ndarray
        Output emission probability matrix with shape(N, number of output types)
    pi: numpy.ndarray
        Initial state probablity vector

    Common Variables
    ----------------
    obs_seq : list of int
        list of observations (represented as ints corresponding to output
        indexes in B) in order of appearance
    T : int
        number of observations in an observation sequence
    N : int
        number of states
    """

    def __init__(self, A, B, pi):
        self.A = A
        self.B = B
        self.pi = pi

    def _forward(self, obs_seq):
        N = self.A.shape[0]
        T = len(obs_seq)

        F = np.zeros((N, T))
        F[:, 0] = self.pi * self.B[:, obs_seq[0]]

        for t in range(1, T):
            for n in range(N):
                F[n, t] = np.dot(F[:, t - 1], (self.A[:, n])
                                 ) * self.B[n, obs_seq[t]]

        return F

    def _backward(self, obs_seq):
        N = self.A.shape[0]
        T = len(obs_seq)

        X = np.zeros((N, T))
        X[:, -1:] = 1

        for t in reversed(range(T - 1)):
            for n in range(N):
                X[n, t] = np.sum(X[:, t + 1] * self.A[n, :]
                                 * self.B[:, obs_seq[t + 1]])

        return X

    def observation_prob(self, obs_seq):
        """ P( entire observation sequence | A, B, pi ) """
        return np.sum(self._forward(obs_seq)[:, -1])

    def state_path(self, obs_seq):
        """
        Returns
        -------
        V[last_state, -1] : float
            Probability of the optimal state path
        path : list(int)
            Optimal state path for the observation sequence
        """
        V, prev = self.viterbi(obs_seq)

        # Build state path with greatest probability
        last_state = np.argmax(V[:, -1])
        path = list(self.build_viterbi_path(prev, last_state))

        return V[last_state, -1], reversed(path)

    def viterbi(self, obs_seq):
        """
        Returns
        -------
        V : numpy.ndarray
            V [s][t] = Maximum probability of an observation sequence ending
                       at time 't' with final state 's'
        prev : numpy.ndarray
            Contains a pointer to the previous state at t-1 that maximizes
            V[state][t]
        """
        N = self.A.shape[0]
        T = len(obs_seq)
        prev = np.zeros((T - 1, N), dtype=int)

        # DP matrix containing max likelihood of state at a given time
        V = np.zeros((N, T))
        V[:, 0] = self.pi * self.B[:, obs_seq[0]]

        for t in range(1, T):
            for n in range(N):
                seq_probs = V[:, t - 1] * self.A[:, n] * self.B[n, obs_seq[t]]
                prev[t - 1, n] = np.argmax(seq_probs)
                V[n, t] = np.max(seq_probs)

        return V, prev

    def build_viterbi_path(self, prev, last_state):
        """Returns a state path ending in last_state in reverse order."""
        T = len(prev)
        yield(last_state)
        for i in range(T - 1, -1, -1):
            yield(prev[i, last_state])
            last_state = prev[i, last_state]

    def simulate(self, T):

        def draw_from(probs):
            return np.where(np.random.multinomial(1, probs) == 1)[0][0]

        observations = np.zeros(T, dtype=int)
        states = np.zeros(T, dtype=int)
        states[0] = draw_from(self.pi)
        observations[0] = draw_from(self.B[states[0], :])
        for t in range(1, T):
            states[t] = draw_from(self.A[states[t - 1], :])
            observations[t] = draw_from(self.B[states[t], :])
        return observations, states

    def baum_welch_train(self, observations, criterion=0.05):
        n_states = self.A.shape[0]
        n_samples = len(observations)

        done = False
        while not done:
            # alpha_t(i) = P(O_1 O_2 ... O_t, q_t = S_i | hmm)
            # Initialize alpha
            alpha = self._forward(observations)

            # beta_t(i) = P(O_t+1 O_t+2 ... O_T | q_t = S_i , hmm)
            # Initialize beta
            beta = self._backward(observations)

            xi = np.zeros((n_states, n_states, n_samples - 1))
            for t in range(n_samples - 1):
                denom = np.dot(np.dot(
                    alpha[:, t].T, self.A) * self.B[:, observations[t + 1]].T, beta[:, t + 1])
                for i in range(n_states):
                    numer = alpha[i, t] * self.A[i, :] * self.B[:,
                                                                observations[t + 1]].T * beta[:, t + 1].T
                    xi[i, :, t] = numer / denom

            # gamma_t(i) = P(q_t = S_i | O, hmm)
            gamma = np.squeeze(np.sum(xi, axis=1))
            # Need final gamma element for new B
            prod = (alpha[:, n_samples - 1] *
                    beta[:, n_samples - 1]).reshape((-1, 1))
            # append one more to gamma!!!
            gamma = np.hstack((gamma, prod / np.sum(prod)))

            newpi = gamma[:, 0]
            newA = np.sum(xi, 2) / \
                np.sum(gamma[:, :-1], axis=1).reshape((-1, 1))
            newB = np.copy(self.B)

            num_levels = self.B.shape[1]
            sumgamma = np.sum(gamma, axis=1)
            for lev in range(num_levels):
                mask = observations == lev
                newB[:, lev] = np.sum(gamma[:, mask], axis=1) / sumgamma

            if np.max(abs(self.pi - newpi)) < criterion and \
                    np.max(abs(self.A - newA)) < criterion and \
                    np.max(abs(self.B - newB)) < criterion:
                done = 1

            self.A[:], self.B[:], self.pi[:] = newA, newB, newpi
```

### Test

```python
import numpy as np
import hmm

states = ('Healthy', 'Fever')

observations = ('normal', 'cold', 'dizzy')

start_probability = {'Healthy': 0.6, 'Fever': 0.4}

transition_probability = {
    'Healthy': {'Healthy': 0.7, 'Fever': 0.3},
    'Fever': {'Healthy': 0.4, 'Fever': 0.6},
}

emission_probability = {
    'Healthy': {'normal': 0.5, 'cold': 0.4, 'dizzy': 0.1},
    'Fever': {'normal': 0.1, 'cold': 0.3, 'dizzy': 0.6},
}


def generate_index_map(lables):
    index_label = {}
    label_index = {}
    i = 0
    for l in lables:
        index_label[i] = l
        label_index[l] = i
        i += 1
    return label_index, index_label


states_label_index, states_index_label = generate_index_map(states)
observations_label_index, observations_index_label = generate_index_map(
    observations)


print("states_label_index", states_label_index)

print("states_index_label", states_index_label)

print("observations_label_index", observations_label_index)

print("observations_index_label", observations_index_label)

```

> 将隐性状态，显性状态存储在字典里：label->index, index->label。

![result1](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-result1.png)


```python

def convert_observations_to_index(observations, label_index):
    list = []
    for o in observations:
        list.append(label_index[o])
    return list


def convert_map_to_vector(map, label_index):
    v = np.empty(len(map), dtype=float)
    for e in map:
        v[label_index[e]] = map[e]
    return v


def convert_map_to_matrix(map, label_index1, label_index2):
    m = np.empty((len(label_index1), len(label_index2)), dtype=float)
    for line in map:
        for col in map[line]:
            m[label_index1[line]][label_index2[col]] = map[line][col]
    return m


A = convert_map_to_matrix(
    transition_probability,
    states_label_index,
    states_label_index)

print("A", A)

B = convert_map_to_matrix(
    emission_probability,
    states_label_index,
    observations_label_index)

print("B", B)
```

> 生成隐性状态的状态转移矩阵A: NxN。生成混淆矩阵：MxN。

![result2](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-result2.png)

```

# observations_index = convert_observations_to_index(
#     observations, observations_label_index)
observations_index = [0, 1, 1, 2, 2, 2, 2, 1, 0]
pi = convert_map_to_vector(start_probability, states_label_index)
print('pi', pi)
print('observations_index', observations_index)


h = hmm.HMM(A, B, pi)
V, p = h.viterbi(observations_index)
print(
    " " *
    7,
    " ".join(
        ("%10s" %
         observations_index_label[i]) for i in observations_index))
for s in range(0, 2):
    print(
        "%7s: " %
        states_index_label[s] +
        " ".join(
            "%10s" %
            ("%f" %
             v) for v in V[s]))
print('\nThe most possible states and probability are:')
p, ss = h.state_path(observations_index)
for s in ss:
    print(states_index_label[s])
print('p', p)
```

> 根据一组观测到的观测状态序列，预测隐形状态的序列。

![result3](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-result3.png)

```python
# run a baum_welch_train
observations_data, states_data = h.simulate(100)
print('observations_data', observations_data)
print('states_data', states_data)
guess = hmm.HMM(np.array([[0.5, 0.5],
                          [0.5, 0.5]]),
                np.array([[0.3, 0.3, 0.3],
                          [0.3, 0.3, 0.3]]),
                np.array([0.5, 0.5])
                )
guess.baum_welch_train(observations_data)
states_out = guess.state_path(observations_data)[1]
p = 0.0
for s in states_data:
    if next(states_out) == s:
        p += 1

print(p / len(states_data))
```

> 根据一组观察状态序列，推测最有可能的HMM参数。

![result4](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-result4.png)


# Refers

[Rabiner89]	 Lawrence R. Rabiner “A tutorial on hidden Markov models and selected applications in speech recognition”, Proceedings of the IEEE 77.2, pp. 257-286, 1989.

[Bilmes98]	Jeff A. Bilmes, “A gentle tutorial of the EM algorithm and its application to parameter estimation for Gaussian mixture and hidden Markov models.”, 1998.

[HMM的Baum-Welch算法和Viterbi算法公式推导细节(http://blog.csdn.net/xmu_jupiter/article/details/50965039)

[隐马尔科夫模型HMM的前向算法和后向算法](http://blog.csdn.net/xmu_jupiter/article/details/50956389)

[ 隐马尔可夫(HMM)、前/后向算法、Viterbi算法](http://blog.csdn.net/xueyingxue001/article/details/52396494)