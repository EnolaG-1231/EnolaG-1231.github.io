---
title: PDE
summary: A brief description of my document.
authors:
    - Mitsuki_G
date: 2025-11-18
---
# PDE

## Chapter 0

典型物理模型（波动 / 弦振动、热传导、Laplace / 静电位势等）都可以导出 PDE。

1. 波动（弦振动）方程  
   $$
   u_{tt} = a^{2}u_{xx} + f(x,t).
   $$

2. 热传导方程  
   $$
   u_{t} = a^{2}u_{xx} + f(x,t).
   $$

3. Laplace 方程  
   $$
   \Delta u = u_{xx} + u_{yy} = 0.
   $$

---

- **ODE**：未知函数只依赖一个自变量，例如 $u(x)$。  

- **PDE**：涉及多个自变量及其偏导数，例如  
  $$
  u(x,y),\ u_x,\ u_y,\ u_{xx},\ u_{yy},\ u_{xy},\dots
  $$

- **阶数**：方程中出现的偏导数的最高阶。  

- **线性 (L.L.)**：  
  $u$ 对每个微分项线性，则称该 PDE 为线性方程，具有叠加性。  

- **非齐次**：右端项 $f(x,y,t)\neq 0$ 时。  

- **发展 / 动力方程**：$u=u(x,t)$，例如波动方程、热方程 —— 对时间 $t$ 依赖，描述发展过程。  

- **定常 / 边值方程**：$u=u(x,y)$，例如 Laplace 方程 —— 与 $t$ 无关，描述稳态。  

---

## Chapter 1

### 1. 弦振动方程 ⟶ 一维波动方程

考虑一根细弦的 **微段小模型振动**：

- 振动方向取竖直方向，**水平合力为 0**。  
- 记号：
  - $u(x,t)$：横向位移；
  - $S(x,t)$：弦长；
  - $T(x,t)$：弦上的张力；
  - $f(x,t)$：外力密度函数（单位长度外力）。

#### (1) 质量

设线密度为 $\rho$，对小段 $[x,x+\Delta x]$，其弧长为 $\Delta S$：
$$
m = \rho\,\Delta S
   = \rho \int_{x}^{x+\Delta x} \sqrt{1 + (u_x)^2}\,\mathrm dx
   \approx \rho_0\,\Delta x,
$$
其中用到了
$$
u_x = (\tan\theta)_x,\qquad |u_x|\ll 1.
$$

#### (2) 速度变化量

该小段在时间 $\Delta t$ 内的速度变化量：
$$
\Delta v = u_t(x,t+\Delta t) - u_t(x,t).
$$

#### (3) 张力的水平平衡

两端张力在水平方向分量相等：
$$
T(x,t)\cos\theta(x,t) = T(x+\Delta x,t)\cos\theta(x+\Delta x,t).
$$

小角度近似下，
$$
\cos\theta(x)\cos\theta(x+\Delta x)\to 1
\quad\Longrightarrow\quad
T(x,t)\approx T(x+\Delta x,t)=:T_0,
$$
即理想模型下张力大小近似为常数。

#### (4) 竖直方向合力

竖直方向合力为
$$
F = T_0\,[u_x(x+\Delta x,t)-u_x(x,t)] + f(x,t)\,\Delta x.
$$

---

#### (5) 由动量定理得到波动方程

由动量定理
$$
m\,\Delta v = \bar F\,\Delta t,
$$
代入上式：
$$
\rho_0\,\Delta x\,[u_t(x,t+\Delta t)-u_t(x,t)]
=
\Delta t\left(
T_0\,[u_x(x+\Delta x,t)-u_x(x,t)] + f(x,t)\,\Delta x
\right).
$$

两边同除以 $\Delta x$，再令 $\Delta x\to 0,\ \Delta t\to 0$，得到
$$
u_{tt} = \frac{T_0}{\rho_0}\,u_{xx} + \frac{1}{\rho_0}f(x,t).
$$

记
$$
a^{2} = \frac{T_0}{\rho_0},
\qquad
f_p(x,t) = \frac{1}{\rho_0}f(x,t),
$$
则标准形式为
$$
u_{tt} = a^{2}u_{xx} + f_p(x,t),
$$
即一维弦振动的 **波动方程**。

---

### 2. 性质

#### （1）初始条件 IC

1. **只有 IC（无边界条件）**：  
   称为 Cauchy 问题 / 自由振动 / 全空间问题。

2. **定理（非正式）**：  
   若 $u$ 对 $t$ 有 $k$ 阶导数，则一般需要给出 $k$ 个关于 $t$ 的初始条件 IC。

   例如，对二阶方程

   $$
   u_{tt} = \cdots
   $$

   通常给出

   $$
   \begin{cases}
   u(x,0)   = \varphi_1(x),\\[4pt]
   u_t(x,0) = \varphi_2(x),
   \end{cases}
   $$

   也可写成一般形式

   $$
   \text{IC:}\quad
   \left.\dfrac{\partial^{\,j} u}{\partial t^{\,j}}\right|_{t=0},
   \quad j=0,1,\dots,k-1.
   $$

#### （2）BC

- 第一类 / Dirichlet：\(u|_{x=L} = f_1(t)\).
- 第二类 / Neumann：\(u_x|_{x=L} = f_2(t)\).
- 第三类 / Robin：\((u+u_x)|_{x=L} = f_1(t) + f_3(t)\).

#### （3）定解问题的解的三性质：存在、唯一、稳定。

#### （4）叠加原理

(i) 设

$$
u = \sum_{k=1}^n u_k, \qquad
u_{tt} = a^2 u_{xx} + f(x,t),
$$

于是

$$
u_{tt} = \sum_{k=1}^n u_{ktt} = a^2\biggl(\sum_{k=1}^n u_k\biggr)_{xx} + f(x,t).
$$

定义线性算子 $$\(L\)$$：

$$
L[u] = u_{tt} - a^2 u_{xx} =
\begin{cases}
0, & \text{齐次},\\
f(x,t), & \text{非齐次}.
\end{cases}
$$


齐次时，$$\(u = \sum_i c_i u_i\)，$$

$$
\Rightarrow L[u] = L\Bigl[\sum_i u_i\Bigr] = 0 
\quad\Rightarrow\quad u \text{ 也是解}.
$$

非齐次时，$$\(u_i\)$$ 是解，即

$$
u_{i,tt} = a^2 u_{i,xx} + f_i,\qquad u = \sum_i u_i,
$$

则

$$
u_{tt} = \sum_i u_{i,tt}
       = a^2 \sum_i u_{i,xx} + \sum_i f_i
       = a^2 u_{xx} + \sum_i f_i,
$$

$$（\(\sum_i f_i\)$$ —— 独立扰动的叠加）
从而

$$
L[u] = L\Bigl[\sum_i u_i\Bigr].
$$

(iii) 级数在某时空范围内收敛，则叠加原理可推广至无穷级数：

$$
u = \sum_{k=1}^{\infty} C_k\, u_k(x,t).
$$

(iii) 设 $U(x,t,M)$ 有
$$
U_t = a^2 U_{xx} + f(x,t,M),
$$
并定义
$$
U(x,t) := \int_D U(x,t,M)\,\mathrm dM,
$$
则
$$
\Rightarrow\quad
U_t = a^2 U_{xx} + \int_D f(x,t,M)\,\mathrm dM.
$$

(iv). 叠加原理方便拆分：

$$
U(x,t) = V(x,t) + W(x,t).
$$

\[
\left\{
\begin{aligned}
U_t &= V_t + W_t
     = a^2\bigl(V_{xx} + W_{xx}\bigr) + f
     = a^2(V+W)_{xx} + f
     = a^2 U_{xx} + f, \\[4pt]
\text{IC:}\quad U(0,x) &= \varphi(x) + 0
                       = V(0,x) + W(0,x), \\[4pt]
\text{BC:}\quad U\big|_{x=0} &= V\big|_{x=0} + W\big|_{x=0}, \\
U_x\big|_{x=l} &= V_x\big|_{x=l} + W_x\big|_{x=l}.
\end{aligned}
\right.
\]

### 3. 解线性无限弦长波动 E / 柯西问题  

#### ① 初始值条件的非齐次性  $\Rightarrow$  叠加原理分离问题。  

Cauchy  $\Rightarrow$  无 BC。  

原问题：

$$
\begin{cases}
u_{tt} = a^{2} u_{xx} + f(x,t), & (x,t)\in \mathbb{R}\times\mathbb{R}^+,\\
u(x,0) = \varphi(x),\\
u_t(x,0) = \psi(x).
\end{cases}
$$

叠加原理分离 $\Rightarrow$

$$
\begin{cases}
(1)\ \text{N-H IC \& H-E} \Rightarrow \text{D'Alembert 解},\\
(2)\ \text{H-IC \& N-H-E}.
\end{cases}
$$


#### ② D'Alembert 公式  $\Rightarrow$  解 N-H-IC, H-E 柯西问题：
\[
v(x,t)
= \frac12\bigl[\varphi(x+at)+\varphi(x-at)\bigr]
  + \frac{1}{2a}\int_{x-at}^{x+at}\psi(\xi)\,d\xi .
\]

### 特征线、决定域与影响域；Duhamel 原理

#### 特征线 C.L.

特征线 C.L.：
$$
\begin{cases}
x - a t = C_1,\\
x + a t = C_2.
\end{cases}
$$

记
$$
\ell_1 : x - a t = x_0 - a t_0, \qquad
\ell_2 : x + a t = x_0 + a t_0.
$$

则给定任一点 $(x_0,t_0)$，波动方程的解在该点由初始条件在**依赖区间**
$$
[x_0 - a t_0,\; x_0 + a t_0]
$$
决定。

（对应上方示意图）

```text
t
^
|        l2
|       /
|      / (x0,t0)
| l1  /
|    /
+------------------> x
  x0-at0    x0+at0

3) Duhamel 原理 → H-IC, N-H-E 柯西问题

$$
w(x,t)
= \int_{0}^{t} h(x,t,z)\,dt
= \frac{1}{2a} \int_{0}^{t} \int_{x-a(t-z)}^{x+a(t-z)} f(y,z)\,dy\,dz.
$$
