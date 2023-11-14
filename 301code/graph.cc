#include "graph.h"

#include <iostream>
using namespace std; 

void DiGraph::print(){
	for(Edge *e: this->E){
		cout<<e->head->getVid()<<"->"<<e->tail->getVid()<<endl; 
	}
}
void DiGraph::createvertex(int u){
	Vertex *v = new Vertex(); 
	v->setVid(u); 
	this->V.push_back(v); 
}

void DiGraph::createedge(int u,int v,int w){
	Vertex *uV = this->V[u]; 
	Vertex *vV = this->V[v]; 

	Edge *e = new Edge(uV, vV, w); 
	this->E.push_back(e);

	//Add edge pointers
	uV->out.push_back(e); 
    vV->in.push_back(e); 
}

void DiGraph::bfs(Vertex *s, std::vector<Vertex*> &explored){
}

void DiGraph::spbfs(Vertex *s, std::vector<Vertex*> &explored){
}


void DiGraph::dijkstra(Vertex *s, std::vector<std::pair<Vertex*,int>> &X){
}

