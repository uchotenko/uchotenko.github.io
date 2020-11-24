import sys

with open('files.txt') as f:
  files = f.read()

sep_files = files.splitlines()

out = "var files = ["

for f in sep_files:
  out += '"' + f + '", '

out += "];"

sys.stdout.write(out)