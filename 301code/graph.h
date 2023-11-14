#ifndef GRAPH_H
#define GRAPH_H

#include <vector>
#include <queue>
#include <iostream>

class Edge; 

class Vertex {
    int vid; 
    int dist; //used to store distances when needed. Must initialize before use.
public:
    std::vector<Edge*> out; 
    std::vector<Edge*> in; 
    Vertex(int vid = 0) : vid(vid) { dist = 0; }
    int getVid() const { return vid; }
    void setVid(int v) { vid = v; }
    int getDist() { return dist; }
    void setDist(int d) { dist = d; }
};

class Edge {
public:
    Vertex *head;
    Vertex *tail;
    int weight; 
    Edge(Vertex *u, Vertex *v, int w) : head(u), tail(v), weight(w) {}
    void print() { std::cout<<head->getVid()<<"->"<<tail->getVid(); }
};

class DiGraph {
public:
    std::vector<Vertex*> V;
    std::vector<Edge*> E;

    void print(); 
    void createvertex(int u); 
    void createedge(int u,int v,int w); 
    void bfs(Vertex *s, std::vector<Vertex*> &explored);
    void spbfs(Vertex *s, std::vector<Vertex*> &explored);
    void dijkstra(Vertex *s, std::vector<std::pair<Vertex*,int>> &X);
};

#endif