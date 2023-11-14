#include <iostream>
#include <fstream>
#include <sstream>
#include <chrono>
#include <iomanip> 

#include "graph.h"

using namespace std;

void loadGraphVertices(DiGraph &G,std::string filename){
	std::ifstream file(filename);
    if (!file.is_open()) {
        std::cerr << "Error opening file: " << filename << std::endl;
        return;
    }
    std::string line; 

    int i = 0; 
    while (std::getline(file, line)) {
    	int u = std::stoi(line);
    	G.createvertex(u); 
    }
}

void loadGraphEdges(DiGraph &G,std::string filename){
	std::ifstream file(filename);
    if (!file.is_open()) {
        std::cerr << "Error opening file: " << filename << std::endl;
        return;
    }
    std::string line;

    while (std::getline(file, line)) {
    	std::istringstream iss(line);
        std::string u_str, v_str, weight;

        if (!std::getline(iss, u_str, ',') || !std::getline(iss, v_str,',') || !std::getline(iss, weight)) {
            std::cerr << "Error parsing line: " << line << std::endl;
            continue;
        }

        try {
            int u = std::stoi(u_str);
            int v = std::stoi(v_str);
            int w = std::stoi(weight); 
            G.createedge(u,v,w); 
            
        } catch (const std::exception& e) {
            std::cerr << "Error parsing integers from line: " << line << std::endl;
            continue;
        }
    }

    cout<<"Edges added: "<<G.E.size()<<endl;
}


//g++ -std=c++17 graph.cc main.cc
int main(int argc, char**argv){
	DiGraph G;
	std::vector<Vertex*> reachable;
	std::vector<pair<Vertex*,int>> dist;
	int s = 0; 

	if (argc > 1){
		std::string filename(argv[1]); 
		cout<<"Loading DiG from files "<<filename<<endl; 
		loadGraphVertices(G,filename+".v");
		cout<<"Vertices added."<<endl;
		loadGraphEdges(G,filename+".e");
		cout<<"Edges added."<<endl;
	}
	else {
		exit(-1);
	}

	cout<<"Done mapping the DiG to memory."<<endl; 

   //Complete the main function as needed. 


	return 0;
}
