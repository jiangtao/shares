#!/bin/bash
for dir in `find . -name '*.md' | grep 'ppt'`
do
nodeppt generate $dir  -a -o ./doc
done
