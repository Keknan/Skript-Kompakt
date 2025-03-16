***

## Bestimmung der Frequenzen
***

Zur Bestimmung der Schwingungsfrequenzen und ihren Unsicherheiten, wurde sich der gewichtete Mittelwert zu Nutze gemacht. Dabei benutzte man als Werte $x_{i}=f_{i}$ die Frequenzen der $x$-Achse, und als Gewichte $w_{i}=f_{1,i}=I_{i}$ die einzelnen Amplituden der Frequenzen, die wie Intensitäten behandelt worden sind. Außerdem wurde nur die höchste Amplitude der FFt betrachtet, die nieder- bzw. höher-Harmonischen sind Resultate der Transversalschwingung des Stabes. Weitere Gründe könnten auch an den Schwingungen der anderen Stäbe im Raum sein.

Wir erhalten also den gewichteten Mittelwert

$$
f_{0}=\frac{\sum_{i=1}^{n}f_{i}\cdot I_{i}}{\sum_{i=1}^{n}I_{i}}
$$

für jede Messung. Über den Python Befehl "np.argmax()" wurde die Spitze der FFT ermittelt, und folglich ein symmetrisches Intervall der Breite 200 um dieses Intervall gelegt, um den Peak Schwerpunkt zu ermitteln. Die Streuung wurde über die gewichtete Standardabweichung mit Korrekturwert $(M-1) /M$ bestimmt.

$$
\sigma=\sqrt{ \frac{\left( \sum_{i=1}^{n}I_{i}(f_{i}-f_{0})^{2} \right)}{\frac{M-1}{M}\sum_{i=1}^{n}I_{i}} }
$$

$M$ gibt dabei die Anzahl der Datenpunkt an, das sind hier 200. Dies entspricht der Streuung der Frequenzwerte, aus dem man den statistischen Fehler ziehen kann. Den genauen Fehler auf den Mittelwert $\sigma_{f_{0}}$ bestimmt man dann über 

$$
\sigma_{f_{0}}=\frac{\sigma}{\sqrt{ M }}
$$

Dies wurde für jede Messung der jeweiligen Stäbe getan, für den goldenen Stab existierten nur zwei. Die einzelnen ermittelten Frequenzen jeder Messung sind unten aufgeführt:

| Messung | Gold                              | Bronze                            | Glanz                             | Silber                             |
| ------- | --------------------------------- | --------------------------------- | --------------------------------- | ---------------------------------- |
| 1       | $f_{0}=1293.82\pm 0.39\text{ Hz}$ | $f_{0}=1512.25\pm 0.55\text{ Hz}$ | $f_{0}=1885.07\pm 0.60\text{ Hz}$ | $f_{0}=1967.88 \pm 0.34\text{Hz}$  |
| 2       | $f_{0}=1293.81\pm 0.35\text{ Hz}$ | $f_{0}=1512.27\pm 0.56\text{ Hz}$ | $f_{0}=1885.11\pm 0.60\text{ Hz}$ | $f_{0}=1967.93 \pm 0.34\text{ Hz}$ |
| 3       |                                   | $f_{0}=1512.33\pm 0.54\text{ Hz}$ | $f_{0}=1885.08\pm 0.6\text{ Hz}$  | $f_{0}=1967.96 \pm 0.35\text{ Hz}$ |

Unter der gleichen Logik kann man erneut einen gewichteten Mittelwert und eine gewichtete Standardabweichung, die zum Fehler auf den Mittelwert führt, für jedes Material durchführen. Unsere finalen Frequenzen, samt Fehlern lauten:

| Material | Frequenz                              |
| -------- | ------------------------------------- |
| Gold     | $f_{0}=1293.8166\pm0.2594\text{ Hz}$  |
| Bronze   | $f_{0}=1512.2861\pm0.3172\text{ Hz}$  |
| Glanz    | $f_{0}=1885.0837\pm0.3477\text{ Hz}$  |
| Silber   | $f_{0}=1967.9232\pm 0.1958\text{ Hz}$ |

Mit diesen Frequenzen arbeiten wir. Die systematische Messunsicherheit auf der Frequenz rührt auf die Breite des Frequenzspektrums her. Aus unseren Analysen erkennt man jedoch einen sehr ausgezeichneten Peak der einzelnen Messungen, wodurch eine Variation der (symmetrischen!) Breite wenig geändert hat. Dieser systematische Fehler wird auch gleichzeitig in der Methodik der gewichteten Standardabweichung bestimmt. Es wurde natürlich sichergegangen, dass nicht aus Versehen ein zweiter ungewünschter Peak durch schlechtes Anschlagen, oder Hintergrundgeräusche in den gewichteten Mittelwert einfließt. Des Weiteren konnten wir auch die Streuung jeder einzelnen Messung der Stäbe bestimmen:


| Messung | Gold                    | Bronze                  | Glanz                   | Silber                  |
| ------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| 1       | $\sigma=5.47\text{ Hz}$ | $\sigma=7.76\text{ Hz}$ | $\sigma=8.53\text{ Hz}$ | $\sigma=4.75\text{ Hz}$ |
| 2       | $\sigma=4.95\text{ Hz}$ | $\sigma=7.95\text{ Hz}$ | $\sigma=8.49\text{ Hz}$ | $\sigma=4.76\text{ Hz}$ |
| 3       |                         | $\sigma=7.61\text{ Hz}$ | $\sigma=8.53\text{ Hz}$ | $\sigma=4.88\text{ Hz}$ |

Wir liegen also mit unserem Messbereich weit außerhalb des 5-$\sigma$-Konfidenzintervalls und sollten eine sehr genau Messung erhalten können.

## Länge, Durchmesser, Masse, E-Modul und Dichte
***

Fangen wir mit $L$ an. Eine Wiederholungsmessung zur Verringerung der statistischen Messunsicherheit wurde nicht durchgeführt (bspw. durch Rotation des Stabes), wodurch wir einen einzelnen Wert für $L$ in jedem Fall erhalten haben. Die statistische Messunsicherheit ergibt sich aus dem Ablesefehler innerhalb der Grenzen der Gleichverteilung:

$$
\sigma_{L,\text{stat}}= \frac{1\text{ mm}}{\sqrt{ 12 }}\approx 0.00029\text{ m}
$$

Für den systematischen Messfehler $\sigma_{L,\text{sys}}$ wurde das Maßband untersucht. Aus der Güteklasse II und einer Länge $L_{\text{Band}}=2\text{ m}$ ergibt sich ein systematischer Messfehler von

$$
\sigma_{L,\text{sys}}=\pm0.7\text{ mm}=\pm 0.0007\text{ m}
$$

Der Gesamtfehler ergibt sich dann aus der Gaußschen Fehlerfortpflanzung

$$
\left( \frac{\Delta L}{L} \right)^{2}=\left( \frac{\sigma_{L,\text{stat}}}{L} \right)^{2}+\left( \frac{\sigma_{L,\text{sys}}}{L} \right)^{2}
$$

wobei man schnell erkennt, dass der Gesamtfehler (wir nennen nun $\Delta L\to \sigma_{L}$)

$$
\sigma_{L}=\sqrt{ \sigma_{L,\text{stat}}^{2}+\sigma_{L,\text{sys}}^{2} }\approx 0.00076\text{ m}
$$

ist. Diese Formel werden wir auch für $D$ benutzen. Wir gehen analog vor und bestimmen

$$
\sigma_{D,\text{stat}}^{*}=\frac{0.01\text{ mm}}{\sqrt{ 12 }}\approx 0.0000029\text{m}
$$

Hierbei müssen wir jedoch aufpassen. Da wir mehrere Messwerte von $D$ vorgenommen haben, reduziert sich der statistische Messfehler auf $\sigma_{D,\text{stat}}=\sigma_{D,\text{stat}} /\sqrt{ N }$, wobei $N$ die Anzahl der Messungen sind. Aus der Anleitungsmappe wurde uns ein systematischer Fehler auf die Mikrometerschraube von

$$
\sigma_{D,\text{sys}}=\pm 4\cdot 10^{-6}\text{ m}
$$

angegeben. Über die aus $L$ ermittelte Formel lässt sich dann für jeden Stab $\sigma_{D}$ bestimmen.

Für die Masse geht man ebenso analog vor, der systematische Fehler aus der Anleitungsmappe lautet $\sigma_{M,\text{sys}}=\pm 0.2\text{ g}$, der statistische Fehler ergibt sich wieder aus der Digitalisierung $\sigma_{M,\text{stat}}=\pm 0.1\text{g} /\sqrt{ 12 }$. Die einzelnen Messwerte und Fehler sind unten tabelliert.

Als nächstes kommt die Dichte. Da wir hier mit Fehlerbehafteten Größen rechnen, die

$$
\rho=\frac{M}{\pi L(D/2)^{2}}
$$

beschreiben sollen, führen wir auch hier eine Gaußsche Fehlerfortpflanzung durch.

$$
\sigma_{\rho}^{2}=\left( \frac{\partial \rho}{\partial M}\sigma_{M}  \right)^{2}+\left( \frac{\partial \rho}{\partial L}\sigma_{L}  \right)^{2}+\left( \frac{\partial \rho}{\partial D}\sigma_{D}  \right)^{2}
$$

Diese Rechnung wurde von Python übernommen, da alle ermittelten Werte über "ufloat" gespeichert wurden. Da $D$ quadratisch ist, gilt auch für die Fehlerfortpflanzung folgendes:

$$
\left( \frac{\Delta \rho}{\rho} \right)^{2}=\left( \frac{\Delta M}{M} \right)^{2}+\left( \frac{\Delta L}{L} \right)^{2}+\left( 2 \frac{\Delta D}{D} \right)^{2}
$$

der Fehler auf $D$ ist also von besonderer Bedeutung, daher wurde $D$ auch mehrmals (Für 3 Stäbe 4 mal, für den Aluminiumstab 10 Mal) gemessen. Da wir den systematischen Fehler bereits für alle Parameter berücksichtigt haben, erhalten wir den Gesamtfehler auf die Dichte sofort.

Die Gleiche Fehlerfortpflanzung findet für den Elastizitätsmodul statt, wodurch wir hier auch betrachten, dass $f_{0}$ quadratisch gezählt wird:

$$
\sigma_{E}^{2}=\left( \frac{\partial E}{\partial M}\sigma_{M}  \right)^{2}+\left( \frac{\partial E}{\partial L}\sigma_{L}  \right)^{2}+\left( \frac{\partial E}{\partial D}\sigma_{D}  \right)^{2}+\left( \frac{\partial E}{\partial f_{0}}\sigma_{f_{0}}  \right)^{2}
$$

bzw.

$$
\left( \frac{\Delta E}{E} \right)^{2}=\left( \frac{\Delta M}{M} \right)^{2}+\left( \frac{\Delta L}{L} \right)^{2}+\left( 2 \frac{\Delta D}{D} \right)^{2}+\left( 2 \frac{\Delta f_{0}}{f} \right)^{2}
$$

Hierbei tragen die Unsicherheiten auf $f_{0},D$ besonders bei. Daher die gründliche Auswertung im vorigen Abschnitt. Wir kommen also zu den finalen E-Moduln und Dichten:

| Material  | $E$                                         | $\rho$                                           |
| --------- | ------------------------------------------- | ------------------------------------------------ |
| Messing   | $(9.5600\pm 0.0095)\cdot 10^{10}\text{ Pa}$ | $(8.4612\pm 0.0077)\cdot 10^{3}\text{ kg/m}^{3}$ |
| Kupfer    | $(1.3779\pm0.0014)\cdot 10^{11}\text{ Pa}$  | $(8.9125\pm0.0081)\cdot 10^{3}\text{ kg/m}^{3}$  |
| Stahl     | $(1.9030\pm0.0019)\cdot 10^{11}\text{ Pa}$  | $(7.9221\pm0.0072)\cdot 10^{3}\text{ kg/m}^{3}$  |
| Aluminium | $(7.3377\pm0.0076)\cdot 10^{10}\text{ Pa}$  | $(2.8028\pm0.0029)\cdot 10^{3}\text{ kg/m}^{3}$  |

Wir erkennen also einen sehr geringen Fehler (ein ungefährer relativer Fehler aller Stäbe von ~$0.1\%$), unsere Messwerte sind also ziemlich genau. Da uns bereits mitgeteilt wurde, welche Materialien vorliegen, kann man direkt mit Literaturwerten vergleichen. Hieraus lässt sich auch mehr Informationen ziehen, welche systematischen Fehler noch vorliegen. Bspw. hätte man die Messdauer erhöhen können (Unsere lag bei 2.5s), und das Messintervall verkleinern können (Wir stellten $20\mu\text{s}$) ein. Weitere Gründe könnte die Temperatur des Raumes gewesen sein, da die Literaturwerte bei $20\degree\text{C}$ aufgenommen wurden. Die Temperatur im Raum war höher, wodurch der Stab sich minimal ausdehnen konnte. Dies könnte besonders $D$ verändern, $f_{0}$ nur geringfügig, aufgrund der Linearität von $L$. Literaturwerte sind unten aufgefasst:

| Material  | $E_{\text{lit}}$          | $\rho_{\text{lit}}$                            |
| --------- | ------------------------- | ---------------------------------------------- |
| Messing   | $78\dots 123\text{ GPa}$  | $(8.41\dots 8.86)\cdot 10^{3}\text{ kg/m}^{3}$ |
| Kupfer    | $100\dots 130\text{ GPa}$ | $8.92\cdot 10^{3}\text{ kg/m}^{3}$             |
| Stahl     | $190\dots 210\text{ GPa}$ | $7.87\cdot 10^{3}\text{ kg/m}^{3}$             |
| Aluminium | $70\text{ GPa}$           | $2.6989\cdot 10^{3}\text{ kg/m}^{3}$           |
Die Werte liegen also nah an den Literaturwerten (besonders die Dichten), jedoch weichen die E-Moduln etwas ab. Dabei schwankt Kupfer am meisten. Jedoch ist die Qualität unserer Messung brauchbar, und liegen im Rahmen des Möglichen.

$$

$$