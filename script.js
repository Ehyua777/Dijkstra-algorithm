function dijkstra(graph, start) {
    // Initialiser les distances à l'infini pour tous les sommets sauf le sommet de départ
    const distances = {};
    for (const vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    // Créer un ensemble de sommets non visités
    const unvisited = new Set(Object.keys(graph));

    while (unvisited.size > 0) {
        // Trouver le sommet non visité avec la distance la plus courte
        let minDistance = Infinity;
        let minVertex = null;
        for (const vertex of unvisited) {
            if (distances[vertex] < minDistance) {
                minDistance = distances[vertex];
                minVertex = vertex;
            }
        }

        // Si aucun sommet n'a été trouvé, sortir de la boucle
        if (minVertex === null) {
            break;
        }

        // Supprimer le sommet de l'ensemble des sommets non visités
        unvisited.delete(minVertex);

        // Mettre à jour les distances des sommets voisins
        for (const neighbor in graph[minVertex]) {
            const distance = distances[minVertex] + graph[minVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        }
    }

    return distances;
}

// Exemple d'utilisation
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'A'));
// {A: 0, B: 4, C: 2, D: 5}
