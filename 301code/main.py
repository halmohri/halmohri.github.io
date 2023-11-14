import csv,sys
from graph import *

def load_graph(G,vfile,efile):
	f=open(vfile)
	for line in f:
		G.createvertex(int(line))
	f.close()
	f=open(efile)
	r=csv.reader(f)
	for row in r:
		G.createedge(int(row[0]),int(row[1]),int(row[2]))

vfile = sys.argv[1] + '.v'
efile = sys.argv[1] + '.e'

G = DiGraph()
load_graph(G,vfile,efile)
#G.print()

reachable = []
#G.bfs(G.V[0], reachable)
#print([v.vid for v in reachable])

print('BFS: ')
G.spbfs(G.V[0], reachable)
for v in reachable:
	print(v.vid,':',v.dist,end=' ')
print('')

reachable = [] 
print('Dijkstra: ')
G.dijkstra(G.V[0], reachable)
for v in reachable:
	print(v.vid,':',v.dist,end=' ')
print('')