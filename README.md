## Hi there 👋


# steps to run locally

python3 -m http.server 8000

[go to local host at port 8000](http://localhost:8000/)

# run process
lsof -nP -iTCP:8006 -sTCP:LISTEN
kill <PID>
python3 -m http.server 8006
