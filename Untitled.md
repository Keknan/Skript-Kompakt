## Aufgabe 1
***

##### a)
Gegeben sind die Zerfälle $N=2356$ pro Minute. Um $N$ in Bq umzuwandeln, müssen wir also durch 60 teilen. Allerdings wurde uns eine Effektivität $\varepsilon=10\%$ gegeben, d.h. nur jeder zehnte Zerfall wird gemessen. Daher teilen wir auch durch $\varepsilon$

$$
A=\frac{N}{60\varepsilon}\approx 392.67\text{ Bq}
$$

Der statistische Fehler ist durch das $N$ gegeben, der radioaktive Zerfall erfolgt einer Poisson-Verteilung, diesmal mit $\mu=N$, wodurch der Fehler (die Standardabweichung) durch $\sigma_{N}=\sqrt{ N }$ gegeben ist. Dieser ist $\approx 48.54$ Zerfälle/min. Der Fehler auf die Effektivität ist bereits gegeben $\sigma_{\varepsilon}=0.5\%$. Um also nicht mit den Einheiten durcheinander zukommen, benutzen wir die relative Fehlerfortpflanzung

$$
\left( \frac{\Delta A}{A} \right)^{2}=\left( \frac{\Delta N}{N} \right)^{2}+\left( \frac{\Delta\varepsilon}{\varepsilon} \right)^{2}
$$

$\Delta x$ ist mit $\sigma_{x}$ synonym. Daraus erhalten wir für $\Delta A=\sigma_{A}$

$$
\sigma_{A}=\sqrt{ \left( \frac{48.54}{2356} \right)^{2}+\left( \frac{0.005}{0.1} \right)^{2} }\cdot 392.67\text{ Bq} \approx 21.23\text{ Bq}
$$

Also final

$$
\boxed{A=392.67\pm 21.23\text{ Bq}}
$$

##### b)
Messen wir eine Stunde, so messen wir 60 mal eine Minute, der relative Fehler auf $N$ sollte sich also mit $1 /\sqrt{ 60 }$ verkleinern $\sigma_{N}\approx 6.27$ Zerfälle pro Minute. Dadurch wird unser systematischer Fehler bedeutsam groß und trägt das meiste bei. Analog wie oben erhalten wir:

$$
\boxed{\sigma_{\tilde{A}}=19.66\text{ Bq}}
$$


## Aufgabe 2
***

##### a)
Dafür schauen wir ins Skript, und sehen, dass die Kovarianzmatrix gegeben ist durch

$$
V=
\begin{pmatrix}
\sigma_{x}^{2} & \sigma_{xy} \\
\sigma_{yx} & \sigma_{y}^{2}
\end{pmatrix}
=
\begin{pmatrix}
\sigma_{x}^{2} & \rho \sigma_{x}\sigma_{y} \\
\rho \sigma_{x}\sigma_{y} & \sigma_{y}^{2}
\end{pmatrix}
$$

Da wir schon alle Parameter gegeben haben, setzen wir einfach ein und Erhalten

$$
\boxed{V=
\begin{pmatrix}
1 & 0.6 \\
0.6 & 1
\end{pmatrix}}
$$
s
##### b)
siehe Python Skript

##### c)
siehe Python Skript

## Aufgabe 3
***

##### a) - g)
siehe Python Skript