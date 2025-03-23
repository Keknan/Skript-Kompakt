We used the red laser to find the value of $k$, through 3 measurements, where we'd count from 0 up to 100 fringes, and noted down the position $s_{i}$ after every 10 fringes passed. Our results are in the table below.

(Tabelle)

We then plot each $s_{i}$ against their respected $m$ to perform a linear regression an find the slopes $a_{i}$ which we will take the (weighted) mean $a$ of to calculate $k$ through the formula

$$
k=\frac{\lambda}{2a}
$$

while $\lambda=632.8\pm 0.1\text{ nm}$ is known. Our linear regressions can be seen below

(Bild)

Each fit, as well as their $\chi^{2} /dof$ is demonstrated in the table below.

(Noch eine Tabelle)

We notice a strong systematic in our residual plots, probably due to the nature of the micro meter screw. The tolerance of $10\mu\text{m}$ might be too big for an exact measurement. The "Anleitungsmappe" also mentions, that dialing up can cause the screw to tighten and falsify our measurement. This seems to be the case. Those points reflect in our $\chi^{2}/dof$. This might also be due to our relatively poor "Rauschmessung" at the beginning. Calculating the $\sigma_{s}$ at $m=0$ results in a fit very close to 1, yet we must not use that measurement. We can also see that almost every error on our residuals (10/10 for the first, 8/10 for the second and third) crosses the zero line, which deviates from our expected 2/3. 

Our $a_{i}$ are compatible so we will calculate the weighted mean and its error

$$
\begin{align}
a&=\frac{\sum_{i=1}^{3}a_{i}\cdot \frac{1}{\sigma_{a_{i}}^{2}}}{\sum_{i=1}^{3} \frac{1}{\sigma_{a_{i}}^{2}}} \approx 6.22\cdot 10^{-6}\text{ m} \\
\sigma_{a}&=\frac{1}{\sqrt{ \sum_{i=1}^{3} 1/\sigma_{a_{i}}^{2} }} \approx 2.66\cdot 10^{-8}\text{ m}
\end{align}
$$

The order in which we will calculate $k$ (first mean of $a_{i}$, then calculate $k$, or calculate each $k_{i}$, then take its mean) does not matter. Finally, we get:

$$
k=\frac{\lambda_{red}}{2a}\approx{0.05088}
$$

We find $\sigma_{k}$ through Gaussian error propagation. Our systematic error on $k$ will be due to $\lambda$:

$$
\sigma_{sys,k}=\frac{1}{2a}\cdot \sigma_{\lambda} \approx 8.04\cdot 10^{-6}
$$

The statistical error is therefore determined by $a$:

$$
\sigma_{stat,k}=\frac{\lambda}{2a^{2}}\cdot \sigma_{a}\approx 0.00022
$$

The statistical error is 27 times larger than the systematical, and therefore contributes only a little. Our final error on $k$ is:

$$
\sigma_{k}=\sqrt{ \sigma_{sys,k}^{2}+\sigma_{stat,k}^{2} }\approx 0.00022
$$

Which leaves us with

$$
\boxed{k=0.05088\pm 0.00022}
$$

