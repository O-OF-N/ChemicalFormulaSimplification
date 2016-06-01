# ChemicalFormulaSimplification<br />
A simple JS code to simplify chemical formula.<br />

When given a complex formula like (c(h2o(mx)3)2(h2o)(co2)4c) as input, it simplifies it and returns c6h6m6o11x6 as the output.<br />

Steps:<br />
Assume Input  = (c(h2o(mx)3)2(h2o)(co2)4c)<br />
1) Iterates over the given formula and finds the innermost component of the formula => (co2)4<br />
2) Finds the number next to the component and duplicates the component that many number of times.=>co2co2co2co2<br />
3) Performs this operation for every component in the formula =>ch2omxmxmxh2omxmxmxh2oco2co2co2co2c<br />
4) Takes every element individually and repeats it the number of times mentioned next to it => chhomxmxmxhhomxmxmxhhocoocoocoocooc<br />
5) Adds similar elements together => c6h6m6o11x6<br />
