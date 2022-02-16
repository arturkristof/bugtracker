@RD /S /Q target
for %%i in (*.tex) do (
    if %%i NEQ doc-template.tex pdflatex %%i -output-directory=target -aux-directory=target\auxiliary
)