from collections import deque

class Vertex:
	def __init__(self, vid=0, dist=0):
		self.vid = vid
		self.dist = dist 
		self.outedges = []
		self.inedges  = []
	def __str__(self):
		return str(self.vid)

class Edge:
	def __init__(self,head,tail,weight=1):
		self.head = head
		self.tail = tail 
		self.weight = weight

class DiGraph:
	def __init__(self):
		self.V = []
		self.E = [] 
	def print(self):
		for e in self.E:
			print(e.head,'->',e.tail,': ',e.weight)
	def createvertex(self,u):
		v = Vertex(vid=u)
		self.V.append(v)
	def createedge(self,u,v,w):
		e = Edge(self.V[u],self.V[v],w)
		self.E.append(e)
		self.V[u].outedges.append(e)
		self.V[v].inedges.append(e)
	def bfs(self,s,reachable: list):
      pass

	def spbfs(self,s,reachable: list):
      pass

	def dijkstra(self,s,X: list):
      pass 
