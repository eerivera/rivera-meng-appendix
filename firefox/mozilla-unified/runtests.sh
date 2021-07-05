#!/bin/bash

csvfile="example-withoutmpk.csv"

rm ../logfiles/$csvfile || true
touch ../logfiles/$csvfile

for i in range{1..1000}
do
MOZBUILD_STATE_PATH=/opt/eerivera/firefox/.mozbuild/ ./mach test libpref/ --sequential
done
