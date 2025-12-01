# O(v + e) time | O(v) spave
# v = no. of vertices (no. of nodes), e = no. of edges
def twoColorable(edges):
    colors = [None] * len(edges)
    colors[0] = True
    stack = [0]
    while len(stack) > 0:
        vi = stack.pop()
        for v in edges[vi]:
            if colors[v] == colors[vi]:
                return False
            if colors[v] == None:
                colors[v] = not colors[vi]
                stack.append(v)
        
    return True
