***

Mit dem Oszilloskop wurden insgesamt 10 Frequenzen aufgenommen, welche an dem Frequenzgenerator abgelesen wurden. Der gemessene Wert am Oszilloskop der Frequenz wurde nicht in Erwägung gezogen, aufgrund des hohen Rauschens an manchen Frequenzen:

(Tabelle)

Zur Bestimmung der Messunsicherheiten wurde keine Wiederholungsmessung vorgenommen, sondern der Bereich abgeschätzt, in dem das Oszilloskop keine Amplitudenänderung der Schwingung anzeigt. Daher variieren die einzelnen Frequenzen, da es Fälle gab, wo die Welle besonders stabil angezeigt wurde, und Fälle wo dies eben nicht der Fall gewesen ist. Allgemein sind die Fehler jedoch gut abgeschätzt worden, was wir gleich begründen werden können.

Diese Frequenzen $f_{n}$ wurden gegen $n$ aufgetragen, um eine lineare Regression durchzuführen. Aus der Steigung $m= v_{schall,2} /(2L)$ lässt sich wiederum die Schallgeschwindigkeit $v_{schall,2}$ ermitteln. 

(Plot)

Auf $dof=8$ Freiheitsgrade erhalten wir ein $\chi^{2}=8.1$ was wiederum $\chi^{2} /dof= 8.1 /8 \approx 1.01$ entspricht. Unsere Fehler sind also gut abgeschätzt, was man auch am Residuenplot erkennen kann: Wir erkennen keinen systematischen Fehler, und 6/10 Fehlerbalken schneiden die Nulllinie, was nahezu 2/3 entspricht. Der große Fehler des letzten Residuums ist einem großen Rauschen des Oszilloskops bei maximaler Mikrofonempfindlichkeit zu verdanken.

Wir erhalten $m=407.8303\pm 0.0519\text{ Hz/}n$, und eine gemessene Rohrlänge von $L=0.42\pm 0.00030\text{ m}$. Daraus erhalten wir $v_{schall,2}=2mL \approx 342.5775\text{ m/s}$. Mit einer Fehlerfortpflanzung

$$
\sigma_{v_{schall}}=\sqrt{ (2L\cdot \sigma_{m})^{2}+(2m\cdot \sigma_{L})^{2} }
$$

kommen wir auf eine Unsicherheit von $\sigma_{v_{schall}}=\pm 0.2462\text{ m/s}$, was einem relativen Fehler von $\sigma_{v_{schall}} /v_{schall}\approx 0.07\%$ ist. Vergleich mit dem Literaturwert $v_{lit,2}=344.5617\text{ m/s}$ bei $T=21.8\degree\text{C}$ liefert den Fehler $1-|v_{schall,2} /v_{lit,2}|=0.58\%$. Unsere Messung ist also äußerst genau gewesen.

## Teil 3
***

Es wurde die sechste Resonanzfrequenz $f=2451.5$ genutzt, und mit dem Oszilloskop geschaut, wann die Amplitude maximal ist (Die Frequenz weicht minimal ab, da das Mikrofon minimal bewegt worden ist). Auf analogem Weg wie in 2 wurde ein Fehler von $\sigma_{f}=0.4\text{ Hz}$ abgelesen. Die Positionen $x_{n}$ wurden ebenfalls über das Oszilloskop abgelesen, und die Fehler $\sigma_{x_{n}}$ dadurch abgeschätzt, indem man das Mikrofon geringfügig nach oben und unten bewegt, und schaut, wann das Oszilloskop eine Änderung anzeigt. Wir erhalten folgende Messwerte:

(Tabelle)

Wir werden gleich sehen, dass diese Fehler überschätzt sind. Gründe dafür sind hauptsächlich fehlende Zeit bei der Versuchsdurchführung, wodurch unsere Messwerte sehr grob ausgewählt worden sind, als auch mangelnde Datenpunkte (6 Stück). Dies wird man auch bei der Schallgeschwindigkeit sehen. 

Bauch- und Knotenpositionen wurden ebenfalls in einen $x_{n}-n-$Plot aufgetragen, um eine lineare Regression durchzuführen:

(Plot)

Wir erhalten eine Steigung von $m_{1}=0.0361\pm 0.0008\text{ m/}n$, und ein $\chi^{2}=0.6585$ auf $dof=4$ Messwerte, was $\chi^{2} /dof=0.6585 /4\approx 0.1646$ beträgt. Skaliert man die Fehler um einen Faktor $0.4$ erhält man eine Güte von 1.01, was ein klares Indiz auf Fehlerüberschätzung ist. Auch alle Fehlerbalken der Residuen schneiden die Nulllinie, schwanken jedoch statistisch. Unsere Messung ist also nicht die Beste, kann aber durch eine geeignete Fehlerkorrektur verringert werden.

Zur Bestimmung der Schallgeschwindigkeit bei festem $f$, und Vermessung der Knoten *und* Bäuche, daher stammt der Faktor 4, rechnen wir $v_{schall}=4fm_{1}$. Wir erhalten $v_{schall,3}=353.6955\text{ m/s}$ und über die gleiche Fehlerfortpflanzung den Fehler $\sigma_{v_{schall,3}}=\pm 8.1622\text{ m/s}$. Das ist ein relativer Fehler von $\sigma_{v_{schall,3}} /v_{schall,3} \approx 2.31\%$. Im Vergleich zu Messung 1 & 2 ist diese Messung also eher schlecht. Vergleich mit dem Literaturwert $v_{lit,3}=344.7953\text{ m/s}$ bei $T=22.2\degree\text{C}$ liefert die Abweichung $1- v_{lit,3} /v_{schall,3}\approx 2.52\%$. Unsere Messwerte lassen sich also einigermaßen vereinbaren.

$$
\left( \frac{1}{2} \right)
$$