+++
authors = ["B.E. Alejandro"]
title = "Guia 1 de Mecanica"
description = "Guia de mecanica"
date = 2025-09-09
[taxonomies]
tags = ["Guia", "Mecanica"]
[extra]
katex = true
[extra.comments]
host = "masto.es"
user = "negasonic69"
id = "115195019369232402"
+++
## Diferencia entre una magnitud física escalar y vectorial
La diferencia entre una magnitud física escalar y vectorial, es la manera en como se transforman bajo un cambio de sistema de referencia.
Las magnitudes escalares son invariables a los cambios en los sistemas de referencia, mientras que las magnitudes vectoriales, no lo son. Para modelar una magnitud escalar se pueden utilizar
$$
a \in \mathbb{R}
$$
Mientras que para modelar magnitudes vectoriales funciona el utilizar números en $\mathbb{R}^n$
$$
\vec{v} \in \mathbb{R}^n
$$
## Vectores rectangulares y polares

| **Vectores rectangulares** | **Vectores polares** |
|:--------------------------:|:--------------------:|
|          $(a, b)$          |     $[r:\theta]$     |

{% alert(note=true) %}
**Formula para sacar Magnitudes**
$$
M = \sqrt{(a)^2 + (b)^2}
$$
{% end %}


## Leyes del álgebra Vectorial
Sean $\vec A,\vec B,\vec C$ y sean $m$ y $n$ dos escalares. En estas condiciones se verifica lo siguiente,
1. $\vec A + \vec B = \vec B + \vec A$  *(Ley conmutativa de la suma vectorial)*
2. $\vec A + \vec B + \vec C = (\vec B + \vec A) + \vec C$  *(Ley asociativa de la suma vectorial)*
3. $m \vec A = \vec A m$  *(Ley conmutativa respecto al escalar vector)*
4. $(m+n) \vec A = m\vec A + n\vec A$ *(Ley distributiva con respecto al producto de un vector con la suma de escalares)*
5. $m(\vec A + \vec B) = m\vec A + m\vec B$

## Vector unitario
Llamemos vector unitario a todo vector con Magnitud igual a uno. Cualquier vector $\vec A$ se puede representar multiplicando por cierto escalar. Estos representan se representan con el gorrito ( $\textasciicircum$ ).

{% alert(note=true) %}
**Formula para pasar de un vector $\vec A$ a uno unitario $\hat A$**
$$
\hat A=\frac{\vec A}{A}
$$
{% end %}

Donde $\hat A$ es el vector unitario igual a el vector $\vec A$ sobre su Magnitud o modulo $A$

### Ejemplo: Vector unitario
Sea $\vec r=(7,3)$, encuentre a $\hat r$.
*Primero sacamos la magnitud la cual es:*
$$
M=\sqrt{(7)^2(3)^2}
$$
$$
M=7.616
$$
*Ahora sacamos el vector unitario $\hat r$ usando la formula*
$$
\hat r=(\frac{7}{M},\frac{3}{M})
$$
$$
\hat r=(9.197\times 10^{-1},3.939\times 10^{-1})
$$
*Entonces hacemos la comprobación de esto sacando la Magnitud de este vector unitario el cual nos debe dar $1$ como magnitud ya que es unitario, como lo indica el nombre*
$$
M_{\hat r}=\sqrt{(9.197\times 10^{-1})^{2}+(3.939\times 10^{-1})^{2}}
$$
$$
M_{\hat r}=1
$$
## Vectores canónicos
Los vectores canónicos, son vectores unitarios dirigidos en alguno de las direcciones. Ejemplos:
- $(-5,2,3)=-5\mathbf{i} + 2\mathbf{j} + 3\mathbf{k}$
-  $(-1)(2,3,1)=-2\mathbf{i} - 3\mathbf{j} + \mathbf{k}$

{% alert(note=true) %}
Recordar que dos vectores son iguales, si solo si tienen la misma dimensión y cada componente correspondiente es la misma.
{% end %}

## Producto punto
(Producto escalar o producto interno) Sean $A$ y $B$ dos vectores de la misma dimensión. Definamos su producto punto de la siguiente forma:
$$
\vec A \cdot \vec B=AB\cos(\theta_{AB})
$$
*Tomando en cuenta que:*
$$
0\leq\theta_{AB}\leq\pi
$$
### Ejemplo: Producto punto
Obtenga el producto punto de $\vec A=(7,4)$ y $\vec B=(1,1)$
*Primero sacamos las Magnitudes de $A$ y $B$*
$$
M_{A}=\sqrt{(7)^2+(4)^2}=\sqrt{65}
$$
$$
M_{B}=\sqrt{(1)^2+(1)^2}=\sqrt{2}
$$
*Multiplicamos ahora las magnitudes*
$$
M_{AB}=\sqrt{65}\cdot\sqrt{2}=\sqrt{130}
$$
*Después sacamos los ángulos de $A$ y $B$*
$$
\theta_{A} = \arctan\left(\frac{4}{7}\right)=2.974\times10\cdot\frac{\pi}{180}=5.191\times10^{-1}
$$
$$
\theta_{B} = \arctan\left(\frac{1}{1}\right)=45\cdot\frac{\pi}{180}=7.857\times10^{-1}
$$
*Restamos los ángulos resultantes tomado primero el mas grande para que tengamos un numero positivo*
$$
7.857\times10^{-1}-5.191\times10^{-1}=2.663\times10^{-1}
$$
*Después usamos la formula de producto punto*
$$
\sqrt{130}\cdot\cos(2.663\times10^{-1})=11
$$
*Entonces obtenemos que el producto punto de A y B es de:*
$$
\vec A \cdot \vec B=11
$$
o simplemente:

{% alert(note=true) %}
$$
\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z
$$
{% end %}

*Sustituyendo esta formula*
$$
\vec A \cdot \vec B=(7\cdot1)+(4\cdot1)=7+4=11
$$
Note que el producto punto representa la proyección entre los vectores cuando no son colineales

### Propiedades del producto punto
1. $\vec A\cdot\vec B=\vec B\cdot\vec A$
2. $\vec A (\vec B+\vec C)=\vec A\cdot\vec B+\vec B\cdot\vec C$
3. $A^2=\vec A\cdot\vec A$
4. $\vec A \perp\vec B <=>\vec A\cdot\vec B=0$
5. $\cos \theta_{AB}=\frac{A^2+B^2-C}{2AB}$
6. $(m\vec A)\vec B=\vec A(m\vec B)=m(\vec A\cdot\vec B)$
7. $\mathbf{i}\cdot\mathbf{i}=1$          $\mathbf{i}\cdot\mathbf{j}=0$
   $\mathbf{j}\cdot\mathbf{j}=1$         $\mathbf{i}\cdot\mathbf{k}=0$
   $\mathbf{k}\cdot\mathbf{k}=1$      $\mathbf{k}\cdot\mathbf{j}=0$

## Producto cruz
Sean $A$ y $B$ dos vectores tridimensionales definimos su producto cruz como aquel vector tridimensional, tal que:


{% alert(note=true) %}
Formula para producto cruz.
$$
\vec{A} \times \vec{B} = |\vec{A}|\,|\vec{B}| \,\sin(\theta_{A-B})\,\hat{u}
$$
{% end %}


*Donde* $\hat{u}$ *es un vector unitario tridimensional, perpendicular a* $\vec{A}$ *y* $\vec{B}$, *definido como:*

$$
|a| =
\begin{cases}
\phantom{-}a & \text{si } a \geq 0, \\
-a & \text{si } a < 0.
\end{cases}
$$

*Además:*

$$
0 \leq \theta_{AB} \leq \pi,
$$

con el sentido definido por la **regla de la mano derecha**:

$$
\vec{A} \times \vec{B} > 0 \quad \text{de A a B en sentido antihorario}
$$

$$
\vec{A} \times \vec{B} < 0 \quad \text{de A a B en sentido horario}
$$



{% alert(note=true) %}
**Fórmula para el vector unitario del producto cruz:**
$$
\hat{u} = \frac{\vec{A}\times\vec{B}}{|\vec{A}|\,|\vec{B}|\sin\theta_{AB}}
$$
{% end %}

### Ejemplo de producto cruz
Encontrar el producto cruz de $A=(1,1,1$)  y $B=(1,2,3)$
**Tomando en cuenta la formula de producto cruz**
$$
\vec A\times\vec B= (M_{A}\cdot M_{B}) \sin({\theta_{A-B}})\hat u
$$
**Primero sacamos las magnitudes de ambos vectores y las multiplicamos**
$$
M_{A}=\sqrt{(1)^2+(1)^2+(1)^2}=\sqrt{3}
$$
$$
M_{B}=\sqrt{(1)^2+(2)^2+(3)^2}=\sqrt{14}
$$
$$
(M_{A}\cdot M_{B})=\sqrt{3}\cdot\sqrt{14}=\sqrt{42}
$$
**Después sacamos a $\theta$ de $A$ y $B$ usando la multiplicación de las magnitudes de ambos vectores**
$$
|\theta_{AB}| = \arccos\left(\frac{6}{\sqrt{42}}\right) = 22.2^\circ
$$
**Porque $6$?, bueno proviene del producto punto de los vectores $A$ y $B$, denotado como:**
$$
\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z
$$
**Sustituimos**
$$
\vec{A} \cdot \vec{B} = (1\cdot1)+(1\cdot2)+(1\cdot3)=1+2+3=6
$$
**Dando a $6$ como resultado. Usando estos datos sustituimos en formula de producto cruz**
$$
\vec A\times\vec B= (\sqrt{42}) \sin(22.2)\hat u=0.37\hat u
$$
**Lo cual da como resultado que le producto cruz entre $A$ y $B$ es de $0.37\hat u$**

### Propiedades del producto cruz
1. $\vec A\times\vec B=-\vec B-\vec A$ (*Es anti-conmutativo*)
2. $\vec A(\vec B + \vec C)= \vec A\times\vec B + \vec A\times\vec C$ (*Propiedad distributiva del producto cruz con respecto a la suma de vectores*)
3. $m(\vec A\times\vec B)=(m\vec A)\vec B= \vec A(m\vec B)=(\vec A\times\vec B)m$
4.  $\mathbf{i}\cdot\mathbf{i}=0$         $\mathbf{i}\cdot\mathbf{j}=\mathbf{k}$          $\mathbf{j}\cdot\mathbf{i}=\mathbf{-k}$
    $\mathbf{j}\cdot\mathbf{j}=0$         $\mathbf{i}\cdot\mathbf{k}=\mathbf{-j}$          $\mathbf{k}\cdot\mathbf{i}=\mathbf{j}$       (*Producto cruz entre vectores*)
    $\mathbf{k}\cdot\mathbf{k}=0$      $\mathbf{j}\cdot\mathbf{k}=\mathbf{i}$          $\mathbf{k}\cdot\mathbf{j}=\mathbf{-i}$              *Esto es para sacar a $\hat u$
5. $\text{Magnitud del producto cruz, representa el area del paralelogramo que forman los vectores}$
6. $\text{Si } \vec{A} \times \vec{B} = 0 \text{ y } M_{A} \neq 0, M_{B} \neq 0, \text{ entonces } \vec{A} \text{ y } \vec{B} \text{ son paralelos o antiparalelos,} \\ \text{es decir, forman un ángulo de } 0^{\circ} \text{ o } 180^{\circ}$
7. $\vec A\times\vec B=(A_{1}+A_{2}+A_{3})(B_{1}+B_{2}+B_{3})$  *De la cual sale la siguiente formula:*

{% alert(note=true) %}
**Formula para producto cruz 2**
$$
\vec A\times\vec B=(A_{2}B_{3}-A_{3}B_{2})\mathbf{i}+(A_{3}B_{1}-A_{1}B_{3})\mathbf{j}+(A_{1}B_{2}-A_{2}B_{1})\mathbf{k}
$$
{% end %}
